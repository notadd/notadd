/*
* @Author: lijiansheng 
* @Date: 2019-05-17 09:44:40 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-21 12:21:18
*/

import { ArticleCategoryService } from '../core';
import { ArticleCategoryEntity } from '../../typeorm/entities/articleCategory.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleCategoryMustDataError, ArticleCategoryTitleError, ArticleCategoryNullError } from '../errors/error';

export class ArticleCategoryServiceImpl extends ArticleCategoryService {

    constructor(
        @InjectRepository(ArticleCategoryEntity) public readonly categoryRepo: Repository<ArticleCategoryEntity>,
    ) { super() }

    /**
     * Add article category
     *@param category Add article category information
     */
    async insert(category: ArticleCategoryEntity): Promise<ArticleCategoryEntity> {
        if (!category.title || !category.name || !category.description) {
            throw new ArticleCategoryMustDataError();
        }
        let exist = await this.categoryRepo.findOne({ where: { title: category.title } });
        if (exist) {
            throw new ArticleCategoryTitleError();
        }
        return await this.categoryRepo.save(category);

    }

    /**
     * Update article category information
     *@param category Updated article category information
     *@param where to update the conditions of the article category information
     */
    async save(category: ArticleCategoryEntity, where: Partial<ArticleCategoryEntity>): Promise<ArticleCategoryEntity> {
        let exist = await this.categoryRepo.findOne(where);
        if (!exist) {
            throw new ArticleCategoryNullError();
        }
        if (category.title) {
            if (await this.categoryRepo.findOne({ where: { title: category.title } })) {
                throw new ArticleCategoryTitleError();
            }
            exist.title = category.title;
        }
        if (category.name) { exist.name = category.name }
        if (category.icon) { exist.icon = category.icon }
        if (category.description) { exist.description = category.description }
        return await this.categoryRepo.save(exist);
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

    clear(): Promise<void> {
        return this.categoryRepo.clear();
    }

}