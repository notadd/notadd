import { AuthService } from './core/auth.service';
import { UserEntity, AccessTokenEntity, RefreshTokenEntity, EXPRES_TIME } from '../typeorm'
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceImpl extends AuthService {
    constructor(public jwt: JwtService) {
        super();
    }
    // appid, ip, platform,grant_type,scope
    async createToken(user: UserEntity): Promise<AccessTokenEntity> {
        const accessToken = new AccessTokenEntity();
        accessToken.access_token = this.jwt.sign(user, {
            expiresIn: EXPRES_TIME
        })
        accessToken.openid = user.openid;
        const refreshToken = new RefreshTokenEntity();
        accessToken.refreshToken = refreshToken;
        return accessToken;
    }
}
