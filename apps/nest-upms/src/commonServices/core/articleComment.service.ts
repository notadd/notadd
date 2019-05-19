import { CommonBaseService } from './common.base.service';
import { ArticleCommentEntity } from '../../typeorm/entities/articleComment.entity';

export abstract class CommentService extends CommonBaseService<ArticleCommentEntity> {

}