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
     * 更新评论
     * @param comment 新的评论信息
     * @param where 评论的条件
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
     * 删除评论
     * @param data 评论信息
     */
    async delete(comment: Partial<ArticleCommentEntity>): Promise<DeleteResult> {
        return await this.commentRepo.delete(comment);
    }

    /**
     * 添加评论
     * @param data 评论信息
     */
    async insert(comment: ArticleCommentEntity): Promise<ArticleCommentEntity> {
        if (!comment.article_id || !comment.from_user_id || !comment.content) {
            throw new ArticleCommentMustDataError();
        }
        return await this.commentRepo.save(comment);
    }

    /**
     * 根据文章查找所有的评论
     * @param article 文章信息
     */
    async getByArticle(article: Partial<ArticleEntity>): Promise<ArticleCommentEntity[]> {
        return await this.commentRepo.find({ where: { article_id: article.article_id } })
    }

    /**
     * 根据用户查找所有评论
     * @param user 用户信息
     */
    async getByUser(user: Partial<UserEntity>): Promise<ArticleCommentEntity[]> {
        return await this.commentRepo.find({ where: { from_user_id: user.openid } })
    }

    /**
     * 根据条件查询一个评论
     * @param where 条件
     */
    async get(where: Partial<ArticleCommentEntity>): Promise<ArticleCommentEntity> {
        return await this.commentRepo.findOne(where);
    }

    async clear(): Promise<void> {
        return await this.commentRepo.clear();
    }

    search(where: Partial<ArticleCommentEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }

} 