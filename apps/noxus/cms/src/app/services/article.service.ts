import { MagnusClient, gql } from '@notadd/magnus-client'
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    async findOneArticle(article_id: number): Promise<any> {
        this.client.query({
            query: gql`
            articleFindOne(options: $options){
                article_id,
                title,
                icon,
                description,
                create_time,
                update_time,
                category{
                article_category_id,
                name,
                create_time,
                update_time
                     }
                  }
            `,
            variables: {
                "options": {
                    "where": {
                        "article_id": article_id
                    }
                }
            }
        })
    }

    
}