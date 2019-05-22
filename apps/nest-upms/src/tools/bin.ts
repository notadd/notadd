
import { join, extname } from 'path';
import { build } from './build';
const root = process.cwd();
import glob from 'glob';
import { getConnectionManager } from 'typeorm';

const connectionManager = getConnectionManager()
const connection = connectionManager.create({
    type: 'cockroachdb',
    host: '192.168.1.144',
    port: 26257,
    username: 'root',
    password: 'root',
    database: 'defaultdb',
    logging: false,
    entities: [
        "/**/*.entity.ts"
    ],
    synchronize: true,
})
connection.connect();

glob(join(root, 'apps/nest-upms/src/**/*.ts'), {}, (err, files) => {
    files.map(path => {
        if (path.endsWith('.ts')) {
            const ext = extname(path);
            const name = path.replace(ext, '');
            build(path, name);
        }
    })
});
