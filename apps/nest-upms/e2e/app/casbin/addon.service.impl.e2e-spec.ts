import { INestApplication } from "@nestjs/common";
import { ApplicationModule } from "../../../src/app.module";
import { Test } from "@nestjs/testing";
import { AddonEntity } from "../../../src";
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
        // for(let i=0;i<100;i++){
        //     const addon = createAddonTestData();
        // }
        // 插入测试数据
        await app.init();
    });

    /**
   * 更新权限 如果没有就插入
    */
    // it(`insert`, async () => {
    //     const per: ICoreAddonPermission = { name: 'one1', value: ['value'] };
    //     const addon: ICoreAddon = { name: 'addon2', permission: [per] };
    //     await coreAdd.upgrade(addon).then(res => {
    //         expect(res.code).toBe(-1);
    //     })
    // });

    /**
     * 如果有权限,就更新
     */
    it(`upgrade`, async () => {
        const per: ICoreAddonPermission = { name: 'one', value: ['value'] };
        const addon: ICoreAddon = { name: 'addon1', permission: [per] };
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

function getRandomTitle(): string{
    return `title_${new Date().getTime()}`
}