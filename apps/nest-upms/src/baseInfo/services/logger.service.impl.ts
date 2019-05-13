import { LoggerService } from '../core/logger.service';
import { LoggerEntity } from '../../typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { DataError, loggerNoExistError, ServerError } from '../errors/role.error';
export class LoggerServiceImpl extends LoggerService {
    constructor(@InjectRepository(LoggerEntity) private readonly loggerRepo: Repository<LoggerEntity>) { super() }
    /**
     * 
     * @param logger 添加用户日志
     */
    insert(logger: LoggerEntity): Promise<LoggerEntity> {
        try {
            return this.loggerRepo.save(logger);
        } catch (e) {
            throw new ServerError()
        }
    }
    /**
     * 
     * @param logger 删除日志
     */
    delete(logger: Partial<LoggerEntity>): Promise<DeleteResult> {
        try {
            return this.loggerRepo.delete({ logger_id: logger.logger_id });
        } catch (e) {
            throw new ServerError()
        }
    }
    /**
     * 
     * @param where 查询单个日志
     */
    async get(where: Partial<LoggerEntity>): Promise<LoggerEntity> {
        if (!where) {
            throw new DataError();
        }
        return await this.loggerRepo.findOne(where);
    }
    /**
     * 
     * @param logger 更新日志
     * @param where 
     */
    async save(logger: LoggerEntity, where: Partial<LoggerEntity>) {
        let exist = await this.getLoggerById(where.logger_id);
        if (!exist) {
            throw new loggerNoExistError();
        }
        if (logger.openid) { exist.openid = logger.openid }
        if (logger.params) { exist.params = logger.params }
        if (logger.ip) { exist.ip = logger.ip }
        exist.end_time = exist.end_time || new Date();
        await this.loggerRepo.save(logger);
    }
    /**
     * 
     * @param logger_id 根据id查询日志
     */
    async getLoggerById(logger_id: number): Promise<LoggerEntity> {
        if (!logger_id) {
            throw new DataError();
        }
        return await this.loggerRepo.findOne(logger_id);
    }

    search(where: Partial<LoggerEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }

}