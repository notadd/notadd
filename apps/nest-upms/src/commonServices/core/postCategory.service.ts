import { PostCategoryEntity } from '../../typeorm/entities/postCategory.entity';
import { CommonBaseService } from './common.base.service';

export abstract class PostCategoryService extends CommonBaseService<PostCategoryEntity> { }