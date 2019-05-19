import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
export interface Type1 { }
export interface Type2 { }
export type DemoType = Type1 | Type2;

export interface TestResult {
    username: string, password: string
}

export interface TokenBody {
    username: string, password: string
}

export interface TokenResult {
    code: string, message: string
}

export interface VerifyBody {
    access_token: string
}

export interface RefreshToken {
    code: string;
    message: string;
    refresh_token: string;
}

export interface VerifyResult {
    code: string, message: string;
}

export interface LoginResult {
    code: string, message: string;
}

@Controller()
@Resolver()
export class SsoResolver {
    constructor() { }
    /**
     * 通过用户名和密码获取token
     */
    @Query()
    @GrpcMethod()
    async token(@Args() body: TokenBody): Promise<TokenResult> {
        return undefined;
    }

    /**
     * 验证token
     */
    @Query()
    @GrpcMethod()
    async verify(@Args() body: VerifyBody): Promise<VerifyResult> {
        return undefined;
    }

    /**
     * 刷新token
     */
    @Mutation()
    @GrpcMethod()
    async refreshToken(@Args() body: VerifyBody): Promise<RefreshToken> {
        return undefined;
    }
    /**
     * 注销
     */
    @Mutation()
    @GrpcMethod()
    async logout(@Args() body: VerifyBody): Promise<LoginResult> {
        return undefined
    }

    @Subscription()
    async test(): Promise<DemoType> {
        return undefined
    }
}
