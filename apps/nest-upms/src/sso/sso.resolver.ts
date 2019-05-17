import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SsoService } from './core/sso.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccessTokenEntity, UserEntity } from '../typeorm';
import { TokenRequest, AccessTokenRequest, RefreshTokenRequest } from '../graphql.schema';

@Controller()
@Resolver()
export class SsoResolver {
    constructor(public sso: SsoService) { }
    /**
     * 通过用户名和密码获取token
     */
    @Query()
    @GrpcMethod('SsoService')
    token(@Args('token_request') body: TokenRequest): Observable<AccessTokenEntity> {
        return from(this.sso.token(body.username, body.password))
            .pipe(
                map(res => {
                    return res;
                }),
            );
    }

    /**
     * 验证token
     */
    @Query()
    @GrpcMethod('SsoService')
    verify(@Args('access_token_request') body: AccessTokenRequest): Observable<UserEntity> {
        return from(this.sso.verify(body.access_token))
            .pipe(
                map(res => {
                    return res;
                }),
            )
    }
    /**
     * 刷新token
     */
    @Mutation()
    @GrpcMethod('SsoService')
    refreshToken(@Args('refresh_token_request') body: RefreshTokenRequest): Observable<void> {
        return from(this.sso.refreshToken(body.refresh_token))
            .pipe(
                map(res => {
                    return res;
                })
            )
    }
    /**
     * 注销
     */
    @Mutation()
    @GrpcMethod('SsoService')
    logout(@Args('access_token_request') body: AccessTokenRequest): Observable<void> {
        return from(this.sso.logout(body.access_token))
            .pipe(
                map(res => {
                    return res;
                })
            )
    }
}
