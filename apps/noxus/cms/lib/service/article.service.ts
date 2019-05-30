import { MagnusClient, gql } from '@notadd/magnus-client'
import { Article } from '@noxus/db';
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
    //     })

    //     this.client.insertA
    // }

    async findOneArticle(where: Partial<Article>): Promise<any> {
        const result = this.client.query({
            query: gql`
            articleEntityFindOne(options: $options){
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
                    }
                }
            }
        })
        return result;
    }
}

