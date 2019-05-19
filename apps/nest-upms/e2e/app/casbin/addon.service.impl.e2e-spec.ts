import { INestApplication } from "@nestjs/common";
import { AddonService } from "../../../src/baseInfo/core/addon.service";
import { ApplicationModule } from "../../../src/app.module";
import { Test } from "@nestjs/testing";
import { AddonEntity } from "../../../src";

describe('addonServiceImpl', () => {
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

    // it(`install`, async () => {
    //     const addon=new AddonEntity();
    //     addon.name='卡机';
    //     addon.icon='花点时间';
    //     addon.title='小黑';
    //     addon.description='都快拉上了肯定会';
    //     addon.status=1;
    //     await addonService.insert(addon).then((result) => {
    //         expect(result.name).toEqual('卡机');
    //     }).catch(e => {
    //         expect(e instanceof Error).toEqual(true);
    //     });
    // });
    it(`is`, async () =>{

    });


    afterAll(async () => {
        await app.close();
    });
});