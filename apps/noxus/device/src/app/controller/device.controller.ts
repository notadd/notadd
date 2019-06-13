import { Controller,  Inject, Get, Param, Body, Post, Delete, Put } from '@nestjs/common';
import{ DeviceService} from '../services/device.service';
import { Device } from '@magnus/db';

@Controller()
export class DeviceController {
    constructor(
      @Inject(DeviceService)  public readonly devService: DeviceService) { }
      
    @Get()
    async findDevice(@Body() device:Device) : Promise<any>{
        return this.devService.DeviceFind(device);
    } 
    @Post('save')
    async deviceSave(@Body() device:Device):Promise<any>{
      return this.devService.DeviceSave(device);
    }
    @Post('delete')
    async deviceDelete(@Body() body:{device_id:number}):Promise<any>{
    return this.devService.DeviceDelete(body);
    }
    @Post('update')
    async deviceUpdate(@Body() device:Device):Promise<any>{
      return this.devService.DeviceUpdate(device);
    }



}