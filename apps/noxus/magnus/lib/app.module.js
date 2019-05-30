"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const magnus_1 = require("@notadd/magnus");
const db_1 = require("@noxus/db");
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'magnus',
    password: 'magnus',
    database: 'magnus',
    synchronize: true,
    ...process.env
};
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            magnus_1.MagnusServerModule.forRoot({
                ...config,
                entities: db_1.default
            })
        ]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map