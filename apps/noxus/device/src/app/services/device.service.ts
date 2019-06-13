import { Injectable, Body } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Device } from '@magnus/db';

@Injectable()
export class DeviceService {
  constructor(
    public readonly client: MagnusClient
  ) { }

  /**
   * 查询所有的设备
   * @param dev 
   */
  async DeviceFind(dev: Device): Promise<Device[]> {
    const result = await this.client.query({
      query: gql`query DeviceFind($options:DeviceFindConditions!){
              deviceFind(options:$options){
                data {
                    device_id
                    deviceNum
                  category{
                  title
                }
                ip {
                    ip
                     port
                }
              }
            }
            }
            `,
      variables: {
        "options": {
          'deviceNum': '001'
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
  async DeviceSave(device: Device): Promise<Device> {
    return await this.client.mutate({
      mutation: gql`
        mutation DeviceSave ($entity:Device!,$options:SaveOptions){
          deviceSave(entity:$entity,options:$options){
            device_id
            deviceNum
            category{
              title
            }
            ip{ 
              port
              ip
            }
          }
        }
      `,
      variables: {
        "entity": {
          "deviceNum": "002"
        }
      }

    });

  }
  /**
   * 
   * @param id 删除设备
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
          "deviceNumber": "002"
        }
      }
    })


  }
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
          "device_id": 3
        },
        "options": {
          "deviceNum": "004",
          "ip": {
            "device_ip_id": 3,
            "port": 80001,
            "ip": "192.168.0.2"
          }

        }
      }
    })
  }
}
