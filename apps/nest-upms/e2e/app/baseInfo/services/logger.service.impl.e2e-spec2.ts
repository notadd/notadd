import { INestApplication } from "@nestjs/common";
import { ApplicationModule, LoggerEntity, } from '../../../../src';
import { Test } from '@nestjs/testing';
import { ServerError } from '../../../../src/baseInfo/errors/role.error'
import { LoggerService } from '../../../../src/baseInfo/core/logger.service';
describe('OrganizationServiceImpl', () => {
    let app: INestApplication;
    let loggerService: LoggerService;


    function testInsert() {
        const log = new LoggerEntity()
        log.ip = `192.185.0.1`
        log.end_time = new Date()
        return loggerService.insert(log).then(res => {
            expect(res.ip).toBe('192.185.0.1')
            return res;
        }).catch(e => {
            expect(e instanceof ServerError).toBe(true)
        })
    }
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        loggerService = app.get(LoggerService);
        await app.init();
    });
    /**
     * 测试一下测试是否能跑
     */
    it(`test test`, () => {
        expect(1 + 1).toBe(2)
    })
    /**
     * 测试依赖注入 loggerService 是否注入成功
     */
    it(`loggerService should not to be undefined`, () => {
        expect(!!loggerService).toBe(true)
    });
    /**
     * 测试loggerService.insert方法
     */
    it(`loggerService.insert`, () => {
        testInsert()
    });

    it(`loggerService.delete`, async () => {
        const int = await testInsert()
        if (int) {
            loggerService.delete({ logger_id: int.logger_id })
        }
    })

    afterAll(async () => {
        await app.close();
    });
});

