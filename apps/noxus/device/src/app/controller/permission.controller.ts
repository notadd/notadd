import { Controller, Inject, Post, Body } from '@nestjs/common';
import { PermissionService } from '../services/permission.service';
import { Permission } from '@magnus/db';

@Controller()
export class PermissionController{
    constructor(
        @Inject(PermissionService) public readonly perService:PermissionService
    ){}
    
    @Post('insert')
    async PermissionInsert(permission:Permission):Promise<any>{
        return await this.perService.PermissionInsert(permission);
    }
    @Post('delete')
    async PermissionDelete(@Body() body:{id:number}):Promise<any>{
        return await this.perService.PermissionDelete(body);
    }

}