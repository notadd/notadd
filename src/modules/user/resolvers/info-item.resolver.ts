import { Inject } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { CommonResult } from '../../../common/interfaces';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'info_item_manage', identify: 'infoItem:manage' })
export class InfoItemResolver {
    onModuleInit() {
        this.infoItemServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('InfoItemService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private infoItemServiceInterface;

    @Mutation('createInfoItem')
    @Permission({ name: 'create_info_item', identify: 'infoItem:createInfoItem', action: 'create' })
    async createInfoItem(req, body): Promise<CommonResult> {
        return this.infoItemServiceInterface.createInfoItem(body).toPromise();
    }

    @Mutation('deleteInfoItem')
    @Permission({ name: 'delete_info_item', identify: 'infoItem:deleteInfoItem', action: 'delete' })
    async deleteInfoItem(req, body: { infoItemId: number }): Promise<CommonResult> {
        return this.infoItemServiceInterface.deleteInfoItem(body).toPromise();
    }

    @Mutation('updateInfoItem')
    @Permission({ name: 'update_info_item', identify: 'infoItem:updateInfoItem', action: 'update' })
    async updateInfoItem(req, body): Promise<CommonResult> {
        return this.infoItemServiceInterface.updateInfoItem(body).toPromise();
    }

    @Query('findAllInfoItem')
    @Permission({ name: 'find_all_info_item', identify: 'infoItem:findAllInfoItem', action: 'read' })
    async findAllInfoItem(req, body: { pageNumber: number, pageSize: number }): Promise<CommonResult> {
        return this.infoItemServiceInterface.findAllInfoItem(body).toPromise();
    }
}