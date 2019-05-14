import { CommonBaseService } from './common.base.service';
import { PostEntity } from '../../typeorm/entities/post.entity';

export abstract class PostService extends CommonBaseService<PostEntity> { }