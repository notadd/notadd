import { CommonBaseService } from './common.base.service';
import { ArticleEntity } from '../../typeorm/entities/article/article.entity';

export abstract class ArticleService extends CommonBaseService<ArticleEntity> {
    abstract clear(): Promise<any>;
}