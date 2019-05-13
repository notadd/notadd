import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserEntity, PermissionEntity } from '../../../../src/typeorm'
import { ApplicationModule } from '../../../../src'
import { PermissionService } from '../../../../src/baseInfo/core'
describe('PermissionServiceImpl', () => {
    let app: INestApplication;
    let permissionService: PermissionService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        permissionService = app.get(PermissionService);

        await app.init();
    });

    /** 新增权限 */
    it(`insert`, async () => {
        let permission = new PermissionEntity();
        permission.value = 'two';
        permission.name = 'two';
        permission.pid = 1;
        permission.type = 1;
        permission.icon = 'icon';
        permission.displayorder = 1;
        permission.create_time = new Date();
        permission.update_time = new Date();

        let res = await permissionService.insert(permission);
        expect(res).toBe(void 0);
    });

    /** 删除用户 */
    it(`delete`, async () => {
        let permission = await permissionService.get({ name: 'two' });
        let res = await permissionService.delete(permission)
        expect(res).toBe(void 0);
    });

    /** 更新用户 */
    it(`save`, async () => {
        let newPermission = new PermissionEntity();
        // 修改权限状态为禁止
        newPermission.status = -1;

        let res = await permissionService.save(newPermission, { permission_id: 11 });
        expect(res).toBe(void 0)
    });

    /** 获取用户 */
    it(`get`, async () => {
        let permission1 = await permissionService.get({ name: 'two' });
        let permission2 = await permissionService.get({ value: 'two' })
        expect(permission1).toEqual(permission2);
    });




    afterAll(async () => {
        await app.close();
    });
});
