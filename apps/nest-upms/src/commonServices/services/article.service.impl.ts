import { ArticleService } from '../core';
import { ArticleEntity } from '../../typeorm/entities/article.entity';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleMustDataError, ArticleTitleError, ArticleNullError } from '../errors/error';
import { InjectRepository } from '@nestjs/typeorm';

export class ArticleServiceImpl extends ArticleService {
    
    constructor(
        @InjectRepository(ArticleEntity) public readonly articleRepo: Repository<ArticleEntity>,
        ) { super() }
        
        /**
         * 获取文章
         * @param where 获取文章的条件
         */
        get(where: Partial<ArticleEntity>): Promise<ArticleEntity> {
            return this.articleRepo.findOne(where);
        }
        
        /**
         * 更新文章
         * @param article 新的文章信息
         * @param where 更新为文章的条件
         */
        async save(article: ArticleEntity, where: Partial<ArticleEntity>): Promise<ArticleEntity> {
            let exist = await this.get(where);
            if (!exist) {
                throw new ArticleNullError();
            }
            // 如果title出现改动,那么再判断新的标题有没有重复
            if (exist.title !== article.title) {
                if (await this.get({ title: article.title })) {
                    throw new ArticleTitleError();
                }
            }
            if (article.title) { exist.title = article.title }
            if (article.article_category_id) { exist.article_category_id = article.article_category_id }
            if (article.description) { exist.description = article.description }
            if (article.icon) { exist.icon = article.icon }
            if (article.thumbs) { exist.thumbs = article.thumbs }
            return await this.articleRepo.save(exist);
        }
        
        delete(article: Partial<ArticleEntity>): Promise<DeleteResult> {
            return this.articleRepo.delete(article);
        }
        
        /**
         * 添加文章
         * @param article 添加文章的数据
         */
        async insert(article: ArticleEntity): Promise<ArticleEntity> {
            if (!article.title || !article.article_category_id || !article.description) {
                throw new ArticleMustDataError();
            }
            // 判断标题是否会重复
            let exist = await this.articleRepo.findOne({ title: article.title });
            if (exist) {
                throw new ArticleTitleError();
            }
            return await this.articleRepo.save(article);
        }
        
        search(where: Partial<ArticleEntity>): Promise<void> {
            return null;
        }
        
        clear(): Promise<any> {
           return this.articleRepo.clear();
        }
        
    }