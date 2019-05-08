export abstract class UpmsRolePermissionService {
    /**
     * 角色权限
     * @param datas 权限数据
     * @param id 角色id
     * @return
     */
    abstract rolePermission(datas: any[], id: number): number;
}
