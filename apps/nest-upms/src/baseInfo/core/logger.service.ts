import { BaseService } from './base.service'
import { LoggerEntity } from '../../typeorm';
export abstract class LoggerService extends BaseService<LoggerEntity> { }
