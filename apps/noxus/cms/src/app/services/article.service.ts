import { MagnusClient, gql } from '@notadd/magnus-client'
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    async findOneArticle(title: string): Promise<any> {
        const a =  await this.client.query({
            query: gql`
            query ArticleFindOne($options: ArticleFindOneOptions!){
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
            }
            `,
            variables: {
                "options": {
                    "where": {
                        title
                    }
                }
            }
        });
        a.data.articleFindOne.create_time = new Date(a.data.articleFindOne.create_time).toLocaleString();
        console.log(a.data.articleFindOne.create_time)
        return a;
    }

    async ArticleSave(title: ): Promise<any>{

    }
<<<<<<< HEAD

=======
>>>>>>> e4ea993491a5e0d5a5b60d2aec3b503510353417
}