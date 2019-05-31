import { MagnusClientModule as NotaddMagnusClient } from '@notadd/magnus-client';
import { Module, DynamicModule } from '@nestjs/common';
import { join } from 'path';

@Module({
    imports: []
})
export class MagnusClientModule {
    static forRoot(path: string): DynamicModule {
        return NotaddMagnusClient.create({
            inputGolb: join(path, '**/*.ts'),
            outputPath: path,
            apollo: {
                uri: 'http://localhost:3333',
                fetch: require('node-fetch')
            }
        })
    }
}