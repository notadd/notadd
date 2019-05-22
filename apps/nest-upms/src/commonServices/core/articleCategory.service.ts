import { CommonBaseService } from './common.base.service';
import { ArticleCategoryEntity } from '../../typeorm/entities/articleCategory.entity';

export abstract class ArticleCategoryService extends CommonBaseService<ArticleCategoryEntity> {
    abstract clear(): any;
}