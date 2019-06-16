import { Controller, Inject, Get, Body, Post } from '@nestjs/common';
import { DeviceCategoryService } from '../services/deviceCategory.service';
import { DeviceCategory } from '@magnus/db';

@Controller()
export class DeviceCategoryController{
    constructor(
    @Inject(DeviceCategoryService)  public readonly devCatService: DeviceCategoryService){}
    /**
     * 
     * @param devCategory 
     */
    @Get()
    async deviceCategoryFind(@Body() devCategory:DeviceCategory):Promise<any>{
        return  this.devCatService.DeviceCategoryFind(devCategory);
    } 
    @Post('insert')
    async deviceCategoryInsert(@Body()deviceCategory:DeviceCategory):Promise<any>{
       return this.devCatService.DeviceCategoryInsert(deviceCategory);
    }
} 