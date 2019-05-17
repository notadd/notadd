/*
* @Author: lijiansheng 
* @Date: 2019-05-17 09:44:40 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-17 10:24:51
*/

import { ArticleCategoryService } from '../core';
import { ArticleCategoryEntity } from '../../typeorm/entities/articleCategory.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleCategoryMustDataError, ArticleCategoryTitleError, ArticleCategoryNullError } from '../errors/error';

export class ArticleCategoryServiceImpl extends ArticleCategoryService {

    constructor(
        @InjectRepository(ArticleCategoryEntity) private readonly categoryRepo: Repository<ArticleCategoryEntity>,
    ) { super() }

    /**
     * Add article
     *@param category Add article information
     */
    async insert(category: ArticleCategoryEntity): Promise<ArticleCategoryEntity> {
        if (!category.title || !category.title || category.description) {
            throw new ArticleCategoryMustDataError();
        }
        let exist = await this.categoryRepo.findOne(category.title);
        if (exist) {
            throw new ArticleCategoryTitleError();
        }
        return await this.categoryRepo.save(category);
    }

    /**
     * Update article classification information
     *@param category Updated article classification information
     *@param where to update the conditions of the article classification information
     */
    async save(category: ArticleCategoryEntity, where: Partial<ArticleCategoryEntity>): Promise<ArticleCategoryEntity> {
        let exist = await this.categoryRepo.findOne(where);
        if (!exist) {
            throw new ArticleCategoryNullError();
        }
        return await this.categoryRepo.save(category);
    }

    get(where: Partial<ArticleCategoryEntity>): Promise<ArticleCategoryEntity> {
        return this.categoryRepo.findOne(where);
    }


    /**
     * Delete article category
     *@param category Information about deleted files
     */
    delete(category: Partial<ArticleCategoryEntity>): Promise<DeleteResult> {
        return this.categoryRepo.delete(category);
    }


    search(where: Partial<ArticleCategoryEntity>): Promise<void> {
        throw new Error("没有实现");
    }


}