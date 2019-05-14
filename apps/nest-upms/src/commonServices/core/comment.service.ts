import { CommonBaseService } from './common.base.service';
import { CommentEntity } from '../../typeorm/entities/comment.entity';

export abstract class CommentService extends CommonBaseService<CommentEntity> {

}