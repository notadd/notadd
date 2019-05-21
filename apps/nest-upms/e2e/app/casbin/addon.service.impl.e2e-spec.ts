import { INestApplication } from "@nestjs/common";
import { ApplicationModule } from "../../../src/app.module";
import { Test } from "@nestjs/testing";
import { AddonEntity, PermissionEntity } from "../../../src";
import { CoreAddon, ICoreAddon, ICoreAddonPermission } from "../../../src/casbin/core/addon";
describe('addonServiceImpl', () => {
    let app: INestApplication;
    let coreAdd: CoreAddon;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        coreAdd = app.get(CoreAddon);
        
        // const per1: ICoreAddonPermission = { name: 'one6', value: ['value'] };
        // const addon1: ICoreAddon = { name: 'addon6', permission: [per1] };
        // await coreAdd.install(addon1).then(res => {
        //     expect(res.code).toBe(1);
        // })

        const per3: ICoreAddonPermission = { name: 'one1', value: ['value'] };
        const addon3: ICoreAddon = { name: 'addon1', permission: [per3] };
        await coreAdd.install(addon3).then(res => {
            expect(res.code).toBe(1);
        })

        // delete
        const per2: ICoreAddonPermission = { name: 'one5', value: ['value'] };
        const addon2: ICoreAddon = { name: 'addon5', permission: [per2] };
        await coreAdd.install(addon2).then(res => {
            expect(res.code).toBe(1);
        })
        await app.init();
    });
    /**
     * 安装应用
     */
    it(`install`, async () => {
        const permission = { name: 'one', value: ['value'] };
        const addon: ICoreAddon = { name: 'addon3', permission: [permission]};
        await coreAdd.install(addon).then(res=>{
            expect(res.code).toBe(1);
        })
    });

    /**
     * 卸载应用
     */
    it(`uninstall`, async () => {
        const per: ICoreAddonPermission = { name: 'one5', value: ['value'] };
        const addon: ICoreAddon = { name: 'addon5', permission: [per] };
        await coreAdd.uninstall(addon).then(res => {
            expect(res.code).toBe(1);
        })
    })

    /**
     * 更新权限 如果没有就插入
     */
    it(`insert`, async () => {
        const per: ICoreAddonPermission = { name: 'one1', value: ['value123'] };
        const addon: ICoreAddon = { name: 'addon1', permission: [per] };       
        await coreAdd.upgrade(addon).then(res => {
            expect(res.code).toBe(1);
        })
    });

    // /**
    //  * 如果有权限,就更新 
    //  */
    // it(`upgrade`, async () => {
    //     const per: ICoreAddonPermission = { name: 'one', value: ['value'] };
    //     const addon: ICoreAddon = { name: 'addon1', permission: [per] };
    //     await coreAdd.upgrade(addon).then(res => {
    //         expect(res.code).toBe(1);
    //     });
    // });

    /**
     * 查询所有权限,如果有多余的就删除
     */
    it(`deletePermission`, async () => {
        const per: ICoreAddonPermission = { name: 'one', value: ['value'] }
        const addon: ICoreAddon = { name: 'addon1', permission: [per] }
        await coreAdd.upgrade(addon).then(res => {
            expect(res.code).toBe(1);
        })
    });

    afterAll(async () => {
        await app.close();
    });
});

function createAddonTestData() {
    const addon = new AddonEntity();
    addon.name = getRandomName();
    addon.appsecret = getRandomSecret();
    addon.title = getRandomTitle();
    addon.permissions = [];
    return addon;
}

function getRandomName(): string {
    return `addon_${new Date().getTime()}`
}

function getRandomSecret(): string {
    return `secret_${new Date().getTime()}`
}

function getRandomTitle(): string {
    return `title_${new Date().getTime()}`
}