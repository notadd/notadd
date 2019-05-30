import { Module } from '@nestjs/common';
import { MagnusServerModule } from '@notadd/magnus';
import entities from '@noxus/db';
@Module({
    imports: [
        MagnusServerModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'magnus',
            password: 'magnus',
            database: 'magnus',
            entities
        })
    ]
})
export class ApplicationModule { }