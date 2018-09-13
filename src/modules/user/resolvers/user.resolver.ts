import { HttpException, Inject } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { __ as t } from 'i18n';

import { Permission, Resource } from '../../../common/decorators';
import { CommonResult } from '../../../common/interfaces/common-result.interface';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'user_manage', identify: 'user:manage' })
export class UserResolver {
    onModuleInit() {
        this.userServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('UserService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private userServiceInterface;

    @Query('login')
    async login(req, body: { username: string, password: string }): Promise<CommonResult> {
        const { code, message, data } = await this.userServiceInterface.login(body).toPromise();
        return { code, message, data: data.tokenInfo };
    }

    @Query('adminLogin')
    async adminLogin(req, body: { username: string, password: string }): Promise<CommonResult> {
        const { code, message, data } = await this.userServiceInterface.login(body).toPromise();
        const userInfoData = data.userInfoData;
        if (userInfoData.username !== 'sadmin' && userInfoData.userRoles.map(v => v.id).includes(1)) {
            throw new HttpException(t('You are not authorized to access'), 401);
        }
        return { code, message, data: data.tokenInfo };
    }

    @Mutation('register')
    async register(req, { registerUserInput }): Promise<CommonResult> {
        return this.userServiceInterface.register({ registerUserInput }).toPromise();
    }

    @Mutation('createUser')
    @Permission({ name: 'create_user', identify: 'user:createUser', action: 'create' })
    async createUser(req, body): Promise<CommonResult> {
        return this.userServiceInterface.createUser(body).toPromise();
    }

    @Mutation('addUserRole')
    @Permission({ name: 'add_user_role', identify: 'user:addUserRole', action: 'create' })
    async addUserRole(req, body: { userId: number, roleId: number }): Promise<CommonResult> {
        return this.userServiceInterface.addUserRole(body).toPromise();
    }

    @Mutation('deleteUserRole')
    @Permission({ name: 'delete_user_role', identify: 'user:deleteUserRole', action: 'delete' })
    async deleteUserRole(req, body: { userId: number, roleId: number }): Promise<CommonResult> {
        return this.userServiceInterface.deleteUserRole(body).toPromise();
    }

    @Mutation('recycleUser')
    @Permission({ name: 'recycle_user', identify: 'user:recycleUser', action: 'delete' })
    async recycleUser(req, body: { userId: number }): Promise<CommonResult> {
        return this.userServiceInterface.recycleUser(body).toPromise();
    }

    @Mutation('deleteRecycledUser')
    @Permission({ name: 'delete_recycled_user', identify: 'user:deleteRecycledUser', action: 'delete' })
    async deleteRecycledUser(req, body: { userId: number }): Promise<CommonResult> {
        return this.userServiceInterface.deleteRecycledUser(body).toPromise();
    }

    @Mutation('updateUserInfoById')
    @Permission({ name: 'update_user_info_by_id', identify: 'user:updateUserInfoById', action: 'update' })
    async updateUserInfoById(req, body): Promise<CommonResult> {
        return this.userServiceInterface.updateUserInfoById(body).toPromise();
    }

    @Mutation('updateCurrentUserInfo')
    async updateCurrentUserInfo(req, body, context): Promise<CommonResult> {
        body.userId = context.user.id;
        return this.userServiceInterface.updateCurrentUserInfo(body).toPromise();
    }

    @Query('findUserInfoByIds')
    @Permission({ name: 'find_user_info_by_ids', identify: 'user:findUserInfoByIds', action: 'find' })
    async findUserInfoByIds(req, body: { userIds: number[] }): Promise<CommonResult> {
        return await this.userServiceInterface.findUserInfoByIds(body).toPromise();
    }

    @Query('findCurrentUserInfo')
    async findCurrentUserInfo(req, body, context): Promise<CommonResult> {
        return this.userServiceInterface.findCurrentUserInfo({ userId: context.user.id }).toPromise();
    }

    @Query('findRegisterUserInfoItem')
    async findRegisterUserInputInfo(): Promise<CommonResult> {
        return this.userServiceInterface.findRegisterUserInputInfo({}).toPromise();
    }

    @Query('findUsersInRole')
    @Permission({ name: 'find_users_in_role', identify: 'user:findUsersInRole', action: 'find' })
    async findUsersInRole(req, body: { roleId: number }): Promise<CommonResult> {
        return this.userServiceInterface.findUsersInRole(body).toPromise();
    }

    @Query('findUsersInOrganization')
    @Permission({ name: 'find_users_in_organization', identify: 'user:findUsersInOrganization', action: 'find' })
    async findUsersInOrganization(req, body: { organizationId: number }): Promise<CommonResult> {
        return this.userServiceInterface.findUsersInOrganization(body).toPromise();
    }
}