import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { APP_CONFIG } from './configurations/app.config';

async function bootstrap() {
    const logger = new Logger('Notadd');
    logger.log(APP_CONFIG.banner);

    const app = await NestFactory.create(AppModule);

    await app.listen(5000, '0.0.0.0', () => {
        logger.log('Notadd GraphQL IDE Server started on: http://localhost:5000/graphql');
    });
}

bootstrap();