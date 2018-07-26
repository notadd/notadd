import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { ApplicationController } from "./application.controller";
import { ApplicationResolver } from "./application.resolver";
import { ApplicationService } from "./application.service";

@Module({
    imports: [GraphQLModule],
    controllers: [ApplicationController],
    providers: [ApplicationResolver, ApplicationService],
    exports: []
})
export class ApplicationModule { }