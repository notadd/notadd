export abstract class BaseService {
    /**
     * 根据条件查询记录数量
     * @param example
     * @return
     */
    abstract countByExample(example: any): any;
    /**
     * 根据条件删除记录
     * @param example
     * @return
     */
    abstract deleteByExample(example: any): any;
    /**
     * 根据主键删除记录
     * @param id
     * @return
     */
    abstract deleteByPrimaryKey(id: number): any;
    /**
     * 插入记录
     * @param record
     * @return
     */
    abstract insert(record: any): any;
    /**
     * 插入记录有效字段
     * @param record
     * @return
     */
    abstract insertSelective(record: any): any;
    /**
     * 根据条件查询记录，附带BLOB字段
     * @param example
     * @return
     */
    abstract selectByExampleWithBLOBs(example: any): any;
    /**
     * 根据条件查询记录
     * @param example
     * @return
     */
    abstract selectByExample(example: any): any;
    /**
     * 根据条件查询记录并按页码分页，附带BLOB字段
     * @param example 条件
     * @param pageNum 页数
     * @param pageSize 每页记录数
     * @return
     */
    abstract selectByExampleWithBLOBsForStartPage(example: any, pageNum: number, pageSize: number): any;
    /**
     * 根据条件查询记录并按页码分页
     * @param example 条件
     * @param pageNum 页数
     * @param pageSize 每页记录数
     * @return
     */
    abstract selectByExampleForStartPage(example: any, pageNum: number, pageSize: number): any;
    /**
     * 根据条件查询记录并按最后记录数分页，附带BLOB字段
     * @param example 条件
     * @param offset 跳过数量
     * @param limit 查询数量
     * @return
     */
    abstract selectByExampleWithBLOBsForOffsetPage(example: any, offset: number, limit: number): any;
    /**
     * 根据条件查询记录并按最后记录数分页
     * @param example 条件
     * @param offset 跳过数量
     * @param limit 查询数量
     * @return
     */
    abstract selectByExampleForOffsetPage(example: any, offset: number, limit: number): any;
    /**
    * 根据条件查询第一条记录
    * @param example
    * @return
    */
    abstract selectFirstByExample(example: any): any;
    /**
     * 根据条件查询第一条记录，附带BLOB字段
     * @param example
     * @return
     */
    abstract selectFirstByExampleWithBLOBs(example: any): any;
    /**
     * 根据主键查询记录
     * @param id
     * @return
     */
    abstract selectByPrimaryKey(id: number): any;
    /**
     * 根据条件更新有效字段
     * @param record
     * @param example
     * @return
     */
    abstract updateByExampleSelective(record: any, example: any): number;
    /**
     * 根据条件更新记录有效字段，附带BLOB字段
     * @param record
     * @param example
     * @return
     */
    abstract updateByExampleWithBLOBs(record: any, example: any): number;
    /**
    * 根据条件更新记录
    * @param record
    * @param example
    * @return
    */
    abstract updateByExample(record: any, example: any): number;
    /**
     * 根据主键更新记录有效字段
     * @param record
     * @return
     */
    abstract updateByPrimaryKeySelective(record: any): number;
    /**
    * 根据主键更新记录，附带BLOB字段
    * @param record
    * @return
    */
    abstract updateByPrimaryKeyWithBLOBs(record: any): number;
    /**
     * 根据主键更新记录
     * @param record
     * @return
     */
    abstract updateByPrimaryKey(record: any): number;
    /**
     * 根据主键批量删除记录
     * @param ids
     * @return
     */
    abstract deleteByPrimaryKeys(ids: string[]): number;
    /**
     * 初始化mapper
     */
    abstract initMapper(): any;
}