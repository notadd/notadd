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
    async createUser(req, { createUserInput }): Promise<CommonResult> {
        return this.userServiceInterface.createUser({ createUserInput }).toPromise();
    }

    @Mutation('addUserRole')
    @Permission({ name: 'add_user_role', identify: 'user:addUserRole', action: 'create' })
    async addUserRole(req, body: { userId: number, roleId: number }): Promise<CommonResult> {
        return this.userServiceInterface.addUserRole(body).toPromise();
    }

    @Mutation('addPermissionToUser')
    @Permission({ name: 'add_permission_to_user', identify: 'user:addPermissionToUser', action: 'create' })
    async addPermissionToUser(req, body: { userId: number, permissionId: number }) {
        return this.userServiceInterface.addPermissionToUser(body).toPromise();
    }

    @Mutation('deletePermissionOfUser')
    @Permission({ name: 'delete_permission_of_user', identify: 'user:deletePermissionOfUser', action: 'delete' })
    async deletePermissionOfUser(req, body: { userId: number, permissionId: number }) {
        return this.userServiceInterface.deletePermissionOfUser(body).toPromise();
    }

    @Mutation('deleteUserRole')
    @Permission({ name: 'delete_user_role', identify: 'user:deleteUserRole', action: 'delete' })
    async deleteUserRole(req, body: { userId: number, roleId: number }): Promise<CommonResult> {
        return this.userServiceInterface.deleteUserRole(body).toPromise();
    }

    @Mutation('banUser')
    @Permission({ name: 'ban_user', identify: 'user:banUser', action: 'update' })
    async banUser(req, body: { userId: number }): Promise<CommonResult> {
        return this.userServiceInterface.banUser(body).toPromise();
    }

    @Mutation('recycleUser')
    @Permission({ name: 'recycle_user', identify: 'user:recycleUser', action: 'update' })
    async recycleUser(req, body: { userId: number }): Promise<CommonResult> {
        return this.userServiceInterface.recycleUser(body).toPromise();
    }

    @Mutation('deleteRecycledUser')
    @Permission({ name: 'delete_recycled_user', identify: 'user:deleteRecycledUser', action: 'delete' })
    async deleteRecycledUser(req, body: { userId: number }): Promise<CommonResult> {
        return this.userServiceInterface.deleteRecycledUser(body).toPromise();
    }

    @Mutation('revertBannedUser')
    @Permission({ name: 'revert_banned_user', identify: 'user:revertBannedUser', action: 'update' })
    async revertBannedUser(req, body: { userId: number }): Promise<CommonResult> {
        return this.userServiceInterface.revertBannedUser(body).toPromise();
    }

    @Mutation('revertRecycledUser')
    @Permission({ name: 'revert_recycled_user', identify: 'user:revertRecycledUser', action: 'update' })
    async revertRecycledUser(req, body: { userId: number }): Promise<CommonResult> {
        return this.userServiceInterface.revertRecycledUser(body).toPromise();
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
    @Permission({ name: 'find_user_info_by_ids', identify: 'user:findUserInfoByIds', action: 'read' })
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

    @Query('findAllUsers')
    @Permission({ name: 'find_all_users', identify: 'user:findAllUsers', action: 'read' })
    async findAllUsers(req, body: { pageNumber: number, pageSize: number }) {
        return this.userServiceInterface.findAllUsers(body).toPromise();
    }

    @Query('findUsersInRole')
    @Permission({ name: 'find_users_in_role', identify: 'user:findUsersInRole', action: 'read' })
    async findUsersInRole(req, body: { roleId: number, pageNumber: number, pageSize: number }): Promise<CommonResult> {
        return this.userServiceInterface.findUsersInRole(body).toPromise();
    }

    @Query('findUsersInOrganization')
    @Permission({ name: 'find_users_in_organization', identify: 'user:findUsersInOrganization', action: 'read' })
    async findUsersInOrganization(req, body: { organizationId: number, pageNumber: number, pageSize: number }): Promise<CommonResult> {
        return this.userServiceInterface.findUsersInOrganization(body).toPromise();
    }
}