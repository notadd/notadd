import { Inject, OnModuleInit } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { notadd_module_user } from '../../../grpc/generated';
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

    private infoItemService: notadd_module_user.InfoItemService;

    @Mutation('createInfoItem')
    @Permission({ name: 'create_info_item', identify: 'infoItem:createInfoItem', action: 'create' })
    async createInfoItem(req, body) {
        return this.infoItemService.createInfoItem(body).toPromise();
    }

    @Mutation('deleteInfoItem')
    @Permission({ name: 'delete_info_item', identify: 'infoItem:deleteInfoItem', action: 'delete' })
    async deleteInfoItem(req, body: { infoItemId: number }) {
        return this.infoItemService.deleteInfoItem(body).toPromise();
    }

    @Mutation('updateInfoItem')
    @Permission({ name: 'update_info_item', identify: 'infoItem:updateInfoItem', action: 'update' })
    async updateInfoItem(req, body) {
        return this.infoItemService.updateInfoItem(body).toPromise();
    }

    @Query('findAllInfoItem')
    @Permission({ name: 'find_all_info_item', identify: 'infoItem:findAllInfoItem', action: 'read' })
    async findAllInfoItem(req, body: { pageNumber: number, pageSize: number }) {
        return this.infoItemService.findAllInfoItem(body).toPromise();
    }
}