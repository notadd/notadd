import { Injectable } from "@nestjs/common";

@Injectable()
export class ApplicationService {

    async root(): Promise<string> {
        return "Hello World.";
    }
}