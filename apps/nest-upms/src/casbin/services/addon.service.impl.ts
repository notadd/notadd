
import { CoreAddon, ICoreAddonMessage, ICoreAddon } from '../core/addon';
import { InjectRepository } from '@nestjs/typeorm';
import { AddonEntity, PermissionEntity } from '../..';
import { Repository } from 'typeorm';
export class AddonServiceImpl extends CoreAddon {
    constructor(
        @InjectRepository(AddonEntity) public readonly addonRepo: Repository<AddonEntity>,
        @InjectRepository(PermissionEntity) public readonly permissionRepo: Repository<PermissionEntity>,
    ) { super() }
    /**
     * 安装应用 Todo
     * @param {ICoreAddon} addon
     * 1. 解析配置文件,添加权限
     */
    async install(addon: ICoreAddon): Promise<ICoreAddonMessage> {
        try {
            // 先检查是否已经安装
            const res = await this.addonRepo.findOneOrFail({ name: addon.name });
            if (res) {
                // 如果已经安装了,就跳转到更新
                this.upgrade(addon)
            } else {
                // 插入应用表
                const addonEntity = new AddonEntity();
                addonEntity.name = addon.name;
                // 插入权限
                await Promise.all(addon.permission.map(async per => {
                    // 构造一个权限
                    const item = new PermissionEntity();
                    item.fromAddon = addonEntity;
                    item.name = `${addon.name}.${per.name}`
                    item.value = per.value;
                    await this.permissionRepo.insert(item);
                }));
                await this.addonRepo.insert(addonEntity);
            }
            return { code: 1, message: '操作成功' }
        } catch (e) {
            return { code: -1, message: e.message }
        }
    }
    /**
     * 卸载应用 
     * @param {ICoreAddon} addon
     * 1. 根据应用名称拿到权限,删掉
     */
    async uninstall(addon: ICoreAddon): Promise<ICoreAddonMessage> {
        try {
            let permissions = await this.addonRepo.find({ where: { name: addon.name } });
            for (let permission of permissions) {
                if (permission) {
                    await this.permissionRepo.delete(name);
                }
            }
            return {
                code: 1,
                message: '操作成功'
            }
        } catch (e) {
            return { code: -1, message: e.message }
        }
    }
    /**
     * 更新应用
     * @param {ICoreAddon} addon
     * 
     * 1. 先通过模块名称找到权限
     * 2. 对比判断是否有新增的权限,如果有就插入
     * 3. 对比判断是否有多余的权限,如果有就删除
     *      1. 根据模块名找到所有已存在的权限
     *      2. 根据配置文件有现在的所有权限
     *      3. let item = allPerssions.filter(item=>{
     *             return !!allPermissions2.find(item2=>{ return item.name === item2.name})
     *        })
     * 4. 对比判断是否有变动的权限,如果有就更新
     */
    async upgrade(addon: ICoreAddon): Promise<ICoreAddonMessage> {
        try {
            // 通过模块名程找到数据库中所对应的模块
            let exist = await this.addonRepo.findOne({ where: { name: addon.name } });
            //  对比判断是否有新增的权限,如果有就插入

            addon.permission = addon.permission || [];
            for (let addonPer of addon.permission) {
                const res = exist.permissions.find(item => item.name === addonPer.name);
                if (!res) {
                    this.permissionRepo.insert(res);
                } else {
                    if (res) {
                        this.permissionRepo.delete(res)
                    } else {
                        this.permissionRepo.save(res);
                    }
                }
            }
            //根据模块名找到所有已存在的权限
            // let permissions = await this.addonRepo.find({ where: { name: addon.name } });
            // for (let addonPer of addon.permission) {
            //     const res = exist.permissions.find(item => item.name === addonPer.name);
            //     if (res) {
            //         this.permissionRepo.delete(res)
            //     } else {
            //         this.permissionRepo.save(res);
            //     }
            // }
            return {
                code: 1
            }
        } catch (e) {
            return { code: -1, message: e.message }
        }
    }


}