import { UserEntity } from '../../typeorm';
import { BaseService } from './base.service'

export abstract class UserService extends BaseService<UserEntity>  {

}