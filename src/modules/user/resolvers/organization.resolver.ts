import { Inject, OnModuleInit } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { notadd_module_user } from '../../../grpc/generated';
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

    private organizationService: notadd_module_user.OrganizationService;

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
    async findChildrenOrganizations(req, body: { id: number }) {
        const result = await this.organizationService.findChildrenOrganizations(body).toPromise();
        result.data = JSON.parse(result.data);
        return { code: result.code, message: result.message, data: result.data };
    }

    @Mutation('createOrganization')
    @Permission({ name: 'create_organization', identify: 'organization:createOrganization', action: 'create' })
    async createOrganization(req, body: { name: string, parentId: number }) {
        return this.organizationService.createOrganization(body).toPromise();
    }

    @Mutation('updateOrganization')
    @Permission({ name: 'update_organization', identify: 'organization:updateOrganization', action: 'update' })
    async updateOrganization(req, body: { id: number, name: string, parentId: number }) {
        return this.organizationService.updateOrganization(body).toPromise();
    }

    @Mutation('deleteOrganization')
    @Permission({ name: 'delete_organization', identify: 'organization:deleteOrganization', action: 'delete' })
    async deleteOrganization(req, body: { id: number }) {
        return this.organizationService.deleteOrganization(body).toPromise();
    }

    @Mutation('addUsersToOrganization')
    @Permission({ name: 'add_users_to_organization', identify: 'organization:addUsersToOrganization', action: 'create' })
    async addUsersToOrganization(req, body: { id: number, userIds: number[] }) {
        return this.organizationService.addUsersToOrganization(body).toPromise();
    }

    @Mutation('deleteUserFromOrganization')
    @Permission({ name: 'delete_user_from_organization', identify: 'organization:deleteUserFromOrganization', action: 'delete' })
    async deleteUserFromOrganization(req, body: { id: number, userIds: number[] }) {
        return this.organizationService.deleteUserFromOrganization(body).toPromise();
    }
}