import { Inject } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";

import { ApplicationService } from "./application.service";

@Resolver()
export class ApplicationResolver {
    constructor(
        @Inject(ApplicationService) private readonly appService: ApplicationService,
    ) { }

    @Query("root")
    async root(): Promise<string> {
        return this.appService.root();
    }
}