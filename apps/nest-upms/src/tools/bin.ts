
import { join } from 'path';
import chokidar from 'chokidar';
const root = process.cwd()
chokidar.watch(join(root, 'apps/nest-upms/src/')).on('all', (...args: any[]) => { 
    console.log(args)
});
// build(join(process.cwd(), ''), join(process.cwd(), ''))

