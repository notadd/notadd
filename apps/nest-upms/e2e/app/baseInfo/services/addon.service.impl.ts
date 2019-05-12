import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AddonEntity } from '../../../../src/typeorm'
import { ApplicationModule } from '../../../../src'
import { AddonService } from '../../../../src/baseInfo/core'

import ts from 'typescript'
describe('AddonServiceImpl', () => {
    let app: INestApplication;
    let addonService: AddonService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        addonService = app.get(AddonService);
        await app.init();
    });

    it(`save`, async () => {
        /** 创建更新的一个应用 */
        let addon: AddonEntity = {} as AddonEntity;
        addon.name = 'addon2',
        addon.title = '系统2',
        addon.appsecret = '456'
        // 从数据库获取一个应用
        const where = await addonService.get({ title: '系统1' });
        // 执行更新
        await addonService.save(addon, where);

        // expect(addon).toBe(void 0)
    });

    it(`delete`, async () => {
        /** 用户信息 */
        let addon: AddonEntity = {} as AddonEntity;
        addon.name = 'addon1',
        addon.title = '系统1',
        addon.appsecret = '123'
        const result = await addonService.insert(addon);
        const add = await addonService.get({ name: 'addon1' });
        const res = await addonService.delete(add);
        // expect(res).toBe(void 0);
    });

    it(`insert`, async () => {
        /** 用户信息 */
        let addon: AddonEntity = {} as AddonEntity;
        addon.name = 'addon1',
        addon.title = '系统1',
        addon.appsecret = '123'
        const result = await addonService.insert(addon);
        // expect(result).toBe(void 0);
    });

    it(`get`, async () => {
        const add = await addonService.get({ name: 'addon1' });
        const addon = await addonService.get({ title: '系统1' });
        expect(add).toBe(addon);
    });

    afterAll(async () => {
        await app.close();
    });
});
