import sharp from 'sharp';

const path = process.argv[2] || 'public/logo.png';
const OUTLINE_DEPTH = 6;

function isGold(r, g, b) {
  return r > 75 && g > 55 && b < 120 && r > b + 10 && g > 30 && r + g + b > 90;
}

function isDark(r, g, b) {
  return r + g + b < 115;
}

function isGoldEdge(r, g, b) {
  return r > 40 && g > 28 && b < 105 && r + g > b + 15 && r + g + b > 55;
}

const { data, info } = await sharp(path)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const px = new Uint8Array(data);
const keep = new Uint8Array(width * height);
const at = (x, y) => y * width + x;
const idx = (x, y) => at(x, y) * 4;

const queue = [];

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = idx(x, y);
    if (!isGold(px[i], px[i + 1], px[i + 2])) continue;
    const p = at(x, y);
    if (keep[p]) continue;
    keep[p] = 1;
    queue.push([x, y, 0]);
  }
}

while (queue.length) {
  const [x, y, depth] = queue.pop();
  if (depth >= OUTLINE_DEPTH) continue;

  for (const [nx, ny] of [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ]) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
    const p = at(nx, ny);
    if (keep[p]) continue;

    const i = idx(nx, ny);
    const r = px[i];
    const g = px[i + 1];
    const b = px[i + 2];

    if (isGold(r, g, b) || isDark(r, g, b)) {
      keep[p] = 1;
      queue.push([nx, ny, depth + 1]);
    }
  }
}

// Anti-aliased gold edges
const radius = 1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (keep[at(x, y)]) continue;
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
        if (!keep[at(nx, ny)]) continue;
        const i = idx(x, y);
        if (isGoldEdge(px[i], px[i + 1], px[i + 2])) keep[at(x, y)] = 1;
      }
    }
  }
}

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = idx(x, y);
    px[i + 3] = keep[at(x, y)] ? 255 : 0;
  }
}

let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (px[idx(x, y) + 3] > 0) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
}

const pad = 8;
minX = Math.max(0, minX - pad);
minY = Math.max(0, minY - pad);
maxX = Math.min(width - 1, maxX + pad);
maxY = Math.min(height - 1, maxY + pad);
const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;

const cropped = Buffer.alloc(cropW * cropH * 4);
for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const si = idx(x + minX, y + minY);
    const di = (y * cropW + x) * 4;
    cropped[di] = px[si];
    cropped[di + 1] = px[si + 1];
    cropped[di + 2] = px[si + 2];
    cropped[di + 3] = px[si + 3];
  }
}

await sharp(cropped, { raw: { width: cropW, height: cropH, channels: 4 } })
  .png()
  .toFile(path);

const kept = [...keep].filter(Boolean).length;
console.log(`Logo: ${cropW}x${cropH}, kept=${kept}`);
