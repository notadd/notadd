import { CommonBaseService } from './common.base.service';
import { CommentEntity } from '../../typeorm/entities/articleComment.entity';

export abstract class CommentService extends CommonBaseService<CommentEntity> {

}