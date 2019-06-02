import { Injectable, Body } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Device } from '@magnus/db';

@Injectable()
export class DeviceService {
    constructor(
        public readonly client: MagnusClient
    ) { }
    /**
     * 查询所有设备
     */
    async findDevice(where:Partial<Device>): Promise<Device[]> {

        const result = await this.client.query({
            query: gql`query findDevice($options:DeviceFindConditions!){
              deviceFind(options:$options){
                data{
                    device_id
                    deviceNum
                  category{
                  title
                }
                ip{
                    ip
                     port
                }
              }
            }
            }
            `,
            variables: {
                "options": {
                  'deviceNum':'001'
                },
                "ip": {}
            }
        });
        return result.data;

    }
    /**
     * 添加设备
     * @param device 
     */
    async DeviceSave(device:Device):Promise<Device>{
      const result = await this.client.mutation({})
      return;
    }
}
mutation DeviceSave ($entity:Device!,$options:SaveOptions){
  deviceSave(entity:$entity,options:$options){
    device_id
    deviceNum
    category{
      title
    }
  }
}
