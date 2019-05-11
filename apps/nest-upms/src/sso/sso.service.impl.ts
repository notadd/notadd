import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../typeorm';
import { AuthService, SsoService } from './core/index'
@Injectable()
export class SsoServiceImpl extends SsoService {
    constructor(
        @InjectRepository(UserEntity) public user: Repository<UserEntity>
    ) {
        super();
    }
    /**
     * 注销登录
     */
    logout(): any { }
    /**
     * 刷新acces token过期时间
     */
    refreshToken(): any { }
    /**
     * 验证access token 获取用户信息
     **/
    verify(): any { }
    /**
     * 根据用户名和密码获取access token
     */
    token(): any { }
}