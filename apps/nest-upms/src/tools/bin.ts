
import { join, extname } from 'path';
import chokidar from 'chokidar';
import { build } from './build'
const root = process.cwd()
chokidar.watch(join(root, 'apps/nest-upms/src')).on('all', (opt: string, path: string) => {
    if (path.endsWith('.ts')) {
        const ext = extname(path)
        const name = path.replace(ext, '')
        build(path, `${name}.graphql`)
    }
});
