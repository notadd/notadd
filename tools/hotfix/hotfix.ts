import chalk from 'chalk';
import { readFileSync, removeSync, writeFileSync } from 'fs-extra';
import globby from 'globby';
import Ora from 'ora';
import { join } from 'path';
import { cwd, exit } from 'process';

import { getFileMD5 } from '../utils/md5';

const ora = Ora();
console.log(chalk.bgGreen.black('热修复'));
function fixFile(path: string, md5: string, fixStr: string, fixMd5: string) {
  const msg = chalk.green(path);
  ora.start(msg);
  const fileMd5 = getFileMD5(path);
  if (fileMd5 !== fixMd5) {
    if (fileMd5 === md5) {
      writeFileSync(path, fixStr);
      ora.succeed(msg + chalk.blue(' [更改]'));
    } else {
      ora.fail(chalk.red(path) + ' ' + chalk.red(fileMd5));
      exit();
    }
  }
  ora.succeed(msg);
}

const node_modules_files = join(__dirname, './node_modules_files/**');
const fixFileRoot = join(__dirname, './node_modules_files/');
async function fixFiles() {
  const files = await globby(node_modules_files).then(arr =>
    arr.map(d => {
      let p = d.lastIndexOf('.');
      let md5 = d.slice(p + 1);
      let needUpdateFile = false;

      if (md5.length < 10) {
        needUpdateFile = true;
        p = d.length;
      }

      const fixPath: string = d.slice(0, p);
      const fixStr = readFileSync(d, { encoding: 'utf8' });
      const fixMd5 = getFileMD5(d);
      const path = join(
        cwd(),
        'node_modules',
        fixPath.replace(fixFileRoot, '')
      );

      if (needUpdateFile) {
        md5 = getFileMD5(path);
        writeFileSync(`${d}.${md5}`, fixStr);
        removeSync(d);
      }

      return {
        md5,
        path,
        fixStr,
        fixMd5
      };
    })
  );

  files.forEach(d => {
    const { md5, path, fixStr, fixMd5 } = d;
    fixFile(path, md5, fixStr, fixMd5);
  });
}

fixFiles();
