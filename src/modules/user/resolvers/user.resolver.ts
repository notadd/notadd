import { HttpException, Inject, OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { __ as t } from 'i18n';

import { Permission, Resource } from '../../../common/decorators';
import { nt_module_user } from '../../../grpc/generated';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'user_manage', identify: 'user:manage' })
export class UserResolver implements OnModuleInit {
    onModuleInit() {
        this.userService = this.notaddGrpcClientFactory.userModuleClient.getService('UserService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private userService: nt_module_user.UserService;

    @Query('login')
    async login(@Args() args: { username: string, password: string }) {
        const { code, message, data } = await this.userService.login(args).toPromise();
        return { code, message, data: data.tokenInfo };
    }

    @Query('adminLogin')
    async adminLogin(@Args() args: { username: string, password: string }) {
        const { code, message, data } = await this.userService.login(args).toPromise();
        const userInfoData = data.userInfoData;
        if (userInfoData.username !== 'sadmin' && userInfoData.userRoles.map(v => v.id).includes(1)) {
            throw new HttpException(t('You are not authorized to access'), 401);
        }
        return { code, message, data: data.tokenInfo };
    }

    @Mutation('register')
    async register(@Args() args: { registerUserInput: nt_module_user.RegisterRequest.RegisterUserInput }) {
        return this.userService.register(args).toPromise();
    }

    @Mutation('createUser')
    @Permission({ name: 'create_user', identify: 'user:createUser', action: 'create' })
    async createUser(@Args() args: { createUserInput: nt_module_user.CreateUserRequest.CreateUserInput }) {
        return this.userService.createUser(args).toPromise();
    }

    @Mutation('addUserRole')
    @Permission({ name: 'add_user_role', identify: 'user:addUserRole', action: 'create' })
    async addUserRole(@Args() args: { userId: number, roleId: number }) {
        return this.userService.addUserRole(args).toPromise();
    }

    @Mutation('addPermissionToUser')
    @Permission({ name: 'add_permission_to_user', identify: 'user:addPermissionToUser', action: 'create' })
    async addPermissionToUser(@Args() args: { userId: number, permissionId: number }) {
        return this.userService.addPermissionToUser(args).toPromise();
    }

    @Mutation('deletePermissionOfUser')
    @Permission({ name: 'delete_permission_of_user', identify: 'user:deletePermissionOfUser', action: 'delete' })
    async deletePermissionOfUser(@Args() args: { userId: number, permissionId: number }) {
        return this.userService.deletePermissionOfUser(args).toPromise();
    }

    @Mutation('deleteUserRole')
    @Permission({ name: 'delete_user_role', identify: 'user:deleteUserRole', action: 'delete' })
    async deleteUserRole(@Args() args: { userId: number, roleId: number }) {
        return this.userService.deleteUserRole(args).toPromise();
    }

    @Mutation('banUser')
    @Permission({ name: 'ban_user', identify: 'user:banUser', action: 'update' })
    async banUser(@Args() args: { userId: number }) {
        return this.userService.banUser(args).toPromise();
    }

    @Mutation('recycleUser')
    @Permission({ name: 'recycle_user', identify: 'user:recycleUser', action: 'update' })
    async recycleUser(@Args() args: { userId: number }) {
        return this.userService.recycleUser(args).toPromise();
    }

    @Mutation('deleteRecycledUser')
    @Permission({ name: 'delete_recycled_user', identify: 'user:deleteRecycledUser', action: 'delete' })
    async deleteRecycledUser(@Args() args: { userId: number }) {
        return this.userService.deleteRecycledUser(args).toPromise();
    }

    @Mutation('revertBannedUser')
    @Permission({ name: 'revert_banned_user', identify: 'user:revertBannedUser', action: 'update' })
    async revertBannedUser(@Args() args: { userId: number }) {
        return this.userService.revertBannedUser(args).toPromise();
    }

    @Mutation('revertRecycledUser')
    @Permission({ name: 'revert_recycled_user', identify: 'user:revertRecycledUser', action: 'update' })
    async revertRecycledUser(@Args() args: { userId: number }) {
        return this.userService.revertRecycledUser(args).toPromise();
    }

    @Mutation('updateUserInfoById')
    @Permission({ name: 'update_user_info_by_id', identify: 'user:updateUserInfoById', action: 'update' })
    async updateUserInfoById(@Args() args: { userId: number, updateUserInput: nt_module_user.UpdateUserInput }) {
        return this.userService.updateUserInfoById(args).toPromise();
    }

    @Mutation('updateCurrentUserInfo')
    async updateCurrentUserInfo(@Args() args: { updateCurrentUserInput: nt_module_user.UpdateCurrentUserInput }, @Context() ctx: any) {
        return this.userService.updateCurrentUserInfo({ userId: ctx.user.id, updateCurrentUserInput: args.updateCurrentUserInput }).toPromise();
    }

    @Query('findUserInfoByIds')
    @Permission({ name: 'find_user_info_by_ids', identify: 'user:findUserInfoByIds', action: 'read' })
    async findUserInfoByIds(@Args() args: { userIds: number[] }) {
        return await this.userService.findUserInfoByIds(args).toPromise();
    }

    @Query('findCurrentUserInfo')
    async findCurrentUserInfo(@Context() ctx: any) {
        return this.userService.findCurrentUserInfo({ userId: ctx.user.id }).toPromise();
    }

    @Query('findRegisterUserInfoItem')
    async findRegisterUserInputInfo() {
        return this.userService.findRegisterUserInputInfo({}).toPromise();
    }

    @Query('findAllUsers')
    @Permission({ name: 'find_all_users', identify: 'user:findAllUsers', action: 'read' })
    async findAllUsers(@Args() args: { pageNumber: number, pageSize: number }) {
        return this.userService.findAllUsers(args).toPromise();
    }

    @Query('findUsersInRole')
    @Permission({ name: 'find_users_in_role', identify: 'user:findUsersInRole', action: 'read' })
    async findUsersInRole(@Args() args: { roleId: number, pageNumber: number, pageSize: number }) {
        return this.userService.findUsersInRole(args).toPromise();
    }

    @Query('findUsersInOrganization')
    @Permission({ name: 'find_users_in_organization', identify: 'user:findUsersInOrganization', action: 'read' })
    async findUsersInOrganization(@Args() args: { organizationId: number, pageNumber: number, pageSize: number }) {
        return this.userService.findUsersInOrganization(args).toPromise();
    }
}