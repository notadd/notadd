"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({})
], AppModule);
exports.AppModule = AppModule;
async function bootstrap() {
    const app = await core_1.NestFactory.create(AppModule);
    app.listen(9000);
}
bootstrap();
//# sourceMappingURL=index.js.map