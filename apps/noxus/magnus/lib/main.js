"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
// import { Transport } from '@nestjs/common/enums/transport.enum';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.ApplicationModule, { bodyParser: false });
    // app.connectMicroservice({
    //     transport: Transport.GRPC,
    //     options: {
    //         url: 'localhost:3010',
    //         package: 'noxus',
    //         protoPath: `${__dirname}/main.proto`
    //     }
    // })
    // await app.startAllMicroservicesAsync();
    await app.listen(9000);
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map