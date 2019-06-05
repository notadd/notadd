/*
 * @Author: lijiansheng 
 * @Date: 2019-06-04 09:45:06 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-06-04 09:54:28
 */

import { MagnusClient, gql } from '@notadd/magnus-client'
import { Injectable } from '@nestjs/common';
import { Article } from '@magnus/db';
import { DeleteResult, InsertResult } from 'typeorm';

@Injectable()
export class ArticleService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 添加文章
     * @param article 添加文章的数据
     */
    async articleSave(article: Article): Promise<InsertResult> {
        return await this.client.mutate({
            mutation: gql`
                mutation ArticleInsert($entity: ArticleInput!){
                    articleInsert(entity: $entity){
                        identifiers,
                        generatedMaps
                    }
                }
            }
            `,
            variables: {
                "entity": {
                    "title": article.title,
                    "description": article.description,
                    "icon": article.icon,
                    "thumbs": article.thumbs,
                    "category": {
                        "article_category_id": article.category.article_category_id
                    }
                },
            }
        })
    }

    /**
     * 根据条件查询文章及其类型
     */
    async articleFindOne(where: Partial<Article>): Promise<Article> {
        const result = await this.client.query({
            query: gql`
                query ArticleFindOne($options: ArticleFindOneOptions!){
                    articleFindOne(options: $options){
                        article_id, title, description, thumbs, icon, create_time, update_time,
                        category{
                            article_category_id, title, name, icon, create_time, update_time
                        }
                    }
                }
            `,
            variables: {
                "options": {
                    "where": {
                        "article_id": where.article_id
                    }
                }
            }
        });
        return result.data;
    }

    /**
     * 查询多个文章
     * @param where 查询的条件
     */
    async articleFind(where: Partial<Article>): Promise<Article[]> {
        const result = await this.client.query({
            query: gql`
                query ArticleFind($options: ArticleFindConditions!){
                    articleFind(options: $options){
                    data {
                        article_id,
                        title,
                        description,
                        thumbs,
                        icon,
                        create_time,
                        update_time, 
                        category{
                            article_category_id,
                        }
                    }
                }
            }
            `,
            variables: {
                "options": {
                    "title": where.title
                }
            }
        });
        return result.data;
    }


    /**
     * 更新文章
     * @param article 添加文章的数据
     */
    async articleUpdate(article: Article): Promise<Article> {
        return await this.client.mutate({
            mutation: gql`
                mutation ArticleSave($entity: Article!,$options: SaveOptions!){
                    articleSave(entity: $entity,options: $options){
                    article_id,
                    title,
                    create_time,
                    update_time,
                }
            }
            `,
            variables: {
                "entity": {
                    "article_id": article.article_id,
                    "title": article.title,
                    "description": article.description,
                    "icon": article.icon,
                    "thumbs": article.thumbs,
                    "category": {
                        "article_cateogry_id": article.category.article_category_id
                    }
                },
                "options": {
                }
            }
        })
    }

    /**
     * 根据条件删除id
     * @param where 删除的条件,根据article_id删除
     */
    async articleDelete(where: Partial<Article>): Promise<DeleteResult> {
        return await this.client.mutate({
            mutation: gql`
                mutation ArticleDelete($where: ArticleFindConditions!){
                    articleDelete(where: $where){
                        affected
                    }
                }
                `,
            variables: {
                "where": {
                    "article_id": where.article_id
                }
            }
        });
    }


}