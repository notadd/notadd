import { INestApplication } from "@nestjs/common";
import { ApplicationModule, LoggerEntity, } from '../../../../src';
import { Test } from '@nestjs/testing';
import { DataError, loggerNoExistError } from '../../../../src/baseInfo/errors/role.error'

import { LoggerService } from '../../../../src/baseInfo/core/logger.service';
describe('OrganizationServiceImpl', () => {
    let app: INestApplication;
    let loggerService: LoggerService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        loggerService = app.get(LoggerService);
        await app.init();
    })
    it(`insert`, async () => {
        const logger = new LoggerEntity();
        logger.description = '你出现 就沉醉了时间, 没有酒 我像个荒诞的可怜人, 可是你 却不曾施舍二两';
        logger.result = '電話撒謊';
        logger.ip = '192.168.1.121';
        logger.openid = '122312222';
        logger.start_time = new Date();
        logger.end_time = new Date();
        logger.params = { "id": "123" };
        logger.permissions = "123"

        loggerService.insert(logger).then(async (result) => {
            expect(result).toBe(void 0);
            // get
            const getOne = await loggerService.get({ result: '電話撒謊' })
            expect(getOne.result).toBe('電話撒謊');
        }).catch(e => {
            expect(e instanceof DataError).toBe(true);
        });
    });
    it(`delete`, async () => {
        const logger = new LoggerEntity();
        logger.description = '你出现 就沉醉了时间, 没有酒 我像个荒诞的可怜人, 可是你 却不曾施舍二两';
        logger.result = '電話撒謊';
        logger.ip = '192.168.1.121';
        logger.openid = '122312222';
        logger.start_time = new Date();
        logger.end_time = new Date();
        logger.params = { "id": "123" };
        logger.permissions = "123"
        loggerService.insert(logger).then(async () => {
            const getOne = await loggerService.get({ ip: '192.168.1.121' })
            await loggerService.delete(getOne);
            const afterDelete = await loggerService.get({ ip: '192.168.1.121' })
        }).catch(e => {
            expect(e instanceof DataError).toBe(true);
        });
    });
    it(`save`, async () => {
        let logger: LoggerEntity = {} as LoggerEntity;
        logger.description = '你出现 就沉醉了时间, 没有酒 我像个荒诞的可怜人, 可是你 却不曾施舍二两';
        logger.result = '你的酒馆对我打了烊,子弹在我心头上了膛,请告诉我今后怎么扛,遍体鳞伤还笑着原谅';
        logger.ip = '192.168.1.128';
        logger.openid = 'asdjklas';
        logger.start_time = new Date();
        logger.end_time = new Date();
        logger.params = { "id": "123" };
        logger.permissions = "123"
        //从数据库获取一个应用
        // 执行更新
        loggerService.save(logger, { ip: '192.168.1.121' }).then(res => { 
            expect(res.ip).toEqual(`192.168.1.121`)
        }).catch(e => {
            expect(e instanceof loggerNoExistError).toBe(true);
        });
    });

    afterAll(async () => {
        await app.close();
    });
});