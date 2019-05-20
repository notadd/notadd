import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SsoService } from './core/sso.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { of, Observable } from 'rxjs';

export interface RefreshTokenResult {
    code: number;
    access_token: string;
    refresh_token: string;
}

export interface Result {
    code: number;
}

@Controller()
@Resolver()
export class SsoResolver {
    constructor(public sso: SsoService) { }
    /**
     * 通过用户名和密码获取token
     * @param {TokenBody} body
     * @returns Observable<Result>
     */
    @Query()
    @GrpcMethod()
    token(@Args() body: TokenBody): Observable<Result> {
        // const token = await this.sso.token(body.username, body.password);
        return of({
            code: 1
        })
    }

    /**
     * 验证token
     */
    @Query()
    @GrpcMethod()
    verify(@Args() body: LogoutBody): Observable<Result> {
        return of({
            code: 1
        })
    }

    /**
     * 刷新token
     */
    @Mutation()
    @GrpcMethod()
    refreshToken(@Args() body: LogoutBody): Observable<Result> {
        return of({
            code: 1
        })
    }

    /**
     * 注销
     */
    @Mutation()
    @GrpcMethod()
    logout(@Args() body: LogoutBody): Observable<Result> {
        return of({
            code: 1
        })
    }
}

export interface LogoutBody {
    access_token: string;
}

export interface TokenBody {
    username: string;
    password: string;
}

export interface TokenResult {
    code: number;
    msg: string;
}

export interface SsoResult {
    code: number;
    msg: string;
}


