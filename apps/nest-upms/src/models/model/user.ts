import * as db from '../db'
interface UserPermission extends db.UserPermission {
    permission: db.Permission;
}
interface RolePermission extends db.RolePermission {
    permission: db.Permission;
}
interface UserRole extends db.UserRole {
    role: db.Role;
    permission: RolePermission;
}
interface Orgainization extends db.Orgainization {
    parent: Orgainization;
}
interface UserOrgainization extends db.UserOrgainization {
    orgainization: Orgainization;
}
export interface User extends db.User {
    // 权限
    permission: UserPermission;
    // 角色
    role: UserRole;
    // 组织
    orgainization: UserOrgainization;
}
