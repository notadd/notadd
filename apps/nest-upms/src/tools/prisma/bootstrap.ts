import { exec, ExecOptions } from 'shelljs';
import { create } from './createPrisma';
import { join } from 'path';
import { bootstrap as db } from '../bootstrap'
const root = process.cwd();
export async function bootstrap() {
    create();
    const projectRoot = join(root, 'config');
    console.log(projectRoot)
    // 先启动postgres
    console.log(`停止postgres`)
    await execAsync(`docker-compose kill postgres`, {
        cwd: join(projectRoot, 'postgres')
    });
    console.log(`启动postgres`)
    await execAsync(`docker-compose up -d`, {
        cwd: join(projectRoot, 'postgres')
    });
    await db();
    console.log(`停止Notadd`)
    await execAsync(`docker-compose kill notadd`, {
        cwd: join(projectRoot, 'postgres')
    });
    console.log(`启动Notadd`)
    await execAsync(`docker-compose up -d`, {
        cwd: join(projectRoot, 'notadd')
    });
    console.log(`初始化notadd`)
    await execAsync(`prisma deploy`, {
        cwd: join(projectRoot, 'notadd')
    });
    console.log('完成');
}
export function execAsync(comand: string, opt: ExecOptions) {
    return new Promise((resolve, reject) => {
        exec(comand, opt, (code, out, err) => {
            console.log({
                code,
                out,
                err
            })
            resolve();
        });
    });
}
bootstrap();