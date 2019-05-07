import { User, Token } from '../models/model'
import { AuthGuard, PassportStrategy, } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

export abstract class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',
        });
    }
    // token to user
    abstract validate(payload: Token): Promise<User>;
}
// 这个自定义
@Injectable()
export abstract class JwtAuthGuard extends AuthGuard('jwt') {
    // 是否可以激活
    abstract canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    // 返回错误或Token
    abstract handleRequest<T>(err: any, user: T, info: any): T;
}
