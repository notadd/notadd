import { NestFactory } from '@nestjs/core'
import { Module } from '@nestjs/common'

@Module({})
export class AppModule { }

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.listen(9000)
}

bootstrap();