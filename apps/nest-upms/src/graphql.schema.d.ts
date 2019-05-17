
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface AccessTokenRequest {
    access_token: string;
}

export interface RefreshTokenRequest {
    refresh_token: string;
}

export interface TokenRequest {
    username: string;
    password: string;
}

export interface LogoutResult {
    code: number;
    message?: string;
}

export interface IMutation {
    refreshToken(refresh_token_request: RefreshTokenRequest): RefreshTokenResult | Promise<RefreshTokenResult>;
    logout(access_token_request: AccessTokenRequest): LogoutResult | Promise<LogoutResult>;
}

export interface IQuery {
    token(token_request: TokenRequest): TokenResult | Promise<TokenResult>;
    verify(access_token_request: AccessTokenRequest): UserInfo | Promise<UserInfo>;
}

export interface RefreshTokenResult {
    code: number;
    access_token: string;
    refresh_token: string;
}

export interface TokenResult {
    code: number;
}

export interface UserInfo {
    username: string;
    avatar: string;
    nickname: string;
}
