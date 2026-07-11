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
// The single fixed images (avatar, hero, review avatars) only ever get the
// full-size conversion — they're never resized on the fly.

import { readdirSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import sharp from 'sharp';

const GALLERY_ROOT = 'images/commissions/gallery';
const PORTFOLIO_ROOT = 'images/portfolio';
const REVIEWS_ROOT = 'images/reviews';
const SINGLE_FILES = ['images/avatar/avatar.jpg', 'images/hero/hero.jpg'];

const NUMBERED_JPG = /^(\d+)\.jpg$/i;
const THUMB_WIDTHS = [150, 350, 500];
const FULL_MAX_WIDTH = 2000;
const THUMB_QUALITY = 70;
const FULL_QUALITY = 82;

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

let count = 0;

for (const formatoKey of listDirs(GALLERY_ROOT)) {
  const formatoPath = join(GALLERY_ROOT, formatoKey);
  for (const finalKey of listDirs(formatoPath)) {
    const finalPath = join(formatoPath, finalKey);
    for (const n of listNumberedJpgs(finalPath)) {
      const src = join(finalPath, `${n}.jpg`);
      await writeFull(src);
      await writeThumbs(src);
      count++;
    }
  }
}

for (const n of listNumberedJpgs(PORTFOLIO_ROOT)) {
  const src = join(PORTFOLIO_ROOT, `${n}.jpg`);
  await writeFull(src);
  await writeThumbs(src);
  count++;
}

for (const n of listNumberedJpgs(REVIEWS_ROOT)) {
  await writeFull(join(REVIEWS_ROOT, `${n}.jpg`));
  count++;
}

for (const file of SINGLE_FILES) {
  if (existsSync(file)) {
    await writeFull(file);
    count++;
  }
}

console.log(`generate-image-webp.mjs: wrote WebP variants for ${count} source images.`);
