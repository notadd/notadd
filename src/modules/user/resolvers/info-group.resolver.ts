import { Inject, OnModuleInit } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { CommonResult } from '../../../common/interfaces';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'info_group_manage', identify: 'infoGroup:manage' })
export class InfoGroupResolver implements OnModuleInit {
    onModuleInit() {
        this.infoGroupServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('InfoGroupService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private infoGroupServiceInterface;

    @Mutation('createInfoGroup')
    @Permission({ name: 'create_info_group', identify: 'infoGroup:createInfoGroup', action: 'create' })
    async createInfoGroup(req, body: { name: string, roleId: number }): Promise<CommonResult> {
        return this.infoGroupServiceInterface.createInfoGroup(body).toPromise();
    }

    @Mutation('deleteInfoGroup')
    @Permission({ name: 'delete_info_group', identify: 'infoGroup:deleteInfoGroup', action: 'delete' })
    async deleteInfoGroup(req, body: { groupId: number }): Promise<CommonResult> {
        return this.infoGroupServiceInterface.deleteInfoGroup(body).toPromise();
    }

    @Mutation('updateInfoGroup')
    @Permission({ name: 'update_info_group', identify: 'infoGroup:updateInfoGroup', action: 'update' })
    async updateInfoGroup(req, body: { groupId: number, name: string, roleId: number }): Promise<CommonResult> {
        return this.infoGroupServiceInterface.updateInfoGroup(body).toPromise();
    }

    @Mutation('addInfoItemToInfoGroup')
    @Permission({ name: 'add_info_item_to_info_group', identify: 'infoGroup:addInfoItemToInfoGroup', action: 'create' })
    async addInfoItemToInfoGroup(req, body: { infoGroupId: number, infoItemIds: number[] }): Promise<CommonResult> {
        return this.infoGroupServiceInterface.addInfoItemToInfoGroup(body).toPromise();
    }

    @Mutation('deleteIntoItemFromInfoGroup')
    @Permission({ name: 'delete_into_item_from_info_group', identify: 'infoGroup:deleteIntoItemFromInfoGroup', action: 'delete' })
    async deleteIntoItemFromInfoGroup(req, body: { infoGroupId: number, infoItemIds: number[] }): Promise<CommonResult> {
        return this.infoGroupServiceInterface.deleteIntoItemFromInfoGroup(body).toPromise();
    }

    @Query('findAllInfoGroup')
    @Permission({ name: 'find_all_info_group', identify: 'infoGroup:findAllInfoGroup', action: 'read' })
    async findAllInfoGroup(): Promise<CommonResult> {
        return this.infoGroupServiceInterface.findAllInfoGroup({}).toPromise();
    }

    @Query('findInfoItemsByGroupId')
    @Permission({ name: 'find_info_items_by_group_id', identify: 'infoGroup:findInfoItemsByGroupId', action: 'read' })
    async findInfoItemsByGroupId(req, body: { groupId: number }): Promise<CommonResult> {
        return this.infoGroupServiceInterface.findInfoItemsByGroupId(body).toPromise();
    }
}
