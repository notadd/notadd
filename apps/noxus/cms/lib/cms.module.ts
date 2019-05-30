import { MagnusClientModule } from '@notadd/magnus-client'
import { Module } from '@nestjs/common';
import { join } from 'path';
import { getConfig } from '@notadd/magnus-client'
import { ArticleController } from './controller/article.controller';
import { ArticleService } from './service/article.service';
const options = getConfig();
@Module({
    imports: [
        MagnusClientModule.create({
            inputGolb: join(__dirname, '/**/*.ts'),
            outputPath: __dirname,
            apollo: {
                uri: `http://${options.magnusHost}:${options.magnusPort}`,
                fetch: require('node-fetch')
            }
        })
    ],
    controllers: [
        ArticleController,
    ],
    providers: [
        ArticleController,
        ArticleService
    ]
})
export class CmsModule { }