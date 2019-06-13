import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Permission } from '@magnus/db';

@Injectable()
export class PermissionService {
    constructor(
        public readonly client: MagnusClient
    ) { }
    /**
     * 添加权限
     * @param permission 
     */
    async PermissionInsert(permission: Permission): Promise<Permission> {
        return await this.client.mutate({
            mutation: gql`
                mutation PermissionInsert($entity:PermissionInput!){
                    permissionInsert(entity:$entity){
                        identifiers,
                        generatedMaps
  }
}
            `,
            variables: {
                "entity": {
                    "name": "红",
                    "father_name": "经理",
                    "title": "今天吃饭了么",
                    "decription": "饿了么",
                    "value": "哈哈",
                    "icon": "苹果",
                    "status": 1,
                    "displayorder": 1

                }
            }
        })
    }
    /**
     * 
     * @param where 根据id删除权限
     */
    async PermissionDelete(where: Partial<Permission>): Promise<Permission> {
        return await this.client.mutate({
            mutation: gql`
             mutation PermissionDelete($where: PermissionFindConditions!){
             permissionDelete(where:$where){
                  affected
  }
}
           `,
           variables:{
            "where": {
                "id": 18
              }
           }
        })
    }
  

}