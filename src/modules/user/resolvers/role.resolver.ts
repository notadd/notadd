import { Inject } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { CommonResult } from '../../../common/interfaces/common-result.interface';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'role_manage', identify: 'role:manage' })
export class RoleResolver {
    onModuleInit() {
        this.roleServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('RoleService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private roleServiceInterface;

    @Mutation('createRole')
    @Permission({ name: 'create_role', identify: 'role:createRole', action: 'create' })
    async createRole(req, body: { name: string }): Promise<CommonResult> {
        return this.roleServiceInterface.createRole(body).toPromise();
    }

    @Mutation('deleteRole')
    @Permission({ name: 'delete_role', identify: 'role:deleteRole', action: 'delete' })
    async deleteRole(req, body: { id: number }): Promise<CommonResult> {
        return this.roleServiceInterface.deleteRole(body).toPromise();
    }

    @Mutation('updateRole')
    @Permission({ name: 'update_role', identify: 'role:updateRole', action: 'update' })
    async updateRole(req, body: { id: number, name: string }): Promise<CommonResult> {
        return this.roleServiceInterface.updateRole(body).toPromise();
    }

    @Mutation('setPermissionsToRole')
    @Permission({ name: 'set_permissions_to_role', identify: 'role:setPermissionsToRole', action: 'create' })
    async setPermissionsToRole(req, body: { roleId: number, permissionIds: number[] }): Promise<CommonResult> {
        return this.roleServiceInterface.setPermissionsToRole(body).toPromise();
    }

    @Query('findRoles')
    @Permission({ name: 'find_roles', identify: 'role:findRoles', action: 'find' })
    async findRoles(): Promise<CommonResult> {
        return this.roleServiceInterface.findRoles({}).toPromise();
    }

    @Query('findOneRoleInfo')
    @Permission({ name: 'find_one_role_info', identify: 'role:findOneRoleInfo', action: 'find' })
    async findOneRoleInfo(req, body: { roleId: number }): Promise<CommonResult> {
        return this.roleServiceInterface.findOneRoleInfo(body).toPromise();
    }
}