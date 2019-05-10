
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum LogOrderByInput {
    log_id_ASC = "log_id_ASC",
    log_id_DESC = "log_id_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    username_ASC = "username_ASC",
    username_DESC = "username_DESC",
    start_time_ASC = "start_time_ASC",
    start_time_DESC = "start_time_DESC",
    spend_time_ASC = "spend_time_ASC",
    spend_time_DESC = "spend_time_DESC",
    basepath_ASC = "basepath_ASC",
    basepath_DESC = "basepath_DESC",
    uri_ASC = "uri_ASC",
    uri_DESC = "uri_DESC",
    url_ASC = "url_ASC",
    url_DESC = "url_DESC",
    method_ASC = "method_ASC",
    method_DESC = "method_DESC",
    parameter_ASC = "parameter_ASC",
    parameter_DESC = "parameter_DESC",
    user_agent_ASC = "user_agent_ASC",
    user_agent_DESC = "user_agent_DESC",
    ip_ASC = "ip_ASC",
    ip_DESC = "ip_DESC",
    result_ASC = "result_ASC",
    result_DESC = "result_DESC",
    permission_ASC = "permission_ASC",
    permission_DESC = "permission_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum OrgainizationOrderByInput {
    orgainization_id_ASC = "orgainization_id_ASC",
    orgainization_id_DESC = "orgainization_id_DESC",
    pid_ASC = "pid_ASC",
    pid_DESC = "pid_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    ctime_ASC = "ctime_ASC",
    ctime_DESC = "ctime_DESC"
}

export enum PermissionOrderByInput {
    permission_id_ASC = "permission_id_ASC",
    permission_id_DESC = "permission_id_DESC",
    system_id_ASC = "system_id_ASC",
    system_id_DESC = "system_id_DESC",
    pid_ASC = "pid_ASC",
    pid_DESC = "pid_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    type_ASC = "type_ASC",
    type_DESC = "type_DESC",
    permission_value_ASC = "permission_value_ASC",
    permission_value_DESC = "permission_value_DESC",
    uri_ASC = "uri_ASC",
    uri_DESC = "uri_DESC",
    icon_ASC = "icon_ASC",
    icon_DESC = "icon_DESC",
    status_ASC = "status_ASC",
    status_DESC = "status_DESC",
    ctime_ASC = "ctime_ASC",
    ctime_DESC = "ctime_DESC",
    orders_ASC = "orders_ASC",
    orders_DESC = "orders_DESC"
}

export enum PrismaDatabase {
    default = "default"
}

export enum RoleOrderByInput {
    role_id_ASC = "role_id_ASC",
    role_id_DESC = "role_id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    ctime_ASC = "ctime_ASC",
    ctime_DESC = "ctime_DESC",
    orders_ASC = "orders_ASC",
    orders_DESC = "orders_DESC"
}

export enum RolePermissionOrderByInput {
    role_permission_id_ASC = "role_permission_id_ASC",
    role_permission_id_DESC = "role_permission_id_DESC",
    role_id_ASC = "role_id_ASC",
    role_id_DESC = "role_id_DESC",
    permission_id_ASC = "permission_id_ASC",
    permission_id_DESC = "permission_id_DESC"
}

export enum SystemOrderByInput {
    system_id_ASC = "system_id_ASC",
    system_id_DESC = "system_id_DESC",
    icon_ASC = "icon_ASC",
    icon_DESC = "icon_DESC",
    banner_ASC = "banner_ASC",
    banner_DESC = "banner_DESC",
    theme_ASC = "theme_ASC",
    theme_DESC = "theme_DESC",
    basepath_ASC = "basepath_ASC",
    basepath_DESC = "basepath_DESC",
    status_ASC = "status_ASC",
    status_DESC = "status_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    ctime_ASC = "ctime_ASC",
    ctime_DESC = "ctime_DESC",
    orders_ASC = "orders_ASC",
    orders_DESC = "orders_DESC"
}

export enum UserOrderByInput {
    user_id_ASC = "user_id_ASC",
    user_id_DESC = "user_id_DESC",
    username_ASC = "username_ASC",
    username_DESC = "username_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC",
    salt_ASC = "salt_ASC",
    salt_DESC = "salt_DESC",
    realname_ASC = "realname_ASC",
    realname_DESC = "realname_DESC",
    avatar_ASC = "avatar_ASC",
    avatar_DESC = "avatar_DESC",
    phone_ASC = "phone_ASC",
    phone_DESC = "phone_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    sex_ASC = "sex_ASC",
    sex_DESC = "sex_DESC",
    locked_ASC = "locked_ASC",
    locked_DESC = "locked_DESC",
    ctime_ASC = "ctime_ASC",
    ctime_DESC = "ctime_DESC"
}

export enum UserOrgainizationOrderByInput {
    user_orgainization_id_ASC = "user_orgainization_id_ASC",
    user_orgainization_id_DESC = "user_orgainization_id_DESC",
    user_id_ASC = "user_id_ASC",
    user_id_DESC = "user_id_DESC",
    orgainization_id_ASC = "orgainization_id_ASC",
    orgainization_id_DESC = "orgainization_id_DESC"
}

export enum UserPermissionOrderByInput {
    user_permission_id_ASC = "user_permission_id_ASC",
    user_permission_id_DESC = "user_permission_id_DESC",
    user_id_ASC = "user_id_ASC",
    user_id_DESC = "user_id_DESC",
    permission_id_ASC = "permission_id_ASC",
    permission_id_DESC = "permission_id_DESC",
    type_ASC = "type_ASC",
    type_DESC = "type_DESC"
}

export enum UserRoleOrderByInput {
    user_role_id_ASC = "user_role_id_ASC",
    user_role_id_DESC = "user_role_id_DESC",
    user_id_ASC = "user_id_ASC",
    user_id_DESC = "user_id_DESC",
    role_id_ASC = "role_id_ASC",
    role_id_DESC = "role_id_DESC"
}

export class LogCreateInput {
    log_id?: string;
    description?: string;
    username: string;
    start_time: number;
    spend_time: number;
    basepath: string;
    uri: string;
    url: string;
    method: string;
    parameter: string;
    user_agent?: string;
    ip?: string;
    result?: string;
    permission?: string;
}

export class LogSubscriptionWhereInput {
    AND: LogSubscriptionWhereInput[];
    OR: LogSubscriptionWhereInput[];
    NOT: LogSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: LogWhereInput;
}

export class LogUpdateInput {
    description?: string;
    username?: string;
    start_time?: number;
    spend_time?: number;
    basepath?: string;
    uri?: string;
    url?: string;
    method?: string;
    parameter?: string;
    user_agent?: string;
    ip?: string;
    result?: string;
    permission?: string;
}

export class LogUpdateManyMutationInput {
    description?: string;
    username?: string;
    start_time?: number;
    spend_time?: number;
    basepath?: string;
    uri?: string;
    url?: string;
    method?: string;
    parameter?: string;
    user_agent?: string;
    ip?: string;
    result?: string;
    permission?: string;
}

export class LogWhereInput {
    AND: LogWhereInput[];
    OR: LogWhereInput[];
    NOT: LogWhereInput[];
    log_id?: string;
    log_id_not?: string;
    log_id_in: string[];
    log_id_not_in: string[];
    log_id_lt?: string;
    log_id_lte?: string;
    log_id_gt?: string;
    log_id_gte?: string;
    log_id_contains?: string;
    log_id_not_contains?: string;
    log_id_starts_with?: string;
    log_id_not_starts_with?: string;
    log_id_ends_with?: string;
    log_id_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in: string[];
    description_not_in: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    username?: string;
    username_not?: string;
    username_in: string[];
    username_not_in: string[];
    username_lt?: string;
    username_lte?: string;
    username_gt?: string;
    username_gte?: string;
    username_contains?: string;
    username_not_contains?: string;
    username_starts_with?: string;
    username_not_starts_with?: string;
    username_ends_with?: string;
    username_not_ends_with?: string;
    start_time?: number;
    start_time_not?: number;
    start_time_in: number[];
    start_time_not_in: number[];
    start_time_lt?: number;
    start_time_lte?: number;
    start_time_gt?: number;
    start_time_gte?: number;
    spend_time?: number;
    spend_time_not?: number;
    spend_time_in: number[];
    spend_time_not_in: number[];
    spend_time_lt?: number;
    spend_time_lte?: number;
    spend_time_gt?: number;
    spend_time_gte?: number;
    basepath?: string;
    basepath_not?: string;
    basepath_in: string[];
    basepath_not_in: string[];
    basepath_lt?: string;
    basepath_lte?: string;
    basepath_gt?: string;
    basepath_gte?: string;
    basepath_contains?: string;
    basepath_not_contains?: string;
    basepath_starts_with?: string;
    basepath_not_starts_with?: string;
    basepath_ends_with?: string;
    basepath_not_ends_with?: string;
    uri?: string;
    uri_not?: string;
    uri_in: string[];
    uri_not_in: string[];
    uri_lt?: string;
    uri_lte?: string;
    uri_gt?: string;
    uri_gte?: string;
    uri_contains?: string;
    uri_not_contains?: string;
    uri_starts_with?: string;
    uri_not_starts_with?: string;
    uri_ends_with?: string;
    uri_not_ends_with?: string;
    url?: string;
    url_not?: string;
    url_in: string[];
    url_not_in: string[];
    url_lt?: string;
    url_lte?: string;
    url_gt?: string;
    url_gte?: string;
    url_contains?: string;
    url_not_contains?: string;
    url_starts_with?: string;
    url_not_starts_with?: string;
    url_ends_with?: string;
    url_not_ends_with?: string;
    method?: string;
    method_not?: string;
    method_in: string[];
    method_not_in: string[];
    method_lt?: string;
    method_lte?: string;
    method_gt?: string;
    method_gte?: string;
    method_contains?: string;
    method_not_contains?: string;
    method_starts_with?: string;
    method_not_starts_with?: string;
    method_ends_with?: string;
    method_not_ends_with?: string;
    parameter?: string;
    parameter_not?: string;
    parameter_in: string[];
    parameter_not_in: string[];
    parameter_lt?: string;
    parameter_lte?: string;
    parameter_gt?: string;
    parameter_gte?: string;
    parameter_contains?: string;
    parameter_not_contains?: string;
    parameter_starts_with?: string;
    parameter_not_starts_with?: string;
    parameter_ends_with?: string;
    parameter_not_ends_with?: string;
    user_agent?: string;
    user_agent_not?: string;
    user_agent_in: string[];
    user_agent_not_in: string[];
    user_agent_lt?: string;
    user_agent_lte?: string;
    user_agent_gt?: string;
    user_agent_gte?: string;
    user_agent_contains?: string;
    user_agent_not_contains?: string;
    user_agent_starts_with?: string;
    user_agent_not_starts_with?: string;
    user_agent_ends_with?: string;
    user_agent_not_ends_with?: string;
    ip?: string;
    ip_not?: string;
    ip_in: string[];
    ip_not_in: string[];
    ip_lt?: string;
    ip_lte?: string;
    ip_gt?: string;
    ip_gte?: string;
    ip_contains?: string;
    ip_not_contains?: string;
    ip_starts_with?: string;
    ip_not_starts_with?: string;
    ip_ends_with?: string;
    ip_not_ends_with?: string;
    result?: string;
    result_not?: string;
    result_in: string[];
    result_not_in: string[];
    result_lt?: string;
    result_lte?: string;
    result_gt?: string;
    result_gte?: string;
    result_contains?: string;
    result_not_contains?: string;
    result_starts_with?: string;
    result_not_starts_with?: string;
    result_ends_with?: string;
    result_not_ends_with?: string;
    permission?: string;
    permission_not?: string;
    permission_in: string[];
    permission_not_in: string[];
    permission_lt?: string;
    permission_lte?: string;
    permission_gt?: string;
    permission_gte?: string;
    permission_contains?: string;
    permission_not_contains?: string;
    permission_starts_with?: string;
    permission_not_starts_with?: string;
    permission_ends_with?: string;
    permission_not_ends_with?: string;
}

export class LogWhereUniqueInput {
    log_id?: string;
}

export class OrgainizationCreateInput {
    orgainization_id?: string;
    pid?: number;
    name?: string;
    description?: string;
}

export class OrgainizationSubscriptionWhereInput {
    AND: OrgainizationSubscriptionWhereInput[];
    OR: OrgainizationSubscriptionWhereInput[];
    NOT: OrgainizationSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: OrgainizationWhereInput;
}

export class OrgainizationUpdateInput {
    pid?: number;
    name?: string;
    description?: string;
}

export class OrgainizationUpdateManyMutationInput {
    pid?: number;
    name?: string;
    description?: string;
}

export class OrgainizationWhereInput {
    AND: OrgainizationWhereInput[];
    OR: OrgainizationWhereInput[];
    NOT: OrgainizationWhereInput[];
    orgainization_id?: string;
    orgainization_id_not?: string;
    orgainization_id_in: string[];
    orgainization_id_not_in: string[];
    orgainization_id_lt?: string;
    orgainization_id_lte?: string;
    orgainization_id_gt?: string;
    orgainization_id_gte?: string;
    orgainization_id_contains?: string;
    orgainization_id_not_contains?: string;
    orgainization_id_starts_with?: string;
    orgainization_id_not_starts_with?: string;
    orgainization_id_ends_with?: string;
    orgainization_id_not_ends_with?: string;
    pid?: number;
    pid_not?: number;
    pid_in: number[];
    pid_not_in: number[];
    pid_lt?: number;
    pid_lte?: number;
    pid_gt?: number;
    pid_gte?: number;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in: string[];
    description_not_in: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    ctime?: DateTime;
    ctime_not?: DateTime;
    ctime_in: DateTime[];
    ctime_not_in: DateTime[];
    ctime_lt?: DateTime;
    ctime_lte?: DateTime;
    ctime_gt?: DateTime;
    ctime_gte?: DateTime;
}

export class OrgainizationWhereUniqueInput {
    orgainization_id?: string;
    name?: string;
}

export class PermissionCreateInput {
    permission_id?: string;
    system_id: number;
    pid?: number;
    name: string;
    type: number;
    permission_value?: string;
    uri?: string;
    icon?: string;
    status: number;
    orders?: number;
}

export class PermissionSubscriptionWhereInput {
    AND: PermissionSubscriptionWhereInput[];
    OR: PermissionSubscriptionWhereInput[];
    NOT: PermissionSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: PermissionWhereInput;
}

export class PermissionUpdateInput {
    system_id?: number;
    pid?: number;
    name?: string;
    type?: number;
    permission_value?: string;
    uri?: string;
    icon?: string;
    status?: number;
    orders?: number;
}

export class PermissionUpdateManyMutationInput {
    system_id?: number;
    pid?: number;
    name?: string;
    type?: number;
    permission_value?: string;
    uri?: string;
    icon?: string;
    status?: number;
    orders?: number;
}

export class PermissionWhereInput {
    AND: PermissionWhereInput[];
    OR: PermissionWhereInput[];
    NOT: PermissionWhereInput[];
    permission_id?: string;
    permission_id_not?: string;
    permission_id_in: string[];
    permission_id_not_in: string[];
    permission_id_lt?: string;
    permission_id_lte?: string;
    permission_id_gt?: string;
    permission_id_gte?: string;
    permission_id_contains?: string;
    permission_id_not_contains?: string;
    permission_id_starts_with?: string;
    permission_id_not_starts_with?: string;
    permission_id_ends_with?: string;
    permission_id_not_ends_with?: string;
    system_id?: number;
    system_id_not?: number;
    system_id_in: number[];
    system_id_not_in: number[];
    system_id_lt?: number;
    system_id_lte?: number;
    system_id_gt?: number;
    system_id_gte?: number;
    pid?: number;
    pid_not?: number;
    pid_in: number[];
    pid_not_in: number[];
    pid_lt?: number;
    pid_lte?: number;
    pid_gt?: number;
    pid_gte?: number;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    type?: number;
    type_not?: number;
    type_in: number[];
    type_not_in: number[];
    type_lt?: number;
    type_lte?: number;
    type_gt?: number;
    type_gte?: number;
    permission_value?: string;
    permission_value_not?: string;
    permission_value_in: string[];
    permission_value_not_in: string[];
    permission_value_lt?: string;
    permission_value_lte?: string;
    permission_value_gt?: string;
    permission_value_gte?: string;
    permission_value_contains?: string;
    permission_value_not_contains?: string;
    permission_value_starts_with?: string;
    permission_value_not_starts_with?: string;
    permission_value_ends_with?: string;
    permission_value_not_ends_with?: string;
    uri?: string;
    uri_not?: string;
    uri_in: string[];
    uri_not_in: string[];
    uri_lt?: string;
    uri_lte?: string;
    uri_gt?: string;
    uri_gte?: string;
    uri_contains?: string;
    uri_not_contains?: string;
    uri_starts_with?: string;
    uri_not_starts_with?: string;
    uri_ends_with?: string;
    uri_not_ends_with?: string;
    icon?: string;
    icon_not?: string;
    icon_in: string[];
    icon_not_in: string[];
    icon_lt?: string;
    icon_lte?: string;
    icon_gt?: string;
    icon_gte?: string;
    icon_contains?: string;
    icon_not_contains?: string;
    icon_starts_with?: string;
    icon_not_starts_with?: string;
    icon_ends_with?: string;
    icon_not_ends_with?: string;
    status?: number;
    status_not?: number;
    status_in: number[];
    status_not_in: number[];
    status_lt?: number;
    status_lte?: number;
    status_gt?: number;
    status_gte?: number;
    ctime?: DateTime;
    ctime_not?: DateTime;
    ctime_in: DateTime[];
    ctime_not_in: DateTime[];
    ctime_lt?: DateTime;
    ctime_lte?: DateTime;
    ctime_gt?: DateTime;
    ctime_gte?: DateTime;
    orders?: number;
    orders_not?: number;
    orders_in: number[];
    orders_not_in: number[];
    orders_lt?: number;
    orders_lte?: number;
    orders_gt?: number;
    orders_gte?: number;
}

export class PermissionWhereUniqueInput {
    permission_id?: string;
}

export class RoleCreateInput {
    role_id?: string;
    name?: string;
    title?: string;
    description?: string;
    orders?: number;
}

export class RolePermissionCreateInput {
    role_permission_id?: string;
    role_id?: number;
    permission_id?: number;
}

export class RolePermissionSubscriptionWhereInput {
    AND: RolePermissionSubscriptionWhereInput[];
    OR: RolePermissionSubscriptionWhereInput[];
    NOT: RolePermissionSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: RolePermissionWhereInput;
}

export class RolePermissionUpdateInput {
    role_id?: number;
    permission_id?: number;
}

export class RolePermissionUpdateManyMutationInput {
    role_id?: number;
    permission_id?: number;
}

export class RolePermissionWhereInput {
    AND: RolePermissionWhereInput[];
    OR: RolePermissionWhereInput[];
    NOT: RolePermissionWhereInput[];
    role_permission_id?: string;
    role_permission_id_not?: string;
    role_permission_id_in: string[];
    role_permission_id_not_in: string[];
    role_permission_id_lt?: string;
    role_permission_id_lte?: string;
    role_permission_id_gt?: string;
    role_permission_id_gte?: string;
    role_permission_id_contains?: string;
    role_permission_id_not_contains?: string;
    role_permission_id_starts_with?: string;
    role_permission_id_not_starts_with?: string;
    role_permission_id_ends_with?: string;
    role_permission_id_not_ends_with?: string;
    role_id?: number;
    role_id_not?: number;
    role_id_in: number[];
    role_id_not_in: number[];
    role_id_lt?: number;
    role_id_lte?: number;
    role_id_gt?: number;
    role_id_gte?: number;
    permission_id?: number;
    permission_id_not?: number;
    permission_id_in: number[];
    permission_id_not_in: number[];
    permission_id_lt?: number;
    permission_id_lte?: number;
    permission_id_gt?: number;
    permission_id_gte?: number;
}

export class RolePermissionWhereUniqueInput {
    role_permission_id?: string;
}

export class RoleSubscriptionWhereInput {
    AND: RoleSubscriptionWhereInput[];
    OR: RoleSubscriptionWhereInput[];
    NOT: RoleSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: RoleWhereInput;
}

export class RoleUpdateInput {
    name?: string;
    title?: string;
    description?: string;
    orders?: number;
}

export class RoleUpdateManyMutationInput {
    name?: string;
    title?: string;
    description?: string;
    orders?: number;
}

export class RoleWhereInput {
    AND: RoleWhereInput[];
    OR: RoleWhereInput[];
    NOT: RoleWhereInput[];
    role_id?: string;
    role_id_not?: string;
    role_id_in: string[];
    role_id_not_in: string[];
    role_id_lt?: string;
    role_id_lte?: string;
    role_id_gt?: string;
    role_id_gte?: string;
    role_id_contains?: string;
    role_id_not_contains?: string;
    role_id_starts_with?: string;
    role_id_not_starts_with?: string;
    role_id_ends_with?: string;
    role_id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in: string[];
    title_not_in: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in: string[];
    description_not_in: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    ctime?: DateTime;
    ctime_not?: DateTime;
    ctime_in: DateTime[];
    ctime_not_in: DateTime[];
    ctime_lt?: DateTime;
    ctime_lte?: DateTime;
    ctime_gt?: DateTime;
    ctime_gte?: DateTime;
    orders?: number;
    orders_not?: number;
    orders_in: number[];
    orders_not_in: number[];
    orders_lt?: number;
    orders_lte?: number;
    orders_gt?: number;
    orders_gte?: number;
}

export class RoleWhereUniqueInput {
    role_id?: string;
}

export class SystemCreateInput {
    system_id?: string;
    icon?: string;
    banner?: string;
    theme?: string;
    basepath?: string;
    status: number;
    name?: string;
    title?: string;
    description?: string;
    orders?: number;
}

export class SystemSubscriptionWhereInput {
    AND: SystemSubscriptionWhereInput[];
    OR: SystemSubscriptionWhereInput[];
    NOT: SystemSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: SystemWhereInput;
}

export class SystemUpdateInput {
    icon?: string;
    banner?: string;
    theme?: string;
    basepath?: string;
    status?: number;
    name?: string;
    title?: string;
    description?: string;
    orders?: number;
}

export class SystemUpdateManyMutationInput {
    icon?: string;
    banner?: string;
    theme?: string;
    basepath?: string;
    status?: number;
    name?: string;
    title?: string;
    description?: string;
    orders?: number;
}

export class SystemWhereInput {
    AND: SystemWhereInput[];
    OR: SystemWhereInput[];
    NOT: SystemWhereInput[];
    system_id?: string;
    system_id_not?: string;
    system_id_in: string[];
    system_id_not_in: string[];
    system_id_lt?: string;
    system_id_lte?: string;
    system_id_gt?: string;
    system_id_gte?: string;
    system_id_contains?: string;
    system_id_not_contains?: string;
    system_id_starts_with?: string;
    system_id_not_starts_with?: string;
    system_id_ends_with?: string;
    system_id_not_ends_with?: string;
    icon?: string;
    icon_not?: string;
    icon_in: string[];
    icon_not_in: string[];
    icon_lt?: string;
    icon_lte?: string;
    icon_gt?: string;
    icon_gte?: string;
    icon_contains?: string;
    icon_not_contains?: string;
    icon_starts_with?: string;
    icon_not_starts_with?: string;
    icon_ends_with?: string;
    icon_not_ends_with?: string;
    banner?: string;
    banner_not?: string;
    banner_in: string[];
    banner_not_in: string[];
    banner_lt?: string;
    banner_lte?: string;
    banner_gt?: string;
    banner_gte?: string;
    banner_contains?: string;
    banner_not_contains?: string;
    banner_starts_with?: string;
    banner_not_starts_with?: string;
    banner_ends_with?: string;
    banner_not_ends_with?: string;
    theme?: string;
    theme_not?: string;
    theme_in: string[];
    theme_not_in: string[];
    theme_lt?: string;
    theme_lte?: string;
    theme_gt?: string;
    theme_gte?: string;
    theme_contains?: string;
    theme_not_contains?: string;
    theme_starts_with?: string;
    theme_not_starts_with?: string;
    theme_ends_with?: string;
    theme_not_ends_with?: string;
    basepath?: string;
    basepath_not?: string;
    basepath_in: string[];
    basepath_not_in: string[];
    basepath_lt?: string;
    basepath_lte?: string;
    basepath_gt?: string;
    basepath_gte?: string;
    basepath_contains?: string;
    basepath_not_contains?: string;
    basepath_starts_with?: string;
    basepath_not_starts_with?: string;
    basepath_ends_with?: string;
    basepath_not_ends_with?: string;
    status?: number;
    status_not?: number;
    status_in: number[];
    status_not_in: number[];
    status_lt?: number;
    status_lte?: number;
    status_gt?: number;
    status_gte?: number;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in: string[];
    title_not_in: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in: string[];
    description_not_in: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    ctime?: DateTime;
    ctime_not?: DateTime;
    ctime_in: DateTime[];
    ctime_not_in: DateTime[];
    ctime_lt?: DateTime;
    ctime_lte?: DateTime;
    ctime_gt?: DateTime;
    ctime_gte?: DateTime;
    orders?: number;
    orders_not?: number;
    orders_in: number[];
    orders_not_in: number[];
    orders_lt?: number;
    orders_lte?: number;
    orders_gt?: number;
    orders_gte?: number;
}

export class SystemWhereUniqueInput {
    system_id?: string;
}

export class UserCreateInput {
    user_id?: string;
    username?: string;
    password: string;
    salt?: string;
    realname?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    sex: number;
    locked: number;
}

export class UserOrgainizationCreateInput {
    user_orgainization_id?: string;
    user_id?: number;
    orgainization_id?: number;
}

export class UserOrgainizationSubscriptionWhereInput {
    AND: UserOrgainizationSubscriptionWhereInput[];
    OR: UserOrgainizationSubscriptionWhereInput[];
    NOT: UserOrgainizationSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserOrgainizationWhereInput;
}

export class UserOrgainizationUpdateInput {
    user_id?: number;
    orgainization_id?: number;
}

export class UserOrgainizationUpdateManyMutationInput {
    user_id?: number;
    orgainization_id?: number;
}

export class UserOrgainizationWhereInput {
    AND: UserOrgainizationWhereInput[];
    OR: UserOrgainizationWhereInput[];
    NOT: UserOrgainizationWhereInput[];
    user_orgainization_id?: string;
    user_orgainization_id_not?: string;
    user_orgainization_id_in: string[];
    user_orgainization_id_not_in: string[];
    user_orgainization_id_lt?: string;
    user_orgainization_id_lte?: string;
    user_orgainization_id_gt?: string;
    user_orgainization_id_gte?: string;
    user_orgainization_id_contains?: string;
    user_orgainization_id_not_contains?: string;
    user_orgainization_id_starts_with?: string;
    user_orgainization_id_not_starts_with?: string;
    user_orgainization_id_ends_with?: string;
    user_orgainization_id_not_ends_with?: string;
    user_id?: number;
    user_id_not?: number;
    user_id_in: number[];
    user_id_not_in: number[];
    user_id_lt?: number;
    user_id_lte?: number;
    user_id_gt?: number;
    user_id_gte?: number;
    orgainization_id?: number;
    orgainization_id_not?: number;
    orgainization_id_in: number[];
    orgainization_id_not_in: number[];
    orgainization_id_lt?: number;
    orgainization_id_lte?: number;
    orgainization_id_gt?: number;
    orgainization_id_gte?: number;
}

export class UserOrgainizationWhereUniqueInput {
    user_orgainization_id?: string;
}

export class UserPermissionCreateInput {
    user_permission_id?: string;
    user_id: number;
    permission_id: number;
    type: number;
}

export class UserPermissionSubscriptionWhereInput {
    AND: UserPermissionSubscriptionWhereInput[];
    OR: UserPermissionSubscriptionWhereInput[];
    NOT: UserPermissionSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserPermissionWhereInput;
}

export class UserPermissionUpdateInput {
    user_id?: number;
    permission_id?: number;
    type?: number;
}

export class UserPermissionUpdateManyMutationInput {
    user_id?: number;
    permission_id?: number;
    type?: number;
}

export class UserPermissionWhereInput {
    AND: UserPermissionWhereInput[];
    OR: UserPermissionWhereInput[];
    NOT: UserPermissionWhereInput[];
    user_permission_id?: string;
    user_permission_id_not?: string;
    user_permission_id_in: string[];
    user_permission_id_not_in: string[];
    user_permission_id_lt?: string;
    user_permission_id_lte?: string;
    user_permission_id_gt?: string;
    user_permission_id_gte?: string;
    user_permission_id_contains?: string;
    user_permission_id_not_contains?: string;
    user_permission_id_starts_with?: string;
    user_permission_id_not_starts_with?: string;
    user_permission_id_ends_with?: string;
    user_permission_id_not_ends_with?: string;
    user_id?: number;
    user_id_not?: number;
    user_id_in: number[];
    user_id_not_in: number[];
    user_id_lt?: number;
    user_id_lte?: number;
    user_id_gt?: number;
    user_id_gte?: number;
    permission_id?: number;
    permission_id_not?: number;
    permission_id_in: number[];
    permission_id_not_in: number[];
    permission_id_lt?: number;
    permission_id_lte?: number;
    permission_id_gt?: number;
    permission_id_gte?: number;
    type?: number;
    type_not?: number;
    type_in: number[];
    type_not_in: number[];
    type_lt?: number;
    type_lte?: number;
    type_gt?: number;
    type_gte?: number;
}

export class UserPermissionWhereUniqueInput {
    user_permission_id?: string;
}

export class UserRoleCreateInput {
    user_role_id?: string;
    user_id: number;
    role_id: number;
}

export class UserRoleSubscriptionWhereInput {
    AND: UserRoleSubscriptionWhereInput[];
    OR: UserRoleSubscriptionWhereInput[];
    NOT: UserRoleSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserRoleWhereInput;
}

export class UserRoleUpdateInput {
    user_id?: number;
    role_id?: number;
}

export class UserRoleUpdateManyMutationInput {
    user_id?: number;
    role_id?: number;
}

export class UserRoleWhereInput {
    AND: UserRoleWhereInput[];
    OR: UserRoleWhereInput[];
    NOT: UserRoleWhereInput[];
    user_role_id?: string;
    user_role_id_not?: string;
    user_role_id_in: string[];
    user_role_id_not_in: string[];
    user_role_id_lt?: string;
    user_role_id_lte?: string;
    user_role_id_gt?: string;
    user_role_id_gte?: string;
    user_role_id_contains?: string;
    user_role_id_not_contains?: string;
    user_role_id_starts_with?: string;
    user_role_id_not_starts_with?: string;
    user_role_id_ends_with?: string;
    user_role_id_not_ends_with?: string;
    user_id?: number;
    user_id_not?: number;
    user_id_in: number[];
    user_id_not_in: number[];
    user_id_lt?: number;
    user_id_lte?: number;
    user_id_gt?: number;
    user_id_gte?: number;
    role_id?: number;
    role_id_not?: number;
    role_id_in: number[];
    role_id_not_in: number[];
    role_id_lt?: number;
    role_id_lte?: number;
    role_id_gt?: number;
    role_id_gte?: number;
}

export class UserRoleWhereUniqueInput {
    user_role_id?: string;
}

export class UserSubscriptionWhereInput {
    AND: UserSubscriptionWhereInput[];
    OR: UserSubscriptionWhereInput[];
    NOT: UserSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    username?: string;
    password?: string;
    salt?: string;
    realname?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    sex?: number;
    locked?: number;
}

export class UserUpdateManyMutationInput {
    username?: string;
    password?: string;
    salt?: string;
    realname?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    sex?: number;
    locked?: number;
}

export class UserWhereInput {
    AND: UserWhereInput[];
    OR: UserWhereInput[];
    NOT: UserWhereInput[];
    user_id?: string;
    user_id_not?: string;
    user_id_in: string[];
    user_id_not_in: string[];
    user_id_lt?: string;
    user_id_lte?: string;
    user_id_gt?: string;
    user_id_gte?: string;
    user_id_contains?: string;
    user_id_not_contains?: string;
    user_id_starts_with?: string;
    user_id_not_starts_with?: string;
    user_id_ends_with?: string;
    user_id_not_ends_with?: string;
    username?: string;
    username_not?: string;
    username_in: string[];
    username_not_in: string[];
    username_lt?: string;
    username_lte?: string;
    username_gt?: string;
    username_gte?: string;
    username_contains?: string;
    username_not_contains?: string;
    username_starts_with?: string;
    username_not_starts_with?: string;
    username_ends_with?: string;
    username_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in: string[];
    password_not_in: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    salt?: string;
    salt_not?: string;
    salt_in: string[];
    salt_not_in: string[];
    salt_lt?: string;
    salt_lte?: string;
    salt_gt?: string;
    salt_gte?: string;
    salt_contains?: string;
    salt_not_contains?: string;
    salt_starts_with?: string;
    salt_not_starts_with?: string;
    salt_ends_with?: string;
    salt_not_ends_with?: string;
    realname?: string;
    realname_not?: string;
    realname_in: string[];
    realname_not_in: string[];
    realname_lt?: string;
    realname_lte?: string;
    realname_gt?: string;
    realname_gte?: string;
    realname_contains?: string;
    realname_not_contains?: string;
    realname_starts_with?: string;
    realname_not_starts_with?: string;
    realname_ends_with?: string;
    realname_not_ends_with?: string;
    avatar?: string;
    avatar_not?: string;
    avatar_in: string[];
    avatar_not_in: string[];
    avatar_lt?: string;
    avatar_lte?: string;
    avatar_gt?: string;
    avatar_gte?: string;
    avatar_contains?: string;
    avatar_not_contains?: string;
    avatar_starts_with?: string;
    avatar_not_starts_with?: string;
    avatar_ends_with?: string;
    avatar_not_ends_with?: string;
    phone?: string;
    phone_not?: string;
    phone_in: string[];
    phone_not_in: string[];
    phone_lt?: string;
    phone_lte?: string;
    phone_gt?: string;
    phone_gte?: string;
    phone_contains?: string;
    phone_not_contains?: string;
    phone_starts_with?: string;
    phone_not_starts_with?: string;
    phone_ends_with?: string;
    phone_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in: string[];
    email_not_in: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    sex?: number;
    sex_not?: number;
    sex_in: number[];
    sex_not_in: number[];
    sex_lt?: number;
    sex_lte?: number;
    sex_gt?: number;
    sex_gte?: number;
    locked?: number;
    locked_not?: number;
    locked_in: number[];
    locked_not_in: number[];
    locked_lt?: number;
    locked_lte?: number;
    locked_gt?: number;
    locked_gte?: number;
    ctime?: DateTime;
    ctime_not?: DateTime;
    ctime_in: DateTime[];
    ctime_not_in: DateTime[];
    ctime_lt?: DateTime;
    ctime_lte?: DateTime;
    ctime_gt?: DateTime;
    ctime_gte?: DateTime;
}

export class UserWhereUniqueInput {
    user_id?: string;
    username?: string;
    phone?: string;
}

export interface Node {
    id: string;
}

export class AggregateLog {
    count: number;
}

export class AggregateOrgainization {
    count: number;
}

export class AggregatePermission {
    count: number;
}

export class AggregateRole {
    count: number;
}

export class AggregateRolePermission {
    count: number;
}

export class AggregateSystem {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class AggregateUserOrgainization {
    count: number;
}

export class AggregateUserPermission {
    count: number;
}

export class AggregateUserRole {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Log {
    log_id: string;
    description?: string;
    username: string;
    start_time: number;
    spend_time: number;
    basepath: string;
    uri: string;
    url: string;
    method: string;
    parameter: string;
    user_agent?: string;
    ip?: string;
    result?: string;
    permission?: string;
}

export class LogConnection {
    pageInfo: PageInfo;
    edges?: LogEdge[];
    aggregate: AggregateLog;
}

export class LogEdge {
    node: Log;
    cursor: string;
}

export class LogPreviousValues {
    log_id: string;
    description?: string;
    username: string;
    start_time: number;
    spend_time: number;
    basepath: string;
    uri: string;
    url: string;
    method: string;
    parameter: string;
    user_agent?: string;
    ip?: string;
    result?: string;
    permission?: string;
}

export class LogSubscriptionPayload {
    mutation: MutationType;
    node?: Log;
    updatedFields: string[];
    previousValues?: LogPreviousValues;
}

export abstract class IMutation {
    abstract createLog(data: LogCreateInput): Log | Promise<Log>;
    abstract createOrgainization(data: OrgainizationCreateInput): Orgainization | Promise<Orgainization>;
    abstract createPermission(data: PermissionCreateInput): Permission | Promise<Permission>;
    abstract createRolePermission(data: RolePermissionCreateInput): RolePermission | Promise<RolePermission>;
    abstract createRole(data: RoleCreateInput): Role | Promise<Role>;
    abstract createSystem(data: SystemCreateInput): System | Promise<System>;
    abstract createUserOrgainization(data: UserOrgainizationCreateInput): UserOrgainization | Promise<UserOrgainization>;
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract createUserPermission(data: UserPermissionCreateInput): UserPermission | Promise<UserPermission>;
    abstract createUserRole(data: UserRoleCreateInput): UserRole | Promise<UserRole>;
    abstract updateLog(data: LogUpdateInput, where: LogWhereUniqueInput): Log | Promise<Log>;
    abstract updateOrgainization(data: OrgainizationUpdateInput, where: OrgainizationWhereUniqueInput): Orgainization | Promise<Orgainization>;
    abstract updatePermission(data: PermissionUpdateInput, where: PermissionWhereUniqueInput): Permission | Promise<Permission>;
    abstract updateRolePermission(data: RolePermissionUpdateInput, where: RolePermissionWhereUniqueInput): RolePermission | Promise<RolePermission>;
    abstract updateRole(data: RoleUpdateInput, where: RoleWhereUniqueInput): Role | Promise<Role>;
    abstract updateSystem(data: SystemUpdateInput, where: SystemWhereUniqueInput): System | Promise<System>;
    abstract updateUserOrgainization(data: UserOrgainizationUpdateInput, where: UserOrgainizationWhereUniqueInput): UserOrgainization | Promise<UserOrgainization>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract updateUserPermission(data: UserPermissionUpdateInput, where: UserPermissionWhereUniqueInput): UserPermission | Promise<UserPermission>;
    abstract updateUserRole(data: UserRoleUpdateInput, where: UserRoleWhereUniqueInput): UserRole | Promise<UserRole>;
    abstract deleteLog(where: LogWhereUniqueInput): Log | Promise<Log>;
    abstract deleteOrgainization(where: OrgainizationWhereUniqueInput): Orgainization | Promise<Orgainization>;
    abstract deletePermission(where: PermissionWhereUniqueInput): Permission | Promise<Permission>;
    abstract deleteRolePermission(where: RolePermissionWhereUniqueInput): RolePermission | Promise<RolePermission>;
    abstract deleteRole(where: RoleWhereUniqueInput): Role | Promise<Role>;
    abstract deleteSystem(where: SystemWhereUniqueInput): System | Promise<System>;
    abstract deleteUserOrgainization(where: UserOrgainizationWhereUniqueInput): UserOrgainization | Promise<UserOrgainization>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteUserPermission(where: UserPermissionWhereUniqueInput): UserPermission | Promise<UserPermission>;
    abstract deleteUserRole(where: UserRoleWhereUniqueInput): UserRole | Promise<UserRole>;
    abstract upsertLog(where: LogWhereUniqueInput, create: LogCreateInput, update: LogUpdateInput): Log | Promise<Log>;
    abstract upsertOrgainization(where: OrgainizationWhereUniqueInput, create: OrgainizationCreateInput, update: OrgainizationUpdateInput): Orgainization | Promise<Orgainization>;
    abstract upsertPermission(where: PermissionWhereUniqueInput, create: PermissionCreateInput, update: PermissionUpdateInput): Permission | Promise<Permission>;
    abstract upsertRolePermission(where: RolePermissionWhereUniqueInput, create: RolePermissionCreateInput, update: RolePermissionUpdateInput): RolePermission | Promise<RolePermission>;
    abstract upsertRole(where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput): Role | Promise<Role>;
    abstract upsertSystem(where: SystemWhereUniqueInput, create: SystemCreateInput, update: SystemUpdateInput): System | Promise<System>;
    abstract upsertUserOrgainization(where: UserOrgainizationWhereUniqueInput, create: UserOrgainizationCreateInput, update: UserOrgainizationUpdateInput): UserOrgainization | Promise<UserOrgainization>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract upsertUserPermission(where: UserPermissionWhereUniqueInput, create: UserPermissionCreateInput, update: UserPermissionUpdateInput): UserPermission | Promise<UserPermission>;
    abstract upsertUserRole(where: UserRoleWhereUniqueInput, create: UserRoleCreateInput, update: UserRoleUpdateInput): UserRole | Promise<UserRole>;
    abstract updateManyLogs(data: LogUpdateManyMutationInput, where?: LogWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyOrgainizations(data: OrgainizationUpdateManyMutationInput, where?: OrgainizationWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyPermissions(data: PermissionUpdateManyMutationInput, where?: PermissionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyRolePermissions(data: RolePermissionUpdateManyMutationInput, where?: RolePermissionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyRoles(data: RoleUpdateManyMutationInput, where?: RoleWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManySystems(data: SystemUpdateManyMutationInput, where?: SystemWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyUserOrgainizations(data: UserOrgainizationUpdateManyMutationInput, where?: UserOrgainizationWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyUserPermissions(data: UserPermissionUpdateManyMutationInput, where?: UserPermissionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyUserRoles(data: UserRoleUpdateManyMutationInput, where?: UserRoleWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyLogs(where?: LogWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyOrgainizations(where?: OrgainizationWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyPermissions(where?: PermissionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyRolePermissions(where?: RolePermissionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyRoles(where?: RoleWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManySystems(where?: SystemWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUserOrgainizations(where?: UserOrgainizationWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUserPermissions(where?: UserPermissionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUserRoles(where?: UserRoleWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract executeRaw(database?: PrismaDatabase, query: string): Json | Promise<Json>;
}

export class Orgainization {
    orgainization_id: string;
    pid?: number;
    name?: string;
    description?: string;
    ctime: DateTime;
}

export class OrgainizationConnection {
    pageInfo: PageInfo;
    edges?: OrgainizationEdge[];
    aggregate: AggregateOrgainization;
}

export class OrgainizationEdge {
    node: Orgainization;
    cursor: string;
}

export class OrgainizationPreviousValues {
    orgainization_id: string;
    pid?: number;
    name?: string;
    description?: string;
    ctime: DateTime;
}

export class OrgainizationSubscriptionPayload {
    mutation: MutationType;
    node?: Orgainization;
    updatedFields: string[];
    previousValues?: OrgainizationPreviousValues;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Permission {
    permission_id: string;
    system_id: number;
    pid?: number;
    name: string;
    type: number;
    permission_value?: string;
    uri?: string;
    icon?: string;
    status: number;
    ctime: DateTime;
    orders?: number;
}

export class PermissionConnection {
    pageInfo: PageInfo;
    edges?: PermissionEdge[];
    aggregate: AggregatePermission;
}

export class PermissionEdge {
    node: Permission;
    cursor: string;
}

export class PermissionPreviousValues {
    permission_id: string;
    system_id: number;
    pid?: number;
    name: string;
    type: number;
    permission_value?: string;
    uri?: string;
    icon?: string;
    status: number;
    ctime: DateTime;
    orders?: number;
}

export class PermissionSubscriptionPayload {
    mutation: MutationType;
    node?: Permission;
    updatedFields: string[];
    previousValues?: PermissionPreviousValues;
}

export abstract class IQuery {
    abstract logs(where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Log[] | Promise<Log[]>;
    abstract orgainizations(where?: OrgainizationWhereInput, orderBy?: OrgainizationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Orgainization[] | Promise<Orgainization[]>;
    abstract permissions(where?: PermissionWhereInput, orderBy?: PermissionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Permission[] | Promise<Permission[]>;
    abstract rolePermissions(where?: RolePermissionWhereInput, orderBy?: RolePermissionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): RolePermission[] | Promise<RolePermission[]>;
    abstract roles(where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Role[] | Promise<Role[]>;
    abstract systems(where?: SystemWhereInput, orderBy?: SystemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): System[] | Promise<System[]>;
    abstract userOrgainizations(where?: UserOrgainizationWhereInput, orderBy?: UserOrgainizationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserOrgainization[] | Promise<UserOrgainization[]>;
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract userPermissions(where?: UserPermissionWhereInput, orderBy?: UserPermissionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserPermission[] | Promise<UserPermission[]>;
    abstract userRoles(where?: UserRoleWhereInput, orderBy?: UserRoleOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserRole[] | Promise<UserRole[]>;
    abstract log(where: LogWhereUniqueInput): Log | Promise<Log>;
    abstract orgainization(where: OrgainizationWhereUniqueInput): Orgainization | Promise<Orgainization>;
    abstract permission(where: PermissionWhereUniqueInput): Permission | Promise<Permission>;
    abstract rolePermission(where: RolePermissionWhereUniqueInput): RolePermission | Promise<RolePermission>;
    abstract role(where: RoleWhereUniqueInput): Role | Promise<Role>;
    abstract system(where: SystemWhereUniqueInput): System | Promise<System>;
    abstract userOrgainization(where: UserOrgainizationWhereUniqueInput): UserOrgainization | Promise<UserOrgainization>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract userPermission(where: UserPermissionWhereUniqueInput): UserPermission | Promise<UserPermission>;
    abstract userRole(where: UserRoleWhereUniqueInput): UserRole | Promise<UserRole>;
    abstract logsConnection(where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): LogConnection | Promise<LogConnection>;
    abstract orgainizationsConnection(where?: OrgainizationWhereInput, orderBy?: OrgainizationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): OrgainizationConnection | Promise<OrgainizationConnection>;
    abstract permissionsConnection(where?: PermissionWhereInput, orderBy?: PermissionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PermissionConnection | Promise<PermissionConnection>;
    abstract rolePermissionsConnection(where?: RolePermissionWhereInput, orderBy?: RolePermissionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): RolePermissionConnection | Promise<RolePermissionConnection>;
    abstract rolesConnection(where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): RoleConnection | Promise<RoleConnection>;
    abstract systemsConnection(where?: SystemWhereInput, orderBy?: SystemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): SystemConnection | Promise<SystemConnection>;
    abstract userOrgainizationsConnection(where?: UserOrgainizationWhereInput, orderBy?: UserOrgainizationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserOrgainizationConnection | Promise<UserOrgainizationConnection>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract userPermissionsConnection(where?: UserPermissionWhereInput, orderBy?: UserPermissionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserPermissionConnection | Promise<UserPermissionConnection>;
    abstract userRolesConnection(where?: UserRoleWhereInput, orderBy?: UserRoleOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserRoleConnection | Promise<UserRoleConnection>;
    abstract node(id: string): Node | Promise<Node>;
    abstract temp__(): boolean | Promise<boolean>;
}

export class Role {
    role_id: string;
    name?: string;
    title?: string;
    description?: string;
    ctime: DateTime;
    orders?: number;
}

export class RoleConnection {
    pageInfo: PageInfo;
    edges?: RoleEdge[];
    aggregate: AggregateRole;
}

export class RoleEdge {
    node: Role;
    cursor: string;
}

export class RolePermission {
    role_permission_id: string;
    role_id?: number;
    permission_id?: number;
}

export class RolePermissionConnection {
    pageInfo: PageInfo;
    edges?: RolePermissionEdge[];
    aggregate: AggregateRolePermission;
}

export class RolePermissionEdge {
    node: RolePermission;
    cursor: string;
}

export class RolePermissionPreviousValues {
    role_permission_id: string;
    role_id?: number;
    permission_id?: number;
}

export class RolePermissionSubscriptionPayload {
    mutation: MutationType;
    node?: RolePermission;
    updatedFields: string[];
    previousValues?: RolePermissionPreviousValues;
}

export class RolePreviousValues {
    role_id: string;
    name?: string;
    title?: string;
    description?: string;
    ctime: DateTime;
    orders?: number;
}

export class RoleSubscriptionPayload {
    mutation: MutationType;
    node?: Role;
    updatedFields: string[];
    previousValues?: RolePreviousValues;
}

export abstract class ISubscription {
    abstract log(where?: LogSubscriptionWhereInput): LogSubscriptionPayload | Promise<LogSubscriptionPayload>;
    abstract orgainization(where?: OrgainizationSubscriptionWhereInput): OrgainizationSubscriptionPayload | Promise<OrgainizationSubscriptionPayload>;
    abstract permission(where?: PermissionSubscriptionWhereInput): PermissionSubscriptionPayload | Promise<PermissionSubscriptionPayload>;
    abstract rolePermission(where?: RolePermissionSubscriptionWhereInput): RolePermissionSubscriptionPayload | Promise<RolePermissionSubscriptionPayload>;
    abstract role(where?: RoleSubscriptionWhereInput): RoleSubscriptionPayload | Promise<RoleSubscriptionPayload>;
    abstract system(where?: SystemSubscriptionWhereInput): SystemSubscriptionPayload | Promise<SystemSubscriptionPayload>;
    abstract userOrgainization(where?: UserOrgainizationSubscriptionWhereInput): UserOrgainizationSubscriptionPayload | Promise<UserOrgainizationSubscriptionPayload>;
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
    abstract userPermission(where?: UserPermissionSubscriptionWhereInput): UserPermissionSubscriptionPayload | Promise<UserPermissionSubscriptionPayload>;
    abstract userRole(where?: UserRoleSubscriptionWhereInput): UserRoleSubscriptionPayload | Promise<UserRoleSubscriptionPayload>;
}

export class System {
    system_id: string;
    icon?: string;
    banner?: string;
    theme?: string;
    basepath?: string;
    status: number;
    name?: string;
    title?: string;
    description?: string;
    ctime: DateTime;
    orders?: number;
}

export class SystemConnection {
    pageInfo: PageInfo;
    edges?: SystemEdge[];
    aggregate: AggregateSystem;
}

export class SystemEdge {
    node: System;
    cursor: string;
}

export class SystemPreviousValues {
    system_id: string;
    icon?: string;
    banner?: string;
    theme?: string;
    basepath?: string;
    status: number;
    name?: string;
    title?: string;
    description?: string;
    ctime: DateTime;
    orders?: number;
}

export class SystemSubscriptionPayload {
    mutation: MutationType;
    node?: System;
    updatedFields: string[];
    previousValues?: SystemPreviousValues;
}

export class User {
    user_id: string;
    username?: string;
    password: string;
    salt?: string;
    realname?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    sex: number;
    locked: number;
    ctime: DateTime;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges?: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserOrgainization {
    user_orgainization_id: string;
    user_id?: number;
    orgainization_id?: number;
}

export class UserOrgainizationConnection {
    pageInfo: PageInfo;
    edges?: UserOrgainizationEdge[];
    aggregate: AggregateUserOrgainization;
}

export class UserOrgainizationEdge {
    node: UserOrgainization;
    cursor: string;
}

export class UserOrgainizationPreviousValues {
    user_orgainization_id: string;
    user_id?: number;
    orgainization_id?: number;
}

export class UserOrgainizationSubscriptionPayload {
    mutation: MutationType;
    node?: UserOrgainization;
    updatedFields: string[];
    previousValues?: UserOrgainizationPreviousValues;
}

export class UserPermission {
    user_permission_id: string;
    user_id: number;
    permission_id: number;
    type: number;
}

export class UserPermissionConnection {
    pageInfo: PageInfo;
    edges?: UserPermissionEdge[];
    aggregate: AggregateUserPermission;
}

export class UserPermissionEdge {
    node: UserPermission;
    cursor: string;
}

export class UserPermissionPreviousValues {
    user_permission_id: string;
    user_id: number;
    permission_id: number;
    type: number;
}

export class UserPermissionSubscriptionPayload {
    mutation: MutationType;
    node?: UserPermission;
    updatedFields: string[];
    previousValues?: UserPermissionPreviousValues;
}

export class UserPreviousValues {
    user_id: string;
    username?: string;
    password: string;
    salt?: string;
    realname?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    sex: number;
    locked: number;
    ctime: DateTime;
}

export class UserRole {
    user_role_id: string;
    user_id: number;
    role_id: number;
}

export class UserRoleConnection {
    pageInfo: PageInfo;
    edges?: UserRoleEdge[];
    aggregate: AggregateUserRole;
}

export class UserRoleEdge {
    node: UserRole;
    cursor: string;
}

export class UserRolePreviousValues {
    user_role_id: string;
    user_id: number;
    role_id: number;
}

export class UserRoleSubscriptionPayload {
    mutation: MutationType;
    node?: UserRole;
    updatedFields: string[];
    previousValues?: UserRolePreviousValues;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Json = any;
export type Long = any;
