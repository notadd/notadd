import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client'
import { ArticleCategory } from '@magnus/db';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ArticleCategoryService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 添加一个分类
     * @param parent_id 该分类的上级id
     * @param category 分类信息
     */
    async categorySave(category: ArticleCategory): Promise<ArticleCategory> {
        return await this.client.mutate({
            mutation: gql`
                mutation categorySave($entity: ArticleCategory!,$options: SaveOptions){
                    articleCategorySave(entity: $entity,options: $options){
                        article_category_id, title, name, icon, description, create_time, update_time,
                        parent{
                            article_category_id, title, name, icon, description, create_time, update_time,
                        }
                    }
                }
            `,
            variables: {
                "entity": {
                    "title": category.title,
                    "name": category.name,
                    "description": category.description,
                    "icon": category.icon,
                    "parent": {
                        "article_category_id": category.parent.article_category_id,
                        "title": category.parent.title,
                        "name": category.parent.name,
                        "icon": category.parent.icon,
                        "description": category.parent.description
                    }
                }
            }
        });
    }

    /**
     * 根据分类id查询分类信息及子级分类信息
     * @param where 查询条件,article_category_id
     */
    async categoryFindOne(where: Partial<ArticleCategory>): Promise<ArticleCategory> {
        const result = await this.client.query({
            query: gql`
              query CategoryFindOne($options: ArticleCategoryFindOneOptions!){
                articleCategoryFindOne(options: $options){
                    article_category_id, title, name, icon, description, create_time, update_time,
                    children{
                        article_category_id, title, name, icon, description, create_time, update_time,
                    }
                }
            }  
            `,
            variables: {
                "options": {
                    "where": {
                        "article_category_id": where.article_category_id
                    }
                }
            }
        });
        return result.data;
    }

    /**
     * 更新分类
     * @param where 更新分类
     * update不会更新父级和子级分类
     */
    async categoryUpdate(options: ArticleCategory): Promise<Result> {
        return await this.client.mutate({
            mutation: gql`
                mutation categoryUpdate($where: ArticleCategoryFindConditions!, $options: ArticleCategoryInput!){
                    articleCategoryUpdate(where: $where,options: $options){
                        code,
                        message
                    }
                }
            `,
            variables: {
                "where": {
                    "article_category_id": options.article_category_id
                },
                "options": {
                    "title": options.title,
                    "name": options.name,
                    "icon": options.icon,
                    "description": options.description,
                    "parent": {
                        "article_category_id": options.parent.article_category_id,
                        "title": options.parent.title,
                        "name": options.parent.name,
                        "icon": options.parent.icon,
                        "description": options.parent.description
                    }
                }
            }
        })
    }

    /**
     * 删除分类,当前只支持从下级往上逐级删除
     * @param where 删除的条件,article_category_id
     */
    async categoryDelete(where: Partial<ArticleCategory>): Promise<DeleteResult> {
        return await this.client.mutate({
            mutation: gql`
                mutation ArticleCategory($where: ArticleCategoryFindConditions!){
                    articleCategoryDelete(where: $where){
                        affected
                    }
                }
            ` ,
            variables: {
                "where": {
                    "article_category_id": where.article_category_id
                }
            }
        })
    }

}

export interface Result {
    code: number;
    message: string;
    data?: any;
}