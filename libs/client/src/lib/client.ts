import { MagnusClientModule as NotaddMagnusClient } from '@notadd/magnus-client';
import { Module, DynamicModule } from '@nestjs/common';
import { join } from 'path';

@Module({})
export class MagnusClientModule {
    static forRoot(path: string, uri: string = 'http://localhost:3333/api'): DynamicModule {
        return NotaddMagnusClient.create({
            inputGolb: join(path, '**/*.ts'),
            outputPath: path,
            apollo: {
                uri: uri,
                fetch: require('node-fetch')
            }
        })
    }
}