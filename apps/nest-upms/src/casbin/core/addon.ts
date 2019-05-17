
export interface ICoreAddonPermission {
    name: string;
    value: string[];
}

export interface ICoreAddon {
    name: string;
    permission: ICoreAddonPermission[];
}

export interface ICoreAddonMessage {
    /**
     * -1 操作失败
     * 1 操作成功
     */
    code: -1 | 1;
    /**
     * 安装失败的提示
     * install message 
     */
    message?: string;
}

export abstract class CoreAddon {
    /**
     * 安装应用 install addon
     * @param {ICoreAddon} addon
     * 1. 解析配置文件,添加权限
     */
    abstract install(addon: ICoreAddon): Promise<ICoreAddonMessage>;
    /**
     * 卸载应用 uninstall addon
     * @param {ICoreAddon} addon
     * 1. 根据应用拿到权限,删掉
     */
    abstract uninstall(addon: ICoreAddon): Promise<ICoreAddonMessage>;
    /**
     * 更新应用 upgrade addon
     * @param {ICoreAddon} addon
     * 
     * 1. 先通过模块名称找到权限
     * 2. 对比判断是否有新增的权限,如果有就插入
     * 3. 对比判断是否有多余的权限,如果有就删除
     * 4. 对比判断是否有变动的权限,如果有就更新
     */
    abstract upgrade(addon: ICoreAddon): Promise<ICoreAddonMessage>;

}

