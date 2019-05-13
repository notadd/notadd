import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AddonEntity } from '../../../../src/typeorm'
import { ApplicationModule } from '../../../../src'
import { AddonService } from '../../../../src/baseInfo/core'

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

    /** 添加应用 */
    it(`insert`, async () => {
        let addon: AddonEntity = new AddonEntity();
        addon.name = '应用一',
            addon.title = '应用一',
            addon.appsecret = '456'
        addon.create_time = new Date();
        addon.update_time = new Date();

        const result = await addonService.insert(addon);
        expect(result).toBe(void 0);
    });

    /** 更新应用 */
    it(`save`, async () => {
        let newAddon = new AddonEntity();
        newAddon.title = '新的系统';

        let test = await addonService.save(newAddon, {appid: 1});
        expect(test).toBe(void 0)
    });

    /** 删除应用 */
    it(`delete`, async () => {
        let addon = await addonService.get({ name: '应用一' });
        const res = await addonService.delete(addon);
        expect(res).toBe(void 0);
    });

    /** 获取应用 */
    it(`get`, async () => {
        const add = await addonService.get({ name: '应用一' });
        const addon = await addonService.get({ title: '应用一' });
        expect(add).toEqual(addon);
    });

    afterAll(async () => {
        await app.close();
    });
});
