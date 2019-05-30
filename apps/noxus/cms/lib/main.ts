import { NestFactory } from '@nestjs/core';
import { CmsModule } from './cms.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
export async function bootstrap() {
    const app = await NestFactory.create(CmsModule, { bodyParser: false });
    app.connectMicroservice({
        transport: Transport.GRPC,
        options: {
            url: 'localhost:3010',
            package: 'noxus',
            protoPath: `${__dirname}/main.proto`
        }
    })
    await app.startAllMicroservicesAsync();
    await app.listen(9001);
}
bootstrap();
