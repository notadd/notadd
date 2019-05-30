/*
 * @Author: lijiansheng 
 * @Date: 2019-05-30 17:37:52 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-30 17:40:55
 */
import { MagnusClient, gql } from '@notadd/magnus-client'
import { Article } from '@noxus/db';
import { Injectable } from '@nestjs/common';
@Injectable()
export class ArticleService {
    constructor(
        public client: MagnusClient<Article>
    ) { }

    // async insertArticle(article: ArticleEntity): Promise<ArticleEntity> {
    //     this.client.mutate({
    //         mutation: gql`
    //         insertArticle(){


    //         }
    //         `,
    //         variables:{}
    //     })Query bQuery by ID and titlele

    //     this.client.insertA
    // }

    /**
     * Query an article
     * @param where Query by ID and title
     */
    async articleFindOne(where: Partial<Article>): Promise<any> {
        const result = this.client.query({
            query: gql`
            articleFindOne(options: $options){
            article_id,
            title,
            description,
            thumbs
        }
            `,
            variables: {
                "options": {
                    "where": {
                        "article_id": where.article_id,
                        "title": where.title,
                    }
                }
            }
        })
        return result;
    }
}

