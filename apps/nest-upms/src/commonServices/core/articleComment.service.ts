import { CommonBaseService } from './common.base.service';
import { ArticleCommentEntity } from '../../typeorm/entities/articleComment.entity';
import { ArticleEntity } from '../../typeorm/entities/article.entity';
import { UserEntity } from '../../typeorm';

export abstract class ArticleCommentService extends CommonBaseService<ArticleCommentEntity> {
    abstract getByArticle(article: Partial<ArticleEntity>): Promise<ArticleCommentEntity[]>;

    abstract getByUser(user: Partial<UserEntity>): Promise<ArticleCommentEntity[]>;

    abstract clear(): Promise<void>;
}