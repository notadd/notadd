
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class LogoutResult {
    code: number;
    message?: string;
}

export abstract class IMutation {
    abstract refreshToken(refresh_token: string): RefreshTokenResult | Promise<RefreshTokenResult>;
    abstract logout(access_token: string): LogoutResult | Promise<LogoutResult>;
}

export abstract class IQuery {
    abstract token(username: string, password: string): TokenResult | Promise<TokenResult>;
    abstract verify(access_token: string): UserInfo | Promise<UserInfo>;
}

export class RefreshTokenResult {
    code: number;
    access_token: string;
    refresh_token: string;
}

export class TokenResult {
    code: number;
}

export class UserInfo {
    username: string;
    avatar: string;
    nickname: string;
}
