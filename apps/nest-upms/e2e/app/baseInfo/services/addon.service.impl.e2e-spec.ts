import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AddonEntity } from '../../../../src/typeorm'
import { ApplicationModule } from '../../../../src'
import { AddonService } from '../../../../src/baseInfo/core'
import { AddonNameError, AddonIsNullError, DataError } from '../../../../src/baseInfo/errors/error';
import { ServerError } from '../../../../src/baseInfo/errors/role.error';

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
        try {
            let addon: AddonEntity = new AddonEntity();
            addon.name = 'addon1';
            addon.title = 'addon1_title';
            addon.appsecret = '123';
            addonService.insert(addon).then(res => {
                // 插入之前要判断 必须要判断
            }).catch(e => {
                throw e;
            });
        } catch (e) { }
        await app.init();
    });

    // // 添加应用
    it(`insert`, async () => {
        let addon: AddonEntity = new AddonEntity();
        addon.name = 'public addon';
        addon.title = '应用';
        addon.appsecret = '123';
        addonService.insert(addon).then(res => {
            expect(res.name).toEqual(`public addon`)
        }).catch(e => {
            expect(e instanceof AddonNameError).toEqual(true);
        });
        // expect(0).toBe(0);
    });

    /** 更新应用 */
    it(`save`, async () => {
        let newAddon = new AddonEntity();
        newAddon.title = 'new title';
        addonService.save(newAddon, { name: 'public addon' }).then(res => {
            expect(res.title).toEqual('new title')
        }).catch(e => {
            expect(e instanceof ServerError).toBeTruthy()
        });
    });

    /** 删除应用 */
    it(`delete`, async () => {
        addonService.delete({ name: 'addon1' }).then(res => {
            expect(res.affected).toEqual(1)
        }).catch(e => {
            expect(e instanceof AddonIsNullError).toEqual(true)
        });
    });

    /** 获取应用 */
    it(`get`, async () => {
        addonService.get({ name: 'public addon' }).then(res => {
            expect(res.name).toEqual('public addon')
        }).catch(e => {
            expect(e instanceof DataError).toEqual(true)
        });
    });

    afterAll(async () => {
        await app.close();
    });
});
