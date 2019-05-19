
import { CoreAddon, ICoreAddonMessage, ICoreAddon } from '../core/addon';
import { InjectRepository } from '@nestjs/typeorm';
import { AddonEntity, AddonPermissionEntity, PermissionEntity } from '../..';
import { Repository } from 'typeorm';
export class AddonserviceImpl extends CoreAddon {

    constructor(
        @InjectRepository(AddonEntity) public readonly addonRepo: Repository<AddonEntity>,
        @InjectRepository(AddonPermissionEntity) public readonly addPerRepo: Repository<AddonPermissionEntity>,
        @InjectRepository(PermissionEntity) public readonly permissionRepo: Repository<AddonPermissionEntity>,
    ) { super() }
    /**
     * 安装应用
     * @param {ICoreAddon} addon
     * 1. 解析配置文件,添加权限
     */
    async install(addon: ICoreAddon): Promise<ICoreAddonMessage> {

        //创建安装程序的路径

        //

        throw new Error("");
    }
    /**
     * 卸载应用
     * @param {ICoreAddon} addon
     * 1. 根据应用拿到权限,删掉
     */
    uninstall(addon: ICoreAddon): Promise<ICoreAddonMessage> {
        throw new Error("");
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
            for (let addonPer of addon.permission) {
                const res = exist.permissions.find(item => item.name === addonPer.name);
                if (!res) {
                    this.addPerRepo.insert(res);
                } else {

                }
            }
            //根据模块名找到所有已存在的权限
            let permissions = await this.addonRepo.find({ where: { name: addon.name } });
            for (let addonPer of addon.permission) {
                const res = exist.permissions.find(item => item.name === addonPer.name);
                if (res) {
                    this.addPerRepo.delete(res)
                } else {
                    this.addPerRepo.save(res);
                }
            }
            return {
                code: 1
            }
        } catch (e) {
            return { code: -1, message: e.message }
        }
    }


}