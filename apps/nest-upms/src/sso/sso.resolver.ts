import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SsoService } from './core/sso.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccessTokenEntity } from '../typeorm';

@Controller()
@Resolver()
export class SsoResolver {
    constructor(public sso: SsoService) { }
    /**
     * 通过用户名和密码获取token
     */
    @Query()
    @GrpcMethod('SsoService')
    token(@Args() body: TokenBodyRequest): Observable<TokenResult> {
        // 暂放
        console.log(body.password)
        return from(this.sso.token(body.username, body.password))
            .pipe(
                map(res => {
                    return {
                        code: 200,
                        msg: '创建成功',
                        token: res
                    }
                }),
            );
    }

    /**
     * 验证token
     */
    @Query()
    @GrpcMethod('SsoService')
    verify(@Args() body: VerifyBodyRequest): Observable<Result> {
        return from(this.sso.verify(body.access_token))
            .pipe(
                map(res => {
                    return {
                        code: 200,
                        msg: '验证成功'
                    }
                }),
            );
    }

    /**
     * 刷新token
     */
    @Mutation()
    @GrpcMethod('SsoService')
    refreshToken(@Args() body: RefreshTokenRequest): Observable<Result> {
        return from(this.sso.refreshToken(body.access_token))
            .pipe(
                map(res => {
                    return {
                        code: 200,
                        msg: '刷新成功'
                    }
                }),
            );
    }

    /**
     * 注销
     */
    @Mutation()
    @GrpcMethod('SsoService')
     logout(@Args() body: LogoutBodyRequest): Result {
        // let token = await this.sso.getTokenByAccessToken(body.access_token);
        return {
            code: 200,
            msg: '注销成功',
        }
        //     return from(this.sso.logout(body.access_token))
        //         .pipe(
        //             map(res => {
        //                 return {
        //                     code: 200,
        //                     msg: '注销成功',
        //                 }
        //             }),
        //         );
    }
}

export interface TokenBodyRequest {
    username: string;
    password: string;
}

export interface LogoutBodyRequest {
    access_token: string;
}

export interface VerifyBodyRequest {
    access_token: string;
}

export interface RefreshTokenRequest {
    access_token: string;
}

export interface TokenResult {
    code: number;
    msg: string;
}

export interface Result {
    code: number;
    msg: string;
}
