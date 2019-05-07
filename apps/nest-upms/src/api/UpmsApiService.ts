export abstract class UpmsApiService {
    /**
     * 根据用户id获取所拥有的权限
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsPermissionByUpmsUserId(upmsUserId: number): any;
    /**
     * 根据用户id获取所拥有的权限
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsPermissionByUpmsUserIdByCache(upmsUserId: number): any;
    /**
     * 根据用户id获取所属的角色
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsRoleByUpmsUserId(upmsUserId: number): any;
    /**
     * 根据用户id获取所属的角色
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsRoleByUpmsUserIdByCache(upmsUserId: number): any;
    /**
     * 根据角色id获取所拥有的权限
     * @param upmsRoleId
     * @return
     */
    abstract selectUpmsRolePermisstionByUpmsRoleId(upmsRoleId: number): any;
    /**
     * 根据用户id获取所拥有的权限
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsUserPermissionByUpmsUserId(upmsUserId: number): any;
    /**
    * 根据条件获取系统数据
    * @param upmsSystemExample
    * @return
    */
    abstract selectUpmsSystemByExample(upmsSystemExample: any): any;
    /**
     * 根据条件获取组织数据
     * @param upmsOrganizationExample
     * @return
     */
    abstract selectUpmsOrganizationByExample(upmsOrganizationExample: any): any;
    /**
     * 根据username获取UpmsUser
     * @param username
     * @return
     */
    abstract selectUpmsUserByUsername(username: string): any;
    /**
    * 写入操作日志
    * @param record
    * @return
    */
    abstract insertUpmsLogSelective(record: any): any;
}
