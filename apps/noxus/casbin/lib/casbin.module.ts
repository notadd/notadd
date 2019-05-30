import { Module } from '@nestjs/common';
import { MagnusClientModule, getConfig } from '@notadd/magnus-client'
import { join } from 'path';
const options = getConfig();
@Module({
    imports: [
        MagnusClientModule.create({
            inputGolb: join(__dirname, '/**/*.ts'),
            outputPath: __dirname,
            apollo: {
                uri: `http://${options.host}:${options.magnusPort}`
            }
        })
    ]
})
export class CasbinModule { }
