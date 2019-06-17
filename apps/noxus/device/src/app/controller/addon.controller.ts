import { Controller, Inject, Body, Post, Get } from '@nestjs/common';
import { AddonService } from '../services/addon.service';
import { Addon } from '@magnus/db';

@Controller()
export class AddonController{
    constructor(
        @Inject(AddonService) public readonly addService:AddonService
    ){}

    @Post('insert')
    async AddonInsert(@Body() addon:Addon){
        return await this.addService.AddonInsert(addon);
    }
    
    @Get()
    async AddonFind(@Body() addon: Addon):Promise<any>{
        return await this.addService.AddonFind(addon);
    }

    @Post('title')
    async AddonFindOne(@Body() body:{title:string}):Promise<any>{
        return await this.addService.AddonFindOne(body);
    }
    @Post('delete')
    async AddonDelete(@Body() body:{appid:number}):Promise<any>{
        return await this.addService.AddonDelete(body);
    }
    @Post('save')
    async AddonSave(@Body() addon:Addon):Promise<any>{
        return await this.addService.AddonSave(addon);
    }
}