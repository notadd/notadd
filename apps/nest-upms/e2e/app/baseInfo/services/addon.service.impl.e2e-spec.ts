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

        /** 添加应用 */
        let addon: AddonEntity = new AddonEntity();
        addon.name = '应用一',
        addon.title = '应用一',
        addon.appsecret = '123'
        await addonService.insert(addon);
        await app.init();
    });

    // // 添加应用
    // it(`insert`, async () => {
    //     let addon: AddonEntity = new AddonEntity();
    //     addon.name = '公共应用',
    //     addon.title = '应用',
    //     addon.appsecret = '123'
    //     await addonService.insert(addon);
    //     expect(0).toBe(0);
    // });

    /** 更新应用 */
    it(`save`, async () => {
        let newAddon = new AddonEntity();
        let oldAddon = await addonService.get({ name: '公共应用' })
        newAddon.title = '这是新的公共';

        let test = await addonService.save(newAddon, { appid: oldAddon.appid });
        expect(test).toBe(void 0)
    });

    /** 删除应用 */
    it(`delete`, async () => {
        let addon = await addonService.get({ name: '应用一' });
        let res = await addonService.delete(addon);
        expect(res).toBe(void 0);
    });

    /** 获取应用 */
    it(`get`, async () => {
        let addon1 = await addonService.get({ name: '公共应用' })
        let addon2 = await addonService.get({ name: '公共应用' });
        expect(addon1).toEqual(addon2);
    });

    afterAll(async () => {
        await app.close();
    });
});
