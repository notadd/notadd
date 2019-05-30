import { NestFactory } from '@nestjs/core';
import { CmsModule } from './cms.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { getConfig } from '@notadd/magnus-client'
const options = getConfig();
export async function bootstrap() {
    const app = await NestFactory.create(CmsModule, { bodyParser: false });
    app.connectMicroservice({
        transport: Transport.GRPC,
        options: {
            url: `${options.host}:${options.grpcPort}`,
            package: 'noxus',
            protoPath: `${__dirname}/main.proto`
        }
    })
    await app.startAllMicroservicesAsync();
    await app.listen(options.graphqlPort);
}
bootstrap();
