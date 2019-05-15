import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../../src';
import { PermissionService } from '../../../../src/baseInfo/core';
import { PermissionMustDataNullError, PermissionNameExistError, PermissionIsNullError } from '../../../../src/baseInfo/errors/error';
import { PermissionEntity } from '../../../../src/typeorm';
describe('PermissionServiceImpl', () => {
    let app: INestApplication;
    let permissionService: PermissionService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        permissionService = app.get(PermissionService);

        /** 新增权限one */
        let permission = getPermission('one', 'one');
        await permissionService.insert(permission).then(res => { }).catch(res => { });
        /** 新增权限two */
        let permission2 = getPermission('two', 'two');
        await permissionService.insert(permission2).then(res => { }).catch(res => { });

        await app.init();
    });

    /** 新增权限,校验权限名为空 */
    it(`insertThrowPermissionMustDataNullError`, async () => {
        let permission = getPermission('', 'one');
        await permissionService.insert(permission).then(res => { })
            .catch(e => {
                expect(e instanceof PermissionMustDataNullError).toBe(true);
            })
    });

    /** 新增权限,校验权限名重复 */
    it(`insertThrowPermissionNameExistError`, async () => {
        let permission = getPermission('one', 'one');
        permissionService.insert(permission).then(res => { })
            .catch(e => {
                expect(e instanceof PermissionNameExistError).toBe(true);
            })
    });

    /** 删除权限 */
    it(`delete`, async () => {
        let permission = await permissionService.get({ name: 'two' });
        permissionService.delete(permission).then(res => {
            expect(res.affected).toEqual(1);
        });
    });

    /** 更新权限 */
    it(`save`, async () => {
        let newPsn = new PermissionEntity();
        newPsn.status = -1;
        let oldPsn = await permissionService.get({ name: 'one' });
        permissionService.save(newPsn, { permission_id: oldPsn.permission_id }).then(res => {
            expect(res.status).toEqual(-1);
        });
    });

    /** 更新权限,校验库中没有该数据异常 */
    it(`save`, async () => {
        let newPsn = new PermissionEntity();
        newPsn.status = -1;
        permissionService.save(newPsn, { name: 'three' }).then(res => {
            expect(res.status).toEqual(-1);
        }).catch(e => {
            expect(e instanceof PermissionIsNullError).toBe(true);
        })
    });

    /** 获取用户 */
    it(`get`, async () => {
        permissionService.get({ value: 'one' }).then(res => {
            expect(res.value).toEqual('one')
        }).catch(e => { })
    });

    afterAll(async () => {
        await app.close();
    });
});

export function getPermission(name: string, value: string): PermissionEntity {
    let permission = new PermissionEntity()
    permission.name = name;
    permission.value = value;
    permission.pid = 1;
    permission.status = 1;
    permission.type = 1;
    permission.icon = 'icon',
        permission.displayorder = 1;
    return permission;
}