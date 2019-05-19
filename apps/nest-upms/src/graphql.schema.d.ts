
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class LogoutBodyRequest {
    access_token: string;
}

export class RefreshTokenBodyRequest {
    access_token: string;
}

export class TokenBodyRequest {
    username: string;
    password: string;
}

export class VerifyBodyRequest {
    access_token: string;
}

export abstract class IMutation {
    abstract refreshToken(body: RefreshTokenBodyRequest): SsoResult | Promise<SsoResult>;
    abstract logout(body: LogoutBodyRequest): SsoResult | Promise<SsoResult>;
}

export abstract class IQuery {
    abstract token(body: TokenBodyRequest): TokenResult | Promise<TokenResult>;
    abstract verify(body: VerifyBodyRequest): SsoResult | Promise<SsoResult>;
}

export class SsoResult {
    code: number;
    msg: string;
    data?: number[];
}

export class TokenResult {
    code: number;
    msg: string;
}
