import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { AppService } from './app.service';

@Resolver()
export class AppResolver {
    constructor(
        @Inject(AppService) private readonly appService: AppService,
    ) { }

    @Query('root')
    async root(): Promise<string> {
        return this.appService.root();
    }
}