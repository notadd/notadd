import { Controller, Inject, Body, Post } from '@nestjs/common';
import { DerviceService } from '../services/device.service';
import { Device } from '@magnus/db';

@Controller()
export class DeviceController {
    constructor(@Inject(DerviceService) public readonly devService: DerviceService) { }
    @Post('save')

    @Post('save')
    async DeviceSave(@Body() device: Device): Promise<any> {
        return await this.devService.DeviceSave(device);
    }
    @Post()
    async DeviceFind(device:Device):Promise<any>{
        return await this.devService.DeviceFind(device);
    }
    @Post('delete')
    async DeviceDelete(@Body() body:{device_id}){
        return await this.devService.DeviceDelete(body);
    }
}