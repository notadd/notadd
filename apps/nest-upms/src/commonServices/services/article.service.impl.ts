import { ArticleService } from '../core';
import { ArticleEntity } from '../../typeorm/entities/article.entity';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleMustDataError, ArticleNameError } from '../errors/error';
import { InjectRepository } from '@nestjs/typeorm';

export class ArticleServiceImpl extends ArticleService {

    constructor(
        @InjectRepository(ArticleEntity) public readonly articleRepo: Repository<ArticleEntity>,
    ) { super() }

    /**
     * 获取文章
     * @param where 获取文章的条件
     */
    async get(where: Partial<ArticleEntity>): Promise<ArticleEntity> {
        return await this.articleRepo.findOne(where);
    }

    /**
     * 更新文章
     * @param article 新的文章信息
     * @param where 更新为文章的条件
     */
    async save(article: ArticleEntity, where: Partial<ArticleEntity>): Promise<ArticleEntity> {
        let exist = await this.get(where);
        if (!exist) {
            
        }
        return null;
    }

    delete(article: Partial<ArticleEntity>): Promise<DeleteResult> {
        return null;
    }

    /**
     * 添加文章
     * @param article 添加文章的数据
     */
    async insert(article: ArticleEntity): Promise<ArticleEntity> {
        if (!article.title || !article.article_category_id || article.description) {
            throw new ArticleMustDataError();
        }
        if (await this.get({ title: article.title })) {
            throw new ArticleNameError();
        }
        return await this.articleRepo.save(article);
    }

    search(where: Partial<ArticleEntity>): Promise<void> {
        return null;
    }


}