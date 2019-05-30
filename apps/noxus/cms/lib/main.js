"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cms_module_1 = require("./cms.module");
const transport_enum_1 = require("@nestjs/common/enums/transport.enum");
const magnus_client_1 = require("@notadd/magnus-client");
const options = magnus_client_1.getConfig();
async function bootstrap() {
    const app = await core_1.NestFactory.create(cms_module_1.CmsModule, { bodyParser: false });
    app.connectMicroservice({
        transport: transport_enum_1.Transport.GRPC,
        options: {
            url: `${options.host}:${options.grpcPort}`,
            package: 'noxus',
            protoPath: `${__dirname}/main.proto`
        }
    });
    await app.startAllMicroservicesAsync();
    await app.listen(options.graphqlPort);
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map