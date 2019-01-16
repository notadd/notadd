import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { nt_module_user } from '../../../grpc/generated';
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

    private infoGroupService: nt_module_user.InfoGroupService;

    @Mutation('createInfoGroup')
    @Permission({ name: 'create_info_group', identify: 'infoGroup:createInfoGroup', action: 'create' })
    async createInfoGroup(@Args() args: { name: string, roleId: number }) {
        return this.infoGroupService.createInfoGroup(args).toPromise();
    }

    @Mutation('deleteInfoGroup')
    @Permission({ name: 'delete_info_group', identify: 'infoGroup:deleteInfoGroup', action: 'delete' })
    async deleteInfoGroup(@Args() args: { groupId: number }) {
        return this.infoGroupService.deleteInfoGroup(args).toPromise();
    }

    @Mutation('updateInfoGroup')
    @Permission({ name: 'update_info_group', identify: 'infoGroup:updateInfoGroup', action: 'update' })
    async updateInfoGroup(@Args() args: { groupId: number, name: string, roleId: number }) {
        return this.infoGroupService.updateInfoGroup(args).toPromise();
    }

    @Mutation('addInfoItemToInfoGroup')
    @Permission({ name: 'add_info_item_to_info_group', identify: 'infoGroup:addInfoItemToInfoGroup', action: 'create' })
    async addInfoItemToInfoGroup(@Args() args: { infoGroupId: number, infoItemIds: number[] }) {
        return this.infoGroupService.addInfoItemToInfoGroup(args).toPromise();
    }

    @Mutation('deleteIntoItemFromInfoGroup')
    @Permission({ name: 'delete_into_item_from_info_group', identify: 'infoGroup:deleteIntoItemFromInfoGroup', action: 'delete' })
    async deleteIntoItemFromInfoGroup(@Args() args: { infoGroupId: number, infoItemIds: number[] }) {
        return this.infoGroupService.deleteIntoItemFromInfoGroup(args).toPromise();
    }

    @Query('findAllInfoGroup')
    @Permission({ name: 'find_all_info_group', identify: 'infoGroup:findAllInfoGroup', action: 'read' })
    async findAllInfoGroup(@Args() args: { pageNumber: number, pageSize: number }) {
        return this.infoGroupService.findAllInfoGroup(args).toPromise();
    }

    @Query('findInfoItemsByGroupId')
    @Permission({ name: 'find_info_items_by_group_id', identify: 'infoGroup:findInfoItemsByGroupId', action: 'read' })
    async findInfoItemsByGroupId(@Args() args: { infoGroupId: number }) {
        return this.infoGroupService.findInfoItemsByGroupId(args).toPromise();
    }
}
