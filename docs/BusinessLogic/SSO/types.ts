export interface RefreshToken<T = any> {
    // token
    access_token: string;
    // 刷新token
    refresh_token: string;
    // 过期时间
    expires_in: number;
    // 用户信息
    user_info: T;
}


