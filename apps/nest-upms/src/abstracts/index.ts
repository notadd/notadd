import { User, Token } from '../models/model'
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
// 这个自定义
export abstract class UserService {
    abstract createToken(user: User): Promise<Token>;
}
export abstract class JwtStrategy extends PassportStrategy(Strategy) {
    // token to user
    abstract validate(payload: Token): Promise<User>;
}
// 这个自定义
@Injectable()
export abstract class JwtAuthGuard extends AuthGuard('jwt') {
    // 是否可以激活
    abstract canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    // 返回错误或Token
    abstract handleRequest<T>(err: any, user: User, info: any): T;
}

export interface NestUpmsConfig { 
    JwtStrategy: JwtStrategy;
    JwtAuthGuard: JwtAuthGuard[];
}
