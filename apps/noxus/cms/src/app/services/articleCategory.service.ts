import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { ArticleCategory } from '@magnus/db';

@Injectable()
export class ArticleCategoryService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 根据分类id查询分类及其所有文章
     * @param where 
     */
    async articleCategoryFind(where: Partial<ArticleCategory>): Promise<ArticleCategory> {
        const result = await this.client.query({
            query: gql`
                query CategoryFind($options: ArticleCategoryFindManyOptions!){
                    articleCategoryFind(options: $options){
                        data{
                        article_category_id,
                        title,
                        name,
                        icon,
                        description,
                        create_time,
                        update_time
                        }
                    }
                }   
            `, variables: {
                "where": {
                    "article_category_id": where.article_category_id
                }
            }
        })
        return result.data;
    }
}