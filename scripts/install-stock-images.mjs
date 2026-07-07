import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);
const OUT = 'public/images';

const px = (id, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const entries = {
  hero: px(3866807, 1920),
  about: px(1571460, 1400),
  'team-director': px(590016, 1200),
  'team-deputy-1': px(323705, 1200),
  'team-deputy-2': px(443383, 1200),
  'service-1': px(93487, 1200),
  'service-2': px(1662159, 1200),
  'service-3': px(1396122, 1200),
  'service-4': px(1571463, 1200),
  'service-5': px(590020, 1200),
  'service-6': px(280222, 1200),
  'portfolio-1': px(1396132, 1200),
  'portfolio-2': px(323780, 1200),
  'portfolio-3': px(534220, 1200),
  'portfolio-4': px(106399, 1200),
  'portfolio-5': px(1216589, 1200),
  'portfolio-6': px(269077, 1200),
};

fs.mkdirSync(OUT, { recursive: true });

for (const [name, url] of Object.entries(entries)) {
  const tmp = path.join(OUT, `.${name}.tmp`);
  const out = path.join(OUT, `${name}.jpg`);
  try {
    await execFileAsync('curl', [
      '-fsSL',
      '--connect-timeout',
      '30',
      '--max-time',
      '180',
      '-A',
      'Mozilla/5.0',
      '-o',
      tmp,
      url,
    ]);
    await sharp(tmp).jpeg({ quality: 88 }).toFile(out);
    fs.unlinkSync(tmp);
    console.log('ok', name);
  } catch {
    console.warn('skip', name);
  }
}

if (fs.existsSync(path.join(OUT, 'hero.jpg'))) {
  await sharp(path.join(OUT, 'hero.jpg'))
    .resize(1200)
    .jpeg({ quality: 88 })
    .toFile('public/og-image.jpg');
}

console.log('done');
