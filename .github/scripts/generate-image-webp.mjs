// Generates WebP versions of every source image at build time — replaces
// the wsrv.nl third-party resizing proxy with self-hosted variants baked
// into the Pages deploy. Mirrors generate-image-manifest.mjs's directory
// walk. Never committed to git; regenerated fresh on every deploy, right
// alongside image-manifest.json, so dropping a new .jpg into images/ is
// still all you ever have to do by hand.
//
// For every images/commissions/gallery/<formato>/<final>/<n>.jpg and
// images/portfolio/<n>.jpg, writes, next to the original:
//   <n>.webp       full-size (capped at 2000px wide), quality 82
//   <n>-500.webp   width 500  (card front-preview cycle)
//   <n>-350.webp   width 350  (portfolio grid thumbnail)
//   <n>-150.webp   width 150  (commission gallery modal thumbnail)
// Same widths/quality wsrvThumb() used to request from wsrv.nl, so visual
// output doesn't change — only where the file is served from.
//
// avatar.jpg and every images/reviews/<n>.jpg only ever get the full-size
// conversion — small, low-traffic images, not worth extra variants.
//
// hero.jpg is the exception: it's full-viewport-width and doubles as both
// the header banner and (same file, cropped via CSS) the footer, so it's
// the single heaviest image most visitors load — and previously the ONLY
// image on the whole site with no responsive sizing at all, meaning a
// phone on 3G downloaded the exact same 2000px file a 4K desktop did.
// Gets HERO_WIDTHS variants (hero-640.webp / hero-1080.webp /
// hero-1600.webp) alongside the existing full hero.webp (2000w) — main.js
// picks whichever fits the viewport.
//
// Also writes image-placeholders.json — a tiny (~16px wide) blurred base64
// WebP for every portfolio + gallery image, inlined directly as a data URI
// so the browser can paint an instant blur-up placeholder with zero extra
// requests, instead of a flat empty box while the real image loads. Scoped
// to portfolio grid + commission gallery thumbs only (the two spots users
// actually scroll past quickly) — not generated for avatar/hero/reviews,
// which load once and don't need it.

import { readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import sharp from 'sharp';

const GALLERY_ROOT = 'images/commissions/gallery';
const PORTFOLIO_ROOT = 'images/portfolio';
const REVIEWS_ROOT = 'images/reviews';
const SINGLE_FILES = ['images/avatar/avatar.jpg'];
const HERO_FILE = 'images/hero/hero.jpg';
const PLACEHOLDERS_OUTPUT = 'image-placeholders.json';

const NUMBERED_JPG = /^(\d+)\.jpg$/i;
const THUMB_WIDTHS = [150, 350, 500];
const HERO_WIDTHS = [640, 1080, 1600];
const FULL_MAX_WIDTH = 2000;
const THUMB_QUALITY = 70;
const FULL_QUALITY = 82;
const PLACEHOLDER_WIDTH = 16;
const PLACEHOLDER_QUALITY = 40;

function listDirs(path) {
  if (!existsSync(path)) return [];
  return readdirSync(path, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

function listNumberedJpgs(path) {
  if (!existsSync(path)) return [];
  return readdirSync(path)
    .map((name) => name.match(NUMBERED_JPG))
    .filter(Boolean)
    .map((m) => m[1]);
}

async function writeFull(inputPath) {
  const dir = dirname(inputPath);
  const base = basename(inputPath).replace(/\.jpg$/i, '');
  await sharp(inputPath)
    .resize({ width: FULL_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: FULL_QUALITY })
    .toFile(join(dir, `${base}.webp`));
}

async function writeThumbs(inputPath) {
  const dir = dirname(inputPath);
  const base = basename(inputPath).replace(/\.jpg$/i, '');
  for (const w of THUMB_WIDTHS) {
    await sharp(inputPath)
      .resize({ width: w })
      .webp({ quality: THUMB_QUALITY })
      .toFile(join(dir, `${base}-${w}.webp`));
  }
}

// Same idea as writeThumbs but at hero-appropriate widths/quality — these
// are meant to fill most of the viewport, not sit in a small card or
// thumbnail, so they stay at FULL_QUALITY rather than THUMB_QUALITY.
// withoutEnlargement means a source narrower than a given width just
// skips that variant instead of upscaling it.
async function writeHeroWidths(inputPath) {
  const dir = dirname(inputPath);
  const base = basename(inputPath).replace(/\.jpg$/i, '');
  for (const w of HERO_WIDTHS) {
    await sharp(inputPath)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: FULL_QUALITY })
      .toFile(join(dir, `${base}-${w}.webp`));
  }
}

async function makePlaceholder(inputPath) {
  const buf = await sharp(inputPath)
    .resize({ width: PLACEHOLDER_WIDTH })
    .webp({ quality: PLACEHOLDER_QUALITY })
    .toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

let count = 0;
const failed = [];
const placeholders = { commissions: {}, portfolio: {} };

// Runs fn(), and on failure logs the file + error and lets the caller
// skip it instead of crashing the whole build. Returns true on success.
async function tryProcess(src, fn) {
  try {
    await fn();
    return true;
  } catch (err) {
    console.error(`generate-image-webp.mjs: SKIPPING broken image "${src}" — ${err.message}`);
    failed.push(src);
    return false;
  }
}

for (const formatoKey of listDirs(GALLERY_ROOT)) {
  const formatoPath = join(GALLERY_ROOT, formatoKey);
  placeholders.commissions[formatoKey] = {};
  for (const finalKey of listDirs(formatoPath)) {
    const finalPath = join(formatoPath, finalKey);
    placeholders.commissions[formatoKey][finalKey] = {};
    for (const n of listNumberedJpgs(finalPath)) {
      const src = join(finalPath, `${n}.jpg`);
      const ok = await tryProcess(src, async () => {
        await writeFull(src);
        await writeThumbs(src);
        placeholders.commissions[formatoKey][finalKey][n] = await makePlaceholder(src);
      });
      if (ok) count++;
    }
  }
}

for (const n of listNumberedJpgs(PORTFOLIO_ROOT)) {
  const src = join(PORTFOLIO_ROOT, `${n}.jpg`);
  const ok = await tryProcess(src, async () => {
    await writeFull(src);
    await writeThumbs(src);
    placeholders.portfolio[n] = await makePlaceholder(src);
  });
  if (ok) count++;
}

for (const n of listNumberedJpgs(REVIEWS_ROOT)) {
  const src = join(REVIEWS_ROOT, `${n}.jpg`);
  const ok = await tryProcess(src, async () => {
    await writeFull(src);
  });
  if (ok) count++;
}

for (const file of SINGLE_FILES) {
  if (existsSync(file)) {
    const ok = await tryProcess(file, async () => {
      await writeFull(file);
    });
    if (ok) count++;
  }
}

if (existsSync(HERO_FILE)) {
  const ok = await tryProcess(HERO_FILE, async () => {
    await writeFull(HERO_FILE);
    await writeHeroWidths(HERO_FILE);
  });
  if (ok) count++;
}

writeFileSync(PLACEHOLDERS_OUTPUT, JSON.stringify(placeholders));
writeFileSync('image-webp-failures.json', JSON.stringify(failed));

console.log(`generate-image-webp.mjs: wrote WebP variants for ${count} source images, plus ${PLACEHOLDERS_OUTPUT}.`);
if (failed.length) {
  console.warn(`generate-image-webp.mjs: ${failed.length} image(s) skipped due to errors:\n  ${failed.join('\n  ')}`);
}
