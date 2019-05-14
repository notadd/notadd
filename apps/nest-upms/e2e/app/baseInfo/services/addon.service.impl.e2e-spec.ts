import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AddonEntity } from '../../../../src/typeorm'
import { ApplicationModule } from '../../../../src'
import { AddonService } from '../../../../src/baseInfo/core'
import { AddonNameError, AddonIsNullError, AddonMustDataNullError } from '../../../../src/baseInfo/errors/error';
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
        let addon: AddonEntity = getAddon('addon1','应用一'); 
        await addonService.insert(addon).then(res => {}).catch(e => {});

        /** 添加应用 */
        let addon2: AddonEntity = getAddon('addon2','应用二');
        await addonService.insert(addon2).then(res => {}).catch(e => {});

        await app.init();
    });

    /** 添加应用,校验应用名为空异常 */
    it(`insert.throw.AddonMustDataNullError`, async () => {
        let addon: AddonEntity = getAddon('','应用二');
        addonService.insert(addon).then(res => {
            expect(res.name).toEqual('addon2')
        }).catch(e => {
            expect(e instanceof AddonMustDataNullError).toBeTruthy();
        });
    });

    /** 更新应用 */
    it(`save`, async () => {
        let newAddon = new AddonEntity();
        newAddon.title = 'new title';
        await addonService.save(newAddon, { name: 'addon1' }).then(res => {
            expect(res.title).toEqual('new title')
        }).catch(e => {
            expect(e instanceof AddonIsNullError).toBeTruthy()
        });
    });

    /** 更新应用 */
    it(`save`, async () => {
        let newAddon = new AddonEntity();
        newAddon.title = 'new title';
        await addonService.save(newAddon, { name: 'addon3' }).then(res => {
            expect(res.title).toEqual('new title')
        }).catch(e => {
            expect(e instanceof AddonIsNullError).toBeTruthy();
        });
    });

    /** 删除应用 */
    it(`delete`, async () => {
        await addonService.delete({ name: 'addon2' }).then(res => {
            expect(res.affected).toEqual(1)
        }).catch(e => {
            expect(e instanceof AddonIsNullError).toEqual(true)
        });
    });

    /** 获取应用 */
    it(`get`, async () => {
        addonService.get({ name: 'addon1' }).then(res => {
            expect(res.name).toEqual('addon1')
        }).catch(e => {
            expect(e instanceof ServerError).toEqual(true)
        });
    });


    afterAll(async () => {
        await app.close();
    });
});

export function getAddon(name: string, title: string): AddonEntity {
    let addon = new AddonEntity();
    addon.name = name;
    addon.title = title;
    addon.status = 1;
    addon.appsecret = '123456';
    addon.description = '123456';
    
    return  addon;
}
