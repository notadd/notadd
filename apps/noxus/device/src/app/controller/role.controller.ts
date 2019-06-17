import { Controller, Inject, Body, Post, Get } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { Role } from '@magnus/db';

@Controller()
export class RoleController{
    constructor(
        @Inject(RoleService) public readonly roleService:RoleService
    ){}
    @Post('insert')
    async RoleInsert(@Body() role:Role):Promise<any>{
        return await this.roleService.RoleInsert(role);
    }
    @Post('role_id')
    async RoleFindOne(@Body() body:{role_id:number}):Promise<any>{
        return await this.roleService.RoleFindOne(body);
    }
    @Post('delete')
    async RoleDelete(@Body() body:{role_id:number}):Promise<any>{
        return await this.roleService.RoleDelete(body);
    }
    @Post('save')
    async RoleSave(@Body() role:Role):Promise<any>{
        return await this.roleService.RoleSave(role);
    }
    @Get()
    async RoleFind(@Body() role:Role):Promise<any>{
        return await this.roleService.RoleFind(role);
    }
}

