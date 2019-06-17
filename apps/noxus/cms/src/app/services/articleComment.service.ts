/*
 * @Author: lijiansheng 
 * @Date: 2019-06-04 09:44:48 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-06-04 09:45:17
 */

import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { ArticleComment } from '@magnus/db';
import { InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class ArticleCommentService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 添加评论
     * @param comment 添加评论的信息
     */
    async commentInsert(comment: ArticleComment): Promise<InsertResult> {
        return await this.client.mutate({
            mutation: gql`
                mutation ArticleCommentInsert($entity: ArticleCommentInput!){
                    articleCommentInsert(entity: $entity){
                        identifiers,
                        generatedMaps
                    }
                }
            `,
            variables: {
                "entity": {
                    "content": comment.content,
                    "from_user_id": comment.from_user_id,
                    "article": {
                        "article_id": comment.article.article_id
                    },
                }
            }
        })
    }

    /**
     * 删除评论,子级的评论会被一并删除
     * @param where 删除的条件asdf asd
     */
    async commentDelete(where: Partial<ArticleComment>): Promise<DeleteResult> {
        return await this.client.mutate({
            mutation: gql`
                mutation CommentDelete($where: ArticleCommentFindConditions!){
                    articleCommentDelete(where: $where){
                            affected
                    }
                }
            `,
            variables: {
                "where": {
                    "article_comment_id": where.article_comment_id
                }
            }
        })
    }

    /**
     * 根据用户id查询所有评论
     */
    async commentFindByUserId(): Promise<ArticleComment> {
        return await this.client.mutate({
            mutation: gql`
            query CommentFind($options: ArticleCommentFindManyOptions!){
                articleCommentFind(options: $options){
                    data{
                        article_comment_id,
                        content,
                        from_user_id,
                        create_time,
                        update_time,
                        article{
                            article_id,
                            title
                        }
                    }
                }
                }
            `
        })
    }
}