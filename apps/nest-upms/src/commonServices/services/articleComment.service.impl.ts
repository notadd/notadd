/*
 * @Author: lijiansheng 
 * @Date: 2019-05-21 15:13:01 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-21 16:31:12
 */
import { ArticleCommentService } from '../core';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleCommentMustDataError, ArticleCommentNullError } from '../errors/error';
import { UserEntity, ArticleEntity, ArticleCommentEntity } from '../../';

export class ArticleCommentServiceImpl extends ArticleCommentService {

    constructor(
        @InjectRepository(ArticleCommentEntity) public readonly commentRepo: Repository<ArticleCommentEntity>,
    ) { super() }

    /**
     * Update comment
     * @param comment New comment information
     * @param where Condition of comment
     */
    async save(comment: ArticleCommentEntity, where: Partial<ArticleCommentEntity>): Promise<ArticleCommentEntity> {
        const exist = await this.commentRepo.findOne(where);
        if (!exist) {
            throw new ArticleCommentNullError();
        }
        if (comment.content) { exist.content = comment.content }
        return await this.commentRepo.save(exist);
    }

    /**
     * Delete comment
     * @param data Comment information
     */
    async delete(comment: Partial<ArticleCommentEntity>): Promise<DeleteResult> {
        return await this.commentRepo.delete(comment);
    }

    /**
     * add comment
     * @param data Comment information
     */
    async insert(comment: ArticleCommentEntity): Promise<ArticleCommentEntity> {
        if (!comment.article_id || !comment.from_user_id || !comment.content) {
            throw new ArticleCommentMustDataError();
        }
        return await this.commentRepo.save(comment);
    }

    /**
     * Find all comments by article
     * @param article Article information
     */
    async getByArticle(article: Partial<ArticleEntity>): Promise<ArticleCommentEntity[]> {
        return await this.commentRepo.find({ where: { article_id: article.article_id } })
    }

    /**
     * Find all comments based on the user
     * @param user User Info
     */
    async getByUser(user: Partial<UserEntity>): Promise<ArticleCommentEntity[]> {
        return await this.commentRepo.find({ where: { from_user_id: user.openid } })
    }

    /**
     * Find a comment based on criteria
     * @param where condition
     */
    async get(where: Partial<ArticleCommentEntity>): Promise<ArticleCommentEntity> {
        return await this.commentRepo.findOne(where);
    }

    clear(): Promise<void> {
        return this.commentRepo.clear();
    }

    search(where: Partial<ArticleCommentEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }

} 