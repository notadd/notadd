import { Permission, Role, UserPermission, System, Orgainization, User } from '../models/db'
export abstract class UpmsApiService {
    /**
     * 根据用户id获取所拥有的权限
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsPermissionByUpmsUserId(upmsUserId: number): Permission[];
    /**
     * 根据用户id获取所拥有的权限
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsPermissionByUpmsUserIdByCache(upmsUserId: number): Permission[];
    /**
     * 根据用户id获取所属的角色
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsRoleByUpmsUserId(upmsUserId: number): Role[];
    /**
     * 根据用户id获取所属的角色
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsRoleByUpmsUserIdByCache(upmsUserId: number): Role[];
    /**
     * 根据角色id获取所拥有的权限
     * @param upmsRoleId
     * @return
     */
    abstract selectUpmsRolePermisstionByUpmsRoleId(upmsRoleId: number): UserPermission[];
    /**
     * 根据用户id获取所拥有的权限
     * @param upmsUserId
     * @return
     */
    abstract selectUpmsUserPermissionByUpmsUserId(upmsUserId: number): UserPermission[];
    /**
    * 根据条件获取系统数据
    * @param upmsSystemExample
    * @return
    */
    abstract selectUpmsSystemByExample(upmsSystemExample: any): System[];
    /**
     * 根据条件获取组织数据
     * @param upmsOrganizationExample
     * @return
     */
    abstract selectUpmsOrganizationByExample(upmsOrganizationExample: any): Orgainization[];
    /**
     * 根据username获取UpmsUser
     * @param username
     * @return
     */
    abstract selectUpmsUserByUsername(username: string): User;
    /**
    * 写入操作日志
    * @param record
    * @return
    */
    abstract insertUpmsLogSelective(record: any): number;
}
