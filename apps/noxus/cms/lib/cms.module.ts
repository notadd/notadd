import { MagnusClientModule } from '@notadd/magnus-client'
import { Module } from '@nestjs/common';
import { join } from 'path';

@Module({
    imports: [
        MagnusClientModule.create({
            inputGolb: join(__dirname, '/**/*.ts'),
            outputPath: __dirname,
            apollo: {
                uri: 'http://localhost:9000'
            }
        })
    ]
})
export class CmsModule { }