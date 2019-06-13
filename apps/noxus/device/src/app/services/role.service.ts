import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Role } from '@magnus/db';

@Injectable()
export class RoleService {
    constructor(
        public readonly client: MagnusClient
    ) { }
    /**
     * 添加角色
     * @param role 
     */
    async RoleInsert(role: Role): Promise<Role> {
        return await this.client.mutate({
            mutation: gql`
            mutation RoleInsert($entity:RoleInput!){
             roleInsert(entity:$entity){
              identifiers,
              generatedMaps
  }
}
        `,
            variables: {
                "entity": {
                    "name": "name",
                    "title": "爱丽丝",
                    "description": "new description",
                    "permissions":[
                      {
                        "name": "111",
                        "title": "1111",
                        "father_name": "11111",
                        "value": "1111"
                        
                      }
                    ]
                  }
            }
        })
    }
    /**
     * 根据role_id查询单个权限
     * @param where role_id查询条件
     */0
    async RoleFindOne(where: Partial<Role>): Promise<Role> {
        const result = await this.client.query({
            query: gql`
                query RoleFindOne($options:RoleFindOneOptions!){
                  roleFindOne(options:$options){
                    role_id,
                    name,
                    title,
                    description
  }
}
            `,
            variables: {
                "options": {
                    "where": {
                        "role_id": 2
                    }
                }
            }
        })
        return result.data;
    }
    /**
     * 根据role_id删除权限
     * @param where 
     */
    async RoleDelete(where: Partial<Role>): Promise<Role> {
        return await this.client.mutate({
            mutation: gql`
                mutation RoleDelete($where:RoleFindConditions!){
                    roleDelete(where:$where){
                    affected
                }
            }
            `,
            variables: {
                "where": {
                    "role_id": 2
                }
            }
        })
    }
    /**
     * 更新角色及权限
     * @param role 
     */
    async RoleSave(role: Role): Promise<Role> {
        return await this.client.mutate({
            mutation: gql`
            mutation RoleSave($entity:Role!,$options:SaveOptions){
                roleSave(entity:$entity,options:$options){
                    role_id,
                    name,
                    title,
                    description
  }
}
            `,
            variables: {
                "entity": {
                    "role_id": 1,
                    "name": "name",
                    "title": "title",
                    "description": "description",
                    "permissions": [
                    {
                        "id": 8,
                        "name": "new  name",
                        "father_name": "new father",
                        "title": "title",
                        "value": "[]",
                        "icon": "new icon",
                        "status": 1,
                        "displayorder": 1
                    }
                ]
                },
                "options": {

                }
            }
        })
    }
    /**
     * 查询所有角色
     * @param role 
     */
    async RoleFind(role: Role): Promise<Role> {
        const result = await this.client.query({
            query: gql`
            query RoleFind($options:RoleFindManyOptions!){
                roleFind(options:$options){
                    data{
                         role_id
                         name
                         title description
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

}