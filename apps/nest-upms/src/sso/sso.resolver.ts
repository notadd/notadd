import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SsoService } from './core/sso.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
@Resolver()
export class SsoResolver {
    constructor(public sso: SsoService) { }
    /**
     * 通过用户名和密码获取token
     */
    @Query()
    @GrpcMethod('SsoService')
    async token(@Args() body: { username: string, password: string }) {
        console.log(body.password)
        return await this.sso.token(body.username, body.password);
    }

    /**
     * 验证token
     */
    @Query()
    @GrpcMethod('SsoService')
    async verify(@Args() body: { access_token: string }) {
        return await this.sso.verify(body.access_token);
    }

    /**
     * 刷新token
     */
    @Mutation()
    @GrpcMethod('SsoService')
    refreshToken(@Args() body: { access_token: string }) {
        return this.sso.refreshToken(body.access_token);
    }
    /**
     * 注销
     */
    @Mutation()
    @GrpcMethod('SsoService')
    logout(@Args() body: LogoutBody) {
        let token = this.sso.getTokenByAccessToken(body.access_token);
        return this.sso.logout(body.access_token);
    }
}

export interface LogoutBody { 
    access_token: string
}
