import { CommonBaseService } from './common.base.service';
import { MessageEntity } from '../../typeorm/entities/message.entity';

export abstract class MessageService extends CommonBaseService<MessageEntity>{
    
}