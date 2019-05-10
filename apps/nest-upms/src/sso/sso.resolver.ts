import {
    Query,
    Resolver
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service'

@Resolver()
export class SsoResolver {

    constructor(public prisma: PrismaService) { }

    /**
     * 通过用户名和密码获取token
     */
    @Query()
    token() { }

    /**
     * 验证token
     */
    @Query()
    verify() { }


    /**
     * 刷新token
     */
    @Query()
    refreshToken() { }


    /**
     * 注销
     */
    @Query()
    logout() { }
}

