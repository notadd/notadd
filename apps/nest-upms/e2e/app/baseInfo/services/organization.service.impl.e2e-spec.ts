import { INestApplication } from "@nestjs/common";

import { Test } from '@nestjs/testing';
import { OrganizationService } from "../../../../src/baseInfo/core";
import { ApplicationModule, OrganizationEntity } from '../../../../src';
import { DataError, OrganizationNoExistError } from '../../../../src/baseInfo/errors/role.error'
describe('OrganizationServiceImpl', () => {
    let app: INestApplication;
    let organService: OrganizationService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        organService = app.get(OrganizationService);
        await app.init();
    })
    it(`insert`, async () => {
        const organ = new OrganizationEntity();
        organ.name = 'organ2';
        organ.title = '经理';
        organ.description = '哦啦啦';
        organ.displayorder = 1;
        organ.create_time = new Date();
        organ.update_time = new Date();

        organService.insert(organ).then(async (result) => {
            expect(result).toBe(void 0);
            const getOne = await organService.get({ name: 'organ2' })
            expect(getOne.name).toBe('organ2');
        }).catch(e => {
            expect(e instanceof DataError).toBe(true);
        });
    });

    it(`delete`, async () => {
        const organ = new OrganizationEntity();
        organ.name = 'organ2';
        organ.title = '经理';
        organ.description = '哦啦啦';
        organ.displayorder = 1;
        organ.create_time = new Date();
        organ.update_time = new Date();

        organService.insert(organ).then(async () => {
            const getOne = await organService.get({ name: 'organ3' })
            await organService.delete(getOne);
            const afterDelete = await organService.get({ name: 'organ3' })
        }).catch(e => {
            expect(e instanceof OrganizationNoExistError).toBe(true);
        });
    });

    it(`save`, async () => {
        let organ: OrganizationEntity = new OrganizationEntity();
        organ.name = '王者荣耀1';
        organ.title = '刺激战场';
        organ.description = '你的酒馆对我打了烊,子弹在我心头上了膛,请告诉我今后怎么扛,遍体鳞伤还笑着原谅';
        organ.create_time = new Date();
        organ.update_time = new Date();
        //从数据库获取一个应用
        const where = await organService.get({ name: 'organ2' });
        if (where) { }
        // 执行更新
        const res = await organService.save(organ, where);
        expect(res).toBe(void 0);
    });

    it(`get`, async () => {
        const add = await organService.get({ name: '王者荣耀' });
        expect(add).toBe(void 0);
    });

    afterAll(async () => {
        await app.close();
    });
});
