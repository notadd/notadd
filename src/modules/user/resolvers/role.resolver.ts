import { Inject, OnModuleInit } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { notadd_module_user } from '../../../grpc/generated';
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

    private roleService: notadd_module_user.RoleService;

    @Mutation('createRole')
    @Permission({ name: 'create_role', identify: 'role:createRole', action: 'create' })
    async createRole(req, body: { name: string }) {
        return this.roleService.createRole(body).toPromise();
    }

    @Mutation('deleteRole')
    @Permission({ name: 'delete_role', identify: 'role:deleteRole', action: 'delete' })
    async deleteRole(req, body: { id: number }) {
        return this.roleService.deleteRole(body).toPromise();
    }

    @Mutation('updateRole')
    @Permission({ name: 'update_role', identify: 'role:updateRole', action: 'update' })
    async updateRole(req, body: { id: number, name: string }) {
        return this.roleService.updateRole(body).toPromise();
    }

    @Mutation('removePermissionOfRole')
    @Permission({ name: 'remove_permission_of_role', identify: 'role:removePermissionOfRole', action: 'delete' })
    async removePermissionOfRole(req, body: { roleId: number, permissionId: number }) {
        return this.roleService.removePermissionOfRole(body).toPromise();
    }

    @Mutation('setPermissionsToRole')
    @Permission({ name: 'set_permissions_to_role', identify: 'role:setPermissionsToRole', action: 'create' })
    async setPermissionsToRole(req, body: { roleId: number, permissionIds: number[] }) {
        return this.roleService.setPermissionsToRole(body).toPromise();
    }

    @Query('findRoles')
    @Permission({ name: 'find_roles', identify: 'role:findRoles', action: 'read' })
    async findRoles(req, body: { pageNumber: number, pageSize: number }) {
        return this.roleService.findRoles(body).toPromise();
    }

    @Query('findOneRoleInfo')
    @Permission({ name: 'find_one_role_info', identify: 'role:findOneRoleInfo', action: 'read' })
    async findOneRoleInfo(req, body: { roleId: number }) {
        return this.roleService.findOneRoleInfo(body).toPromise();
    }
}