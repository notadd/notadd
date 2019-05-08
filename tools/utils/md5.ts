import { createHash } from 'crypto';
import { readFileSync } from 'fs';

export function getFileMD5(path: string | Buffer) {
  let file: Buffer;
  if (Buffer.isBuffer(path)) {
    file = path;
  } else {
    file = readFileSync(path);
  }
  return createHash('md5')
    .update(file)
    .digest('hex');
}
