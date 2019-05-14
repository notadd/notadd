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
        organ.title = 'jingli';
        organ.description = 'olala';
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
        organ.title = 'jili';
        organ.description = 'olala';
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
        organ.name = 'ryzc1';
        organ.title = 'cjzc';
        organ.description = 'dddd';
        organ.create_time = new Date();
        organ.update_time = new Date();
        //从数据库获取一个应用
        organService.save(organ, { name: 'ryzc1' }).then(res => {
            expect(res.description).toBe('dddd');
        }).catch(e => {
            expect(e instanceof OrganizationNoExistError).toBeTruthy()
        });
    });

    it(`get`, async () => {
        organService.get({ name: 'wzry' }).then(res => {
            expect(res.name).toEqual('wzry');
        }).catch(e => { });
    });

    afterAll(async () => {
        await app.close();
    });
});
