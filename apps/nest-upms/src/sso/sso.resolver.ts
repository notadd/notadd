import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SsoService } from './core/sso.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { of, Observable } from 'rxjs';

/**
 * 刷新结果返回值
 */
export interface RefreshTokenResult {
    // 状态码
    code: number;
    // 授权凭证
    access_token: string;
    // 刷新凭证
    refresh_token: string;
}

/**
 * 返回值
 */
export interface Result {
    // 状态码
    code: number;
}

@Controller()
@Resolver()
export class SsoResolver {
    /**
     * 通过用户名和密码获取token
     * @param {TokenBody} body
     * @returns Observable<Result>
     */
    @Query()
    @GrpcMethod()
    token(): Observable<Result> {
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
    verify(): Observable<Result> {
        return of({
            code: 1
        })
    }

    /**
     * 刷新token
     */
    @Mutation()
    @GrpcMethod()
    refreshToken(): Observable<Result> {
        return of({
            code: 1
        })
    }

    /**
     * 注销
     */
    @Mutation()
    @GrpcMethod()
    logout(): Observable<Result> {
        return of({
            code: 1
        })
    }
}

/**
 * 退出登录参数
 */
export interface LogoutBody {
    /** 授权凭证 */
    access_token: string;
}

/**
 * token参数
 */
export interface TokenBody {
    /**
     * 用户名
     */
    username: string;
    /**
     * 密码
     **/
    password: string;
}

/**
 * token结果
 */
export interface TokenResult {
    /** 状态码 */
    code: number;
    // 消息
    msg: string;
}

// sso 结果
export interface SsoResult {
    /** 状态码 */
    code: number;
    // 消息
    msg: string;
}


