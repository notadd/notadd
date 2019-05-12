import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// 这个自定义
@Injectable()
export abstract class JwtAuthGuard extends AuthGuard('jwt') {
    // 是否可以激活
    abstract canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    // 返回错误或Token
    abstract handleRequest<T>(err: any, user: T, info: any): T;
}
