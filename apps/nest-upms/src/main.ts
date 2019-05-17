import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(ApplicationModule,{
    transport: Transport.GRPC,
    options: {
      url: 'localhost:3010',
      package: 'sso',
      protoPath: join(__dirname,'sso/sso.proto'),
    }
  });
  await app.listenAsync();
}
bootstrap();
