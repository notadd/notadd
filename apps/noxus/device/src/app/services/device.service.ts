import { Injectable, Query } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Device } from '@magnus/db';

@Injectable()
export class DerviceService {
    constructor(public readonly client: MagnusClient) { }

    /**
     * 添加设备
     * @param device 
     */
    async DeviceSave(device: Device): Promise<Device> {
        return await this.client.mutate({
            mutation: gql`
        mutation DeviceSave($entity:DeviceInput!,$options:SaveOptions){
         deviceSave(entity:$entity,options:$options){
             device_id,
             deviceNum,
             category{
                device_category_id,
                title
    },
             ip{
                 port,
                 ip
    }
  }
}
        `,
            variables: {
                "entity": {
                    "deviceNum": device.deviceNum,
                    "category": {
                        "title": device.category.title
                    },
                    "ip": {
                        "port": 8000,
                        "ip": device.ip.ip
                    }
                }
            }
        })
    }
    /**
     *查询所有设备
     * @param Device 
     */
    async DeviceFind(Device: Device): Promise<Device[]> {
        const result = await this.client.query({
            query: gql`
                   query DeviceFind($options:DeviceFindManyOptions!){
                        deviceFind(options:$options){
                            data{   
                            device_id,
                            deviceNum,
                            category{
                                device_category_id,
                                title
                            },
                            ip{
                                port,
                                ip
                            }
                                }
  }
}
            `,
            variables: {
                "options": {

                }
            }
        })
        return result.data;

    }
    /**
     * 
     * @param where 根据id删除设备
     */
    async DeviceDelete(where: Partial<Device>): Promise<Device> {
        return await this.client.mutate({
            mutation: gql`
            mutation DeviceDelete($where:DeviceFindConditions!){
              deviceDelete(where:$where){
              affected
  }
}
            `,
            variables: {
                "where": {
                    "device_id": where.device_id
                }
            }
        })
    }
    /**
     * 
     * @param device 更新设备
     */
    async DeviceUpdate(device: Device): Promise<Device> {
        return await this.client.mutate({
            mutation: gql`
            mutation DeviceUpdate($where:DeviceFindConditions!,$options:DeviceInput!){
                deviceUpdate(where:$where,options:$options){
                   code,
                   message
  }
}
            `,
            variables: {
                "where": {
                    "device_id": device.device_id
                },
                "options": {
                    "deviceNum": device.deviceNum,
                    "category": {
                        "device_category_id": device.category.device_category_id
                    },
                    "ip": {
                        "device_ip_id": 1
                    }
                }
            }
        })
    }

}