export abstract class UpmsPermissionService {
    abstract getTreeByRoleId(roleId: number): any[];
    abstract getTreeByUserId(usereId: number, type: number): any[];
}