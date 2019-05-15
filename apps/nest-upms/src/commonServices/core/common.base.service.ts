import { DeleteResult } from 'typeorm';
export abstract class CommonBaseService<Entity>{
    /**
     * 获取单个
     * @returns Promise
     */
    abstract get(where: Partial<Entity>): Promise<Entity>;
    /**
     * 更新
     * @returns Promise
     */
    abstract save(data: Entity, where: Partial<Entity>): Promise<Entity>;
    /**
     * 删除
     * @returns Promise
     */
    abstract delete(data: Partial<Entity>): Promise<DeleteResult>;
    /**
     * 插入
     * @returns Promise
     */
    abstract insert(data: Entity): Promise<Entity>;
    /**
     * 搜索
     * @returns Promise
     */
    abstract search(where: Partial<Entity>): Promise<void>;
}