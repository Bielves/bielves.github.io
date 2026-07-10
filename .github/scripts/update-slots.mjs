// Reads the Trello board (via secrets passed as env vars), counts how many
// cards are sitting in the "active" lists, and writes the result to
// slots.json at the repo root. slots.json has NO secrets in it — it's the
// only thing the public website ever reads.
//
// Required env vars (set as GitHub Actions secrets):
//   TRELLO_KEY, TRELLO_TOKEN, TRELLO_BOARD
//
// Non-secret settings (how many slots total, which lists count as "active")
// live in config.json at the repo root so you can tweak them without
// touching the workflow.

import { readFileSync, writeFileSync } from 'node:fs';

const { TRELLO_KEY, TRELLO_TOKEN, TRELLO_BOARD } = process.env;

if (!TRELLO_KEY || !TRELLO_TOKEN || !TRELLO_BOARD) {
  console.error('Missing TRELLO_KEY, TRELLO_TOKEN or TRELLO_BOARD environment variables.');
  process.exit(1);
}

let config;
try {
  config = JSON.parse(readFileSync('config.json', 'utf8'));
} catch (err) {
  console.error('Could not read/parse config.json at repo root:', err.message);
  process.exit(1);
}

const { maxSlots, activeLists } = config;

if (typeof maxSlots !== 'number' || !Array.isArray(activeLists)) {
  console.error('config.json must have a numeric "maxSlots" and an array "activeLists".');
  process.exit(1);
}

const url =
  `https://api.trello.com/1/boards/${TRELLO_BOARD}/lists` +
  `?cards=open&card_fields=id&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`;

const res = await fetch(url);

if (!res.ok) {
  console.error(`Trello API error: ${res.status} ${res.statusText}`);
  console.error(await res.text());
  process.exit(1);
}

const lists = await res.json();

let activeCards = 0;
for (const list of lists) {
  if (activeLists.includes(list.name)) {
    activeCards += list.cards.length;
  }
}

const available = Math.max(0, maxSlots - activeCards);
const status = available > 0 ? 'OPEN' : 'CLOSED';

const slots = {
  available,
  maxSlots,
  status,
  updatedAt: new Date().toISOString()
};

writeFileSync('slots.json', JSON.stringify(slots, null, 2) + '\n');

console.log('slots.json updated:', slots);
