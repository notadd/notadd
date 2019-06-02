import { Controller,  Inject, Get, Param } from '@nestjs/common';
import{ DeviceService} from '../services/device.service';

@Controller()
export class DeviceController {
    constructor(
      @Inject(DeviceService)  public readonly devService: DeviceService) { }
      
    @Get(':deviceNum')
    async findDevice(@Param() deviceNum:string): Promise<any>{
        return this.devService.findDevice({deviceNum});
    } 

}