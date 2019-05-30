import { NestFactory } from '@nestjs/core';
import { CasbinModule } from './casbin.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { getConfig } from '@notadd/magnus-client'
export async function bootstrap() {
    const app = await NestFactory.create(CasbinModule, { bodyParser: false });
    const options = getConfig();
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
