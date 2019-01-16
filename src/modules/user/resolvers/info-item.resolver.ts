import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { nt_module_user } from '../../../grpc/generated';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'info_item_manage', identify: 'infoItem:manage' })
export class InfoItemResolver implements OnModuleInit {
    onModuleInit() {
        this.infoItemService = this.notaddGrpcClientFactory.userModuleClient.getService('InfoItemService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private infoItemService: nt_module_user.InfoItemService;

    @Mutation('createInfoItem')
    @Permission({ name: 'create_info_item', identify: 'infoItem:createInfoItem', action: 'create' })
    async createInfoItem(@Args() args: { order: number, type: string, name: string, description: string, registerDisplay: boolean, informationDisplay: boolean }) {
        return this.infoItemService.createInfoItem({ infoItemInput: args }).toPromise();
    }

    @Mutation('deleteInfoItem')
    @Permission({ name: 'delete_info_item', identify: 'infoItem:deleteInfoItem', action: 'delete' })
    async deleteInfoItem(@Args() args: { infoItemId: number }) {
        return this.infoItemService.deleteInfoItem(args).toPromise();
    }

    @Mutation('updateInfoItem')
    @Permission({ name: 'update_info_item', identify: 'infoItem:updateInfoItem', action: 'update' })
    async updateInfoItem(@Args() args: { id: number, order: number, type: string, name: string, description: string, registerDisplay: boolean, informationDisplay: boolean }) {
        return this.infoItemService.updateInfoItem({ updateInfoItemInput: args }).toPromise();
    }

    @Query('findAllInfoItem')
    @Permission({ name: 'find_all_info_item', identify: 'infoItem:findAllInfoItem', action: 'read' })
    async findAllInfoItem(@Args() args: { pageNumber: number, pageSize: number }) {
        return this.infoItemService.findAllInfoItem(args).toPromise();
    }
}