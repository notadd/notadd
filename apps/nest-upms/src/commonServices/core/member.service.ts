import { MemberEntity } from '../../typeorm/entities/member.entity';
import { CommonBaseService } from './common.base.service';

export abstract class MemberService extends CommonBaseService<MemberEntity> { }