import { Inject } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { CommonResult } from '../../../common/interfaces';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'organization_manage', identify: 'organization:manage' })
export class OrganizationResolver {
    onModuleInit() {
        this.organizationServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('OrganizationService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private organizationServiceInterface;

    @Query('findRootOrganizations')
    @Permission({ name: 'find_root_organizations', identify: 'organization:findRootOrganizations', action: 'find' })
    async findRootOrganizations(): Promise<CommonResult> {
        return this.organizationServiceInterface.findRootOrganizations({}).toPromise();
    }

    @Query('findAllOrganizations')
    @Permission({ name: 'find_all_organizations', identify: 'organization:findAllOrganizations', action: 'find' })
    async findAllOrganizations(): Promise<CommonResult> {
        const result = await this.organizationServiceInterface.findAllOrganizations({}).toPromise();
        result.data = JSON.parse(result.data);
        return { code: result.code, message: result.message, data: result.data };
    }

    @Query('findChildrenOrganizations')
    @Permission({ name: 'find_children_organizations', identify: 'organization:findChildrenOrganizations', action: 'find' })
    async findChildrenOrganizations(req, body: { id: number }): Promise<CommonResult> {
        const result = await this.organizationServiceInterface.findChildrenOrganizations(body).toPromise();
        result.data = JSON.parse(result.data);
        return { code: result.code, message: result.message, data: result.data };
    }

    @Mutation('createOrganization')
    @Permission({ name: 'create_organization', identify: 'organization:createOrganization', action: 'create' })
    async createOrganization(req, body: { name: string, parentId: number }): Promise<CommonResult> {
        return this.organizationServiceInterface.createOrganization(body).toPromise();
    }

    @Mutation('updateOrganization')
    @Permission({ name: 'update_organization', identify: 'organization:updateOrganization', action: 'update' })
    async updateOrganization(req, body: { id: number, name: string, parentId: number }): Promise<CommonResult> {
        return this.organizationServiceInterface.updateOrganization(body).toPromise();
    }

    @Mutation('deleteOrganization')
    @Permission({ name: 'delete_organization', identify: 'organization:deleteOrganization', action: 'delete' })
    async deleteOrganization(req, body: { id: number }): Promise<CommonResult> {
        return this.organizationServiceInterface.deleteOrganization(body).toPromise();
    }

    @Mutation('addUsersToOrganization')
    @Permission({ name: 'add_users_to_organization', identify: 'organization:addUsersToOrganization', action: 'create' })
    async addUsersToOrganization(req, body: { id: number, userIds: number[] }): Promise<CommonResult> {
        return this.organizationServiceInterface.addUsersToOrganization(body).toPromise();
    }

    @Mutation('deleteUserFromOrganization')
    @Permission({ name: 'delete_user_from_organization', identify: 'organization:deleteUserFromOrganization', action: 'delete' })
    async deleteUserFromOrganization(req, body: { id: number, userIds: number[] }): Promise<CommonResult> {
        return this.organizationServiceInterface.deleteUserFromOrganization(body).toPromise();
    }
}