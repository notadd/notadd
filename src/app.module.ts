import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
    imports: [GraphQLModule],
    controllers: [AppController],
    providers: [AppResolver, AppService],
    exports: []
})
export class AppModule { }