import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    async root(): Promise<string> {
        return 'Hello World.';
    }
}