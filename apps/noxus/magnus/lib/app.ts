import { Module } from '@nestjs/common';
import { MagnusServerModule } from '@notadd/magnus';
import { } from '@noxus/db';
@Module({
    imports: [
        MagnusServerModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'magnus',
            password: 'magnus',
            database: 'magnus'
        })
    ]
})
export class AppModule { }