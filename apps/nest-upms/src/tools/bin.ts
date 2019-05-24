import { join, extname } from 'path';
import { build } from './build';
const root = process.cwd();
import glob from 'glob';
import { createConnection } from 'typeorm';
import entities from '../typeorm'
async function bootstrap() {
    createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'test_ci',
        synchronize: true,
        entities: [
            ...entities
        ]
    }).then(connection => {
        connection.close()
    }).catch(e => {
        console.log(`数据库连接错误`)
    });
    glob(join(root, 'apps/nest-upms/src/**/*.ts'), {}, (err, files) => {
        files.map(path => {
            if (path.endsWith('.ts')) {
                const ext = extname(path);
                const name = path.replace(ext, '');
                build(path, name);
            }
        })
    });
}

bootstrap();