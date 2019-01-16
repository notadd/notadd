import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { nt_module_user } from '../../../grpc/generated';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'organization_manage', identify: 'organization:manage' })
export class OrganizationResolver implements OnModuleInit {
    onModuleInit() {
        this.organizationService = this.notaddGrpcClientFactory.userModuleClient.getService('OrganizationService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private organizationService: nt_module_user.OrganizationService;

    @Query('findRootOrganizations')
    @Permission({ name: 'find_root_organizations', identify: 'organization:findRootOrganizations', action: 'read' })
    async findRootOrganizations() {
        return this.organizationService.findRootOrganizations({}).toPromise();
    }

    @Query('findAllOrganizations')
    @Permission({ name: 'find_all_organizations', identify: 'organization:findAllOrganizations', action: 'read' })
    async findAllOrganizations() {
        const result = await this.organizationService.findAllOrganizations({}).toPromise();
        result.data = JSON.parse(result.data);
        return { code: result.code, message: result.message, data: result.data };
    }

    @Query('findChildrenOrganizations')
    @Permission({ name: 'find_children_organizations', identify: 'organization:findChildrenOrganizations', action: 'read' })
    async findChildrenOrganizations(@Args() args: { id: number }) {
        const result = await this.organizationService.findChildrenOrganizations(args).toPromise();
        result.data = JSON.parse(result.data);
        return { code: result.code, message: result.message, data: result.data };
    }

    @Mutation('createOrganization')
    @Permission({ name: 'create_organization', identify: 'organization:createOrganization', action: 'create' })
    async createOrganization(@Args() args: { name: string, parentId: number }) {
        return this.organizationService.createOrganization(args).toPromise();
    }

    @Mutation('updateOrganization')
    @Permission({ name: 'update_organization', identify: 'organization:updateOrganization', action: 'update' })
    async updateOrganization(@Args() args: { id: number, name: string, parentId: number }) {
        return this.organizationService.updateOrganization(args).toPromise();
    }

    @Mutation('deleteOrganization')
    @Permission({ name: 'delete_organization', identify: 'organization:deleteOrganization', action: 'delete' })
    async deleteOrganization(@Args() args: { id: number }) {
        return this.organizationService.deleteOrganization(args).toPromise();
    }

    @Mutation('addUsersToOrganization')
    @Permission({ name: 'add_users_to_organization', identify: 'organization:addUsersToOrganization', action: 'create' })
    async addUsersToOrganization(@Args() args: { id: number, userIds: number[] }) {
        return this.organizationService.addUsersToOrganization(args).toPromise();
    }

    @Mutation('deleteUserFromOrganization')
    @Permission({ name: 'delete_user_from_organization', identify: 'organization:deleteUserFromOrganization', action: 'delete' })
    async deleteUserFromOrganization(@Args() args: { id: number, userIds: number[] }) {
        return this.organizationService.deleteUserFromOrganization(args).toPromise();
    }
}