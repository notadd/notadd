import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Addon } from '@magnus/db';

@Injectable()
export class AddonService {
    constructor(public readonly client: MagnusClient) { }

    /**
     * 添加应用
     * @param addon 
     */
    async  AddonInsert(addon: Addon): Promise<Addon> {
        return await this.client.mutate({
            mutation: gql`
             mutation AddonInsert($entity:AddonInput!){
             addonInsert(entity:$entity){
             identifiers
             generatedMaps
  }
}
        `,
            variables: {
                "entity": {
                    "title": "demo",
                    "status": 1,
                    "appsecret": "demo",
                    "name": "name",
                    "permissions": [
                        {
                            "name": "333",
                            "father_name": "333",
                            "title": "33",
                            "value": "[333]"

                        }
                    ]

                }
            }
        })
    }
    /**
     * 查询出所有的应用
     * @param addon 
     */
    async AddonFind(addon: Addon): Promise<Addon[]> {
        const result = await this.client.query({
            query: gql`
                query AddonFind($options:AddonFindManyOptions!){
                    addonFind(options:$options){
                      data{
                        pid,
                        appsecret,
                        icon,
                        name,
                        title,
                        description,
                        status,
                        create_time,
                        update_time
    }
  }
}
            `,
            variables: {
                "options": {}
            }
        })
        return result.data;
    }
    /**
     * 根据中文名字查询(title)
     * @param where 查询条件
     */
    async AddonFindOne(where: Partial<Addon>): Promise<Addon> {
        const result = await this.client.query({
            query: gql`
        query AddonFindOne($options:AddonFindOneOptions!){
             addonFindOne(options:$options){
                 pid ,
                 appsecret,
                 icon,
                 name,
                 title
                 description,
                 status,
                 create_time,
                 update_time
  }
}
        `,
            variables: {
                "options": {
                    "where": {
                        "title": ""
                    }
                }
            }
        })
        return result.data;
    }
    /**
     * 删除应用
     * @param where  根据appid删除
     */
    async AddonDelete(where: Partial<Addon>): Promise<Addon> {
        return await this.client.mutate({
            mutation: gql`
                mutation AddonDelete($where: AddonFindConditions!){  
                addonDelete(where:$where){
                affected
  }
}
            `,
            variables: {
                "where": {
                    "appid": 19
                }
            }
        })
    }
    /**
     * 更新应用及权限
     * @param addon 
     */
    async AddonSave(addon: Addon): Promise<Addon> {
        return await this.client.mutate({
            mutation: gql`
        mutation addonSave($entity: Addon!,$options: SaveOptions){
            addonSave(entity: $entity, options: $options){
                appid,
                appsecret,
                name,
                title
  }
}
        `,
            variables: {
                "entity": {
                    "appid": 18,
                    "appsecret": "appsecret",
                    "name": "new name",
                    "title": "new title",
                    "permissions": [
                        {
                            "id": 19,
                            "name": " name",
                            "father_name": "new father_name",
                            "title": "new title",
                            "value": "[剪刀手]"
                        }
                    ]
                },
                "options": {

                }
            }
        })
    }
}