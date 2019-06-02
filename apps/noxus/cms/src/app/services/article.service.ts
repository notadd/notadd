import { MagnusClient, gql } from '@notadd/magnus-client'
import { Injectable } from '@nestjs/common';
import { Article } from '@magnus/db';
import { DeleteResult } from 'typeorm';
@Injectable()
export class ArticleService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 根据条件查询文章及其类型
     */
    async articleFindOne(where: Partial<Article>): Promise<Article> {
        const result = await this.client.query({
            query: gql`
            query ArticleFindOne($options: ArticleFindOneOptions!){
                articleFindOne(options: $options){
                    article_id,
                    title,
                    description,
                    thumbs,
                    icon,
                    create_time,
                    update_time,
                    # 分类,parent暂时未添加
                    category{
                        article_category_id,
                        title
                        name,
                        icon,
                        create_time,
                        update_time
                    },
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
                        # 分类,parent暂时未添加
                        category{
                            article_category_id,
                            title
                            name,
                            icon,
                            create_time,
                            update_time
                        },
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

    async ArticleSave(article: Article): Promise<Article> {
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
                    "title": article.title,
                    "description": article.description,
                    "icon": article.icon,
                    "thumbs": article.thumbs
                },
                "options": {
                }
            }
        })
    }

    // todo id string
    async ArticleDelete(where: Partial<Article>): Promise<DeleteResult> {
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