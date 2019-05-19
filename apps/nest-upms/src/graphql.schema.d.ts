
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class LogoutBody {
    access_token: string;
}

export class TokenBody {
    username: string;
    password: string;
}

export abstract class IMutation {
    abstract refreshToken(body: LogoutBody): Result | Promise<Result>;
    abstract logout(body: LogoutBody): Result | Promise<Result>;
}

export abstract class IQuery {
    abstract token(body: TokenBody): Result | Promise<Result>;
    abstract verify(body: LogoutBody): Result | Promise<Result>;
}

export class Result {
    code: number;
}
