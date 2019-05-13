import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PermissionEntity } from '../../../../src/typeorm'
import { ApplicationModule } from '../../../../src'
import { PermissionService } from '../../../../src/baseInfo/core'
import { DataError } from '../../../../src/baseInfo/errors/role.error';
describe('PermissionServiceImpl', () => {
    let app: INestApplication;
    let permissionService: PermissionService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        permissionService = app.get(PermissionService);
        /** 新增权限 */
        let permission = new PermissionEntity();
        permission.value = 'two';
        permission.name = 'two';
        permission.pid = 1;
        permission.type = 1;
        permission.icon = 'icon';
        permission.displayorder = 1;
        await permissionService.insert(permission);
        await app.init();
    });

    // /** 新增权限,在beforeAll实现 */
    it(`insert`, async () => {
        let permission = new PermissionEntity();
        permission.value = 'one';
        permission.name = 'one';
        permission.pid = 1;
        permission.type = 1;
        permission.icon = 'icon';
        permission.displayorder = 1;
        let res = await permissionService.insert(permission);
        expect(0).toBe(0);
    });

    /** 删除用户 */
    it(`delete`, async () => {
        let permission = await permissionService.get({ name: 'two' });
        await permissionService.delete(permission).then(res => {
            expect(res.affected).toBe(1)
        }).catch(e => {
            expect(e instanceof DataError).toBe(true)
        })
    });

    /** 更新用户 */
    it(`save`, async () => {
        let newPsn = new PermissionEntity();
        let oldPsn = await permissionService.get({ name: 'one' });
        // 修改权限状态为禁止
        newPsn.status = -1;
        await permissionService.save(newPsn, { permission_id: oldPsn.permission_id }).then(res => { 
            expect(res.status).toEqual(-1);
        }).catch(e => { });
    });

    /** 获取用户 */
    it(`get`, async () => {
        let permission1 = await permissionService.get({ name: 'one' });
        let permission2 = await permissionService.get({ value: 'one' })
        expect(permission1).toEqual(permission2);
    });

    afterAll(async () => {
        await app.close();
    });
});
