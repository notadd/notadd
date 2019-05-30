"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cms_module_1 = require("./cms.module");
const transport_enum_1 = require("@nestjs/common/enums/transport.enum");
async function bootstrap() {
    const app = await core_1.NestFactory.create(cms_module_1.CmsModule, { bodyParser: false });
    app.connectMicroservice({
        transport: transport_enum_1.Transport.GRPC,
        options: {
            url: 'localhost:3010',
            package: 'noxus',
            protoPath: `${__dirname}/main.proto`
        }
    });
    await app.startAllMicroservicesAsync();
    await app.listen(9001);
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map