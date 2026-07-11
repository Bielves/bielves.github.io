// Walks the images/ folder tree and writes image-manifest.json at the repo
// root — a plain listing of which numbered example images (and which
// captions.md entries) actually exist. main.js reads this instead of
// probing/guessing filenames with speculative HEAD requests, which used to
// spam the console with expected-but-avoidable 404s for every tier/example
// combination that doesn't exist yet.
//
// Runs as a step in static.yml, right before actions/upload-pages-artifact,
// so the manifest is always regenerated fresh from whatever's actually in
// images/ at deploy time. It's a build artifact only — never committed
// back to git, and nothing here needs to be edited by hand when you add or
// remove images; just drop files in the usual folders and push.
//
// Covers two trees:
//   images/commissions/gallery/<formatoKey>/<finalKey>/<n>.jpg
//   images/portfolio/<n>.jpg
// (avatar/hero/reviews images aren't numbered example sets — they're
// single fixed files loaded via tryBgImage()'s own onload/onerror check in
// main.js, so they don't need a manifest entry.)

import { readdirSync, readFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const GALLERY_ROOT = 'images/commissions/gallery';
const PORTFOLIO_ROOT = 'images/portfolio';
const OUTPUT_PATH = 'image-manifest.json';

const NUMBERED_JPG = /^(\d+)\.jpg$/i;
const CAPTION_KEYS = ['TITLE_PT', 'TITLE_EN', 'DESC_PT', 'DESC_EN'];

// Same captions.md block format/parsing main.js used to do client-side —
// see the "PORTFOLIO CAPTIONS" comment block in main.js for the full
// format description. Kept here since parsing now happens at build time.
function parseCaptionsMd(text) {
  const result = {}; // "n" -> { TITLE_PT, TITLE_EN, DESC_PT, DESC_EN }
  let currentN = null;
  let currentKey = null;
  text.split('\n').forEach((raw) => {
    const line = raw.replace(/\r$/, '');
    const headerMatch = line.match(/^\s*\[(\d+)\]\s*$/);
    if (headerMatch) {
      currentN = headerMatch[1];
      currentKey = null;
      if (!result[currentN]) result[currentN] = {};
      return;
    }
    if (line.trim() === '') {
      currentKey = null;
      return;
    }
    const keyMatch = line.match(/^([A-Z_]+):\s?(.*)$/);
    if (keyMatch && CAPTION_KEYS.includes(keyMatch[1]) && currentN !== null) {
      currentKey = keyMatch[1];
      result[currentN][currentKey] = keyMatch[2];
      return;
    }
    if (currentKey && currentN !== null) {
      result[currentN][currentKey] += ' ' + line.trim();
    }
  });
  return result;
}

function listDirs(path) {
  if (!existsSync(path)) return [];
  return readdirSync(path, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

// Returns { numbers, captions } for one folder of numbered images (+
// optional captions.md) — numbers is every <n>.jpg actually present,
// sorted ascending, with no assumption that they're contiguous or capped
// at any maximum. Safe on a missing/empty folder: just comes back empty,
// never throws.
function readNumberedFolder(path) {
  if (!existsSync(path)) return { numbers: [], captions: {} };

  const numbers = readdirSync(path)
    .map((name) => name.match(NUMBERED_JPG))
    .filter(Boolean)
    .map((match) => parseInt(match[1], 10))
    .sort((a, b) => a - b);

  const captionsPath = join(path, 'captions.md');
  const captions = existsSync(captionsPath)
    ? parseCaptionsMd(readFileSync(captionsPath, 'utf8'))
    : {};

  return { numbers, captions };
}

const commissions = {};
for (const formatoKey of listDirs(GALLERY_ROOT)) {
  const formatoPath = join(GALLERY_ROOT, formatoKey);
  commissions[formatoKey] = {};
  for (const finalKey of listDirs(formatoPath)) {
    commissions[formatoKey][finalKey] = readNumberedFolder(join(formatoPath, finalKey));
  }
}

const portfolio = readNumberedFolder(PORTFOLIO_ROOT);

const manifest = {
  generatedAt: new Date().toISOString(),
  commissions,
  portfolio
};

writeFileSync(OUTPUT_PATH, JSON.stringify(manifest) + '\n');

const formatoCount = Object.keys(commissions).length;
const finalCount = Object.values(commissions).reduce((sum, f) => sum + Object.keys(f).length, 0);
console.log(
  `${OUTPUT_PATH} written: ${formatoCount} formato folders, ${finalCount} finalização folders, ` +
  `${portfolio.numbers.length} portfolio images.`
);
