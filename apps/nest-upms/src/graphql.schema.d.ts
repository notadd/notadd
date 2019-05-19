
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateCatInput {
    name?: string;
    age?: number;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export class LogoutResult {
    code: number;
    message?: string;
}

export abstract class IMutation {
    abstract refreshToken(refresh_token: string): RefreshTokenResult | Promise<RefreshTokenResult>;
    abstract logout(access_token: string): LogoutResult | Promise<LogoutResult>;
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;
}

export abstract class IQuery {
    abstract token(username: string, password: string): TokenResult | Promise<TokenResult>;
    abstract verify(access_token: string): UserInfo | Promise<UserInfo>;
    abstract getCats(): Cat[] | Promise<Cat[]>;
    abstract cat(id: string): Cat | Promise<Cat>;
}

export class RefreshTokenResult {
    code: number;
    access_token: string;
    refresh_token: string;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}

export class TokenResult {
    code: number;
}

export class UserInfo {
    username: string;
    avatar: string;
    nickname: string;
}
