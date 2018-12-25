import { Inject, OnModuleInit } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { notadd_module_user } from '../../../grpc/generated';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'info_group_manage', identify: 'infoGroup:manage' })
export class InfoGroupResolver implements OnModuleInit {
    onModuleInit() {
        this.infoGroupService = this.notaddGrpcClientFactory.userModuleClient.getService('InfoGroupService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private infoGroupService: notadd_module_user.InfoGroupService;

    @Mutation('createInfoGroup')
    @Permission({ name: 'create_info_group', identify: 'infoGroup:createInfoGroup', action: 'create' })
    async createInfoGroup(req, body: { name: string, roleId: number }) {
        return this.infoGroupService.createInfoGroup(body).toPromise();
    }

    @Mutation('deleteInfoGroup')
    @Permission({ name: 'delete_info_group', identify: 'infoGroup:deleteInfoGroup', action: 'delete' })
    async deleteInfoGroup(req, body: { groupId: number }) {
        return this.infoGroupService.deleteInfoGroup(body).toPromise();
    }

    @Mutation('updateInfoGroup')
    @Permission({ name: 'update_info_group', identify: 'infoGroup:updateInfoGroup', action: 'update' })
    async updateInfoGroup(req, body: { groupId: number, name: string, roleId: number }) {
        return this.infoGroupService.updateInfoGroup(body).toPromise();
    }

    @Mutation('addInfoItemToInfoGroup')
    @Permission({ name: 'add_info_item_to_info_group', identify: 'infoGroup:addInfoItemToInfoGroup', action: 'create' })
    async addInfoItemToInfoGroup(req, body: { infoGroupId: number, infoItemIds: number[] }) {
        return this.infoGroupService.addInfoItemToInfoGroup(body).toPromise();
    }

    @Mutation('deleteIntoItemFromInfoGroup')
    @Permission({ name: 'delete_into_item_from_info_group', identify: 'infoGroup:deleteIntoItemFromInfoGroup', action: 'delete' })
    async deleteIntoItemFromInfoGroup(req, body: { infoGroupId: number, infoItemIds: number[] }) {
        return this.infoGroupService.deleteIntoItemFromInfoGroup(body).toPromise();
    }

    @Query('findAllInfoGroup')
    @Permission({ name: 'find_all_info_group', identify: 'infoGroup:findAllInfoGroup', action: 'read' })
    async findAllInfoGroup(req, body: { pageNumber: number, pageSize: number }) {
        return this.infoGroupService.findAllInfoGroup(body).toPromise();
    }

    @Query('findInfoItemsByGroupId')
    @Permission({ name: 'find_info_items_by_group_id', identify: 'infoGroup:findInfoItemsByGroupId', action: 'read' })
    async findInfoItemsByGroupId(req, body: { infoGroupId: number }) {
        return this.infoGroupService.findInfoItemsByGroupId(body).toPromise();
    }
}
