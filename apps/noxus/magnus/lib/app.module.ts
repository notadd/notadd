import { Module } from '@nestjs/common';
import { MagnusServerModule, ConnectionOptions } from '@notadd/magnus';
import entities from '@noxus/db';
const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'magnus',
    password: 'magnus',
    database: 'magnus',
    synchronize: true,
    ...process.env
}
@Module({
    imports: [
        MagnusServerModule.forRoot({
            ...config,
            entities
        })
    ]
})
export class ApplicationModule { }