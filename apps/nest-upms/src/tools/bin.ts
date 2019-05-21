
import { join, extname } from 'path';
import { build } from './build';
const root = process.cwd();
import glob from 'glob';

glob(join(root, 'apps/nest-upms/src/**/*.ts'), {}, (err, files) => {
    files.map(path => {
        if (path.endsWith('.ts')) {
            const ext = extname(path);
            const name = path.replace(ext, '');
            build(path, name);
        }
    })
});
