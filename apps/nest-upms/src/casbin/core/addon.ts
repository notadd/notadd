
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
     * -1 操作成功 success
     * 1 操作失败 fail
     */
    core: -1 | 1;
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
     */
    abstract install(addon: ICoreAddon): Promise<ICoreAddonMessage>;
    /**
     * 卸载应用 uninstall addon
     * @param {ICoreAddon} addon
     */
    abstract uninstall(addon: ICoreAddon): Promise<ICoreAddonMessage>;
    /**
     * 更新应用 upgrade addon
     * @param {ICoreAddon} addon
     */
    abstract upgrade(addon: ICoreAddon): Promise<ICoreAddonMessage>;
}

