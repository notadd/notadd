import { Injectable, Module, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-jwt';
import { AuthService, JwtStrategy } from "./abstracts";
import { User } from "./models/db";
import { Token } from "./models/model";
import { NestUpmsModule } from ".";

@Injectable()
export class TestJwtService extends AuthService {
    constructor(private readonly jwtService: JwtService) {
        super();
    }

    async createToken(user: User): Promise<Token> {
        const token = await this.jwtService.sign(user.username);
        return { accessToken: token, expiresIn: 3600 }
    }
}

@Injectable()
export class TestStrategy extends JwtStrategy {
    async validate(payload: Token): Promise<User> {
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}

@Module({
    imports: [NestUpmsModule.forChild(TestStrategy)]
})
export class TestModule { }

