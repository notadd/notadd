import { Controller, Get, Inject } from "@nestjs/common";

import { ApplicationService } from "./application.service";

@Controller()
export class ApplicationController {
    constructor(
        @Inject(ApplicationService) private readonly appService: ApplicationService,
    ) { }

    @Get()
    async root(): Promise<string> {
        return this.appService.root();
    }
}