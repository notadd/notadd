
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
     * -1 操作成功
     * 1 操作失败
     */
    core: -1 | 1;
    /**
     * 安装失败的提示
     */
    message?: string;
}

export abstract class CoreAddon {
    
    /**
     * 安装应用
     * @param {ICoreAddon} addon
     */
    abstract install(addon: ICoreAddon): Promise<ICoreAddonMessage>;
    /**
     * 卸载应用
     * @param {ICoreAddon} addon
     */
    abstract uninstall(addon: ICoreAddon): Promise<ICoreAddonMessage>;
    /**
     * 更新应用
     * @param {ICoreAddon} addon
     */
    abstract upgrade(addon: ICoreAddon): Promise<ICoreAddonMessage>;
}

