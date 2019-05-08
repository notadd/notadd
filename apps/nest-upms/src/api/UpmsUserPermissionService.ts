export abstract class UpmsUserPermissionService {
    /**
     * 用户权限
     * @param datas 权限数据
     * @param id 用户id
     * @return
     */
    abstract permission(datas: any[], id: number): any;
}