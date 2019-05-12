import { BaseService } from './base.service'
import { RoleEntity } from '../../typeorm';

export abstract class RoleService extends BaseService<RoleEntity> {
}