import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { nt_module_user } from '../../../grpc/generated';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'role_manage', identify: 'role:manage' })
export class RoleResolver implements OnModuleInit {
    onModuleInit() {
        this.roleService = this.notaddGrpcClientFactory.userModuleClient.getService('RoleService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private roleService: nt_module_user.RoleService;

    @Mutation('createRole')
    @Permission({ name: 'create_role', identify: 'role:createRole', action: 'create' })
    async createRole(@Args() args: { name: string }) {
        return this.roleService.createRole(args).toPromise();
    }

    @Mutation('deleteRole')
    @Permission({ name: 'delete_role', identify: 'role:deleteRole', action: 'delete' })
    async deleteRole(@Args() args: { id: number }) {
        return this.roleService.deleteRole(args).toPromise();
    }

    @Mutation('updateRole')
    @Permission({ name: 'update_role', identify: 'role:updateRole', action: 'update' })
    async updateRole(@Args() args: { id: number, name: string }) {
        return this.roleService.updateRole(args).toPromise();
    }

    @Mutation('removePermissionOfRole')
    @Permission({ name: 'remove_permission_of_role', identify: 'role:removePermissionOfRole', action: 'delete' })
    async removePermissionOfRole(@Args() args: { roleId: number, permissionId: number }) {
        return this.roleService.removePermissionOfRole(args).toPromise();
    }

    @Mutation('setPermissionsToRole')
    @Permission({ name: 'set_permissions_to_role', identify: 'role:setPermissionsToRole', action: 'create' })
    async setPermissionsToRole(@Args() args: { roleId: number, permissionIds: number[] }) {
        return this.roleService.setPermissionsToRole(args).toPromise();
    }

    @Query('findRoles')
    @Permission({ name: 'find_roles', identify: 'role:findRoles', action: 'read' })
    async findRoles(@Args() args: { pageNumber: number, pageSize: number }) {
        return this.roleService.findRoles(args).toPromise();
    }

    @Query('findOneRoleInfo')
    @Permission({ name: 'find_one_role_info', identify: 'role:findOneRoleInfo', action: 'read' })
    async findOneRoleInfo(@Args() args: { roleId: number }) {
        return this.roleService.findOneRoleInfo(args).toPromise();
    }
}