
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
    abstract refreshToken(body: RefreshTokenBodyRequest): Result | Promise<Result>;
    abstract logout(body: LogoutBodyRequest): Result | Promise<Result>;
}

export abstract class IQuery {
    abstract token(body: TokenBodyRequest): TokenResult | Promise<TokenResult>;
    abstract verify(body: VerifyBodyRequest): Result | Promise<Result>;
}

export class Result {
    code: number;
    msg: string;
}

export class TokenResult {
    code: number;
    msg: string;
}
