import { CommonBaseService } from './common.base.service';
import { CategoryEntity } from '../../typeorm/entities/articleCategory.entity';

export abstract class ArticleCategoryService extends CommonBaseService<CategoryEntity> {

}