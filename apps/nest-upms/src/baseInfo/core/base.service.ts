export abstract class BaseService<Entity>{
    /**
         * 获取单个
         * @returns Promise
         */
    abstract get(where: Partial<Entity>): Promise<Entity>;
    /**
     * 更新
     * @returns Promise
     */
    abstract save(data: Partial<Entity>, where: Partial<Entity>): Promise<void>;
    /**
     * 删除
     * @returns Promise
     */
    abstract delete(data: Partial<Entity>): Promise<void>;
    /**
     * 插入
     * @returns Promise
     */
    abstract insert(data: Partial<Entity>): Promise<void>;
    /**
     * 搜索
     * @returns Promise
     */
    abstract search(where: Partial<Entity>): Promise<void>;
}