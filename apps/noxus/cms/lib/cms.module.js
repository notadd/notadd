"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const magnus_client_1 = require("@notadd/magnus-client");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const magnus_client_2 = require("@notadd/magnus-client");
const article_controller_1 = require("./controller/article.controller");
const article_service_1 = require("./service/article.service");
const options = magnus_client_2.getConfig();
let CmsModule = class CmsModule {
};
CmsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            magnus_client_1.MagnusClientModule.create({
                inputGolb: path_1.join(__dirname, '/**/*.ts'),
                outputPath: __dirname,
                apollo: {
                    uri: `http://${options.magnusHost}:${options.magnusPort}`
                }
            })
        ],
        controllers: [
            article_controller_1.ArticleController,
        ],
        providers: [
            article_controller_1.ArticleController,
            article_service_1.ArticleService
        ]
    })
], CmsModule);
exports.CmsModule = CmsModule;
//# sourceMappingURL=cms.module.js.map