import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "../abstracts/services";
import { User } from "../models/model/user";

@Controller('/user')
export class UserContoller {
    constructor(public auth: AuthService) { }
    @Post()
    login(@Body() user: User) {
        return this.auth.createToken(user)
    }
}
