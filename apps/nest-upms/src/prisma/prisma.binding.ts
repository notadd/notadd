import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    logs: <T = Array<Log | null>>(args: { where?: LogWhereInput | null, orderBy?: LogOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orgainizations: <T = Array<Orgainization | null>>(args: { where?: OrgainizationWhereInput | null, orderBy?: OrgainizationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    permissions: <T = Array<Permission | null>>(args: { where?: PermissionWhereInput | null, orderBy?: PermissionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolePermissions: <T = Array<RolePermission | null>>(args: { where?: RolePermissionWhereInput | null, orderBy?: RolePermissionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Array<Role | null>>(args: { where?: RoleWhereInput | null, orderBy?: RoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systems: <T = Array<System | null>>(args: { where?: SystemWhereInput | null, orderBy?: SystemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userOrgainizations: <T = Array<UserOrgainization | null>>(args: { where?: UserOrgainizationWhereInput | null, orderBy?: UserOrgainizationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userPermissions: <T = Array<UserPermission | null>>(args: { where?: UserPermissionWhereInput | null, orderBy?: UserPermissionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRoles: <T = Array<UserRole | null>>(args: { where?: UserRoleWhereInput | null, orderBy?: UserRoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    log: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    orgainization: <T = Orgainization | null>(args: { where: OrgainizationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    permission: <T = Permission | null>(args: { where: PermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    rolePermission: <T = RolePermission | null>(args: { where: RolePermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    system: <T = System | null>(args: { where: SystemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    userOrgainization: <T = UserOrgainization | null>(args: { where: UserOrgainizationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    userPermission: <T = UserPermission | null>(args: { where: UserPermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    userRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    logsConnection: <T = LogConnection>(args: { where?: LogWhereInput | null, orderBy?: LogOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orgainizationsConnection: <T = OrgainizationConnection>(args: { where?: OrgainizationWhereInput | null, orderBy?: OrgainizationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    permissionsConnection: <T = PermissionConnection>(args: { where?: PermissionWhereInput | null, orderBy?: PermissionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolePermissionsConnection: <T = RolePermissionConnection>(args: { where?: RolePermissionWhereInput | null, orderBy?: RolePermissionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput | null, orderBy?: RoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemsConnection: <T = SystemConnection>(args: { where?: SystemWhereInput | null, orderBy?: SystemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userOrgainizationsConnection: <T = UserOrgainizationConnection>(args: { where?: UserOrgainizationWhereInput | null, orderBy?: UserOrgainizationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userPermissionsConnection: <T = UserPermissionConnection>(args: { where?: UserPermissionWhereInput | null, orderBy?: UserPermissionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRolesConnection: <T = UserRoleConnection>(args: { where?: UserRoleWhereInput | null, orderBy?: UserRoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createLog: <T = Log>(args: { data: LogCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrgainization: <T = Orgainization>(args: { data: OrgainizationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPermission: <T = Permission>(args: { data: PermissionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRolePermission: <T = RolePermission>(args: { data: RolePermissionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSystem: <T = System>(args: { data: SystemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserOrgainization: <T = UserOrgainization>(args: { data: UserOrgainizationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserPermission: <T = UserPermission>(args: { data: UserPermissionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserRole: <T = UserRole>(args: { data: UserRoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLog: <T = Log | null>(args: { data: LogUpdateInput, where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateOrgainization: <T = Orgainization | null>(args: { data: OrgainizationUpdateInput, where: OrgainizationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePermission: <T = Permission | null>(args: { data: PermissionUpdateInput, where: PermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRolePermission: <T = RolePermission | null>(args: { data: RolePermissionUpdateInput, where: RolePermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSystem: <T = System | null>(args: { data: SystemUpdateInput, where: SystemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUserOrgainization: <T = UserOrgainization | null>(args: { data: UserOrgainizationUpdateInput, where: UserOrgainizationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUserPermission: <T = UserPermission | null>(args: { data: UserPermissionUpdateInput, where: UserPermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUserRole: <T = UserRole | null>(args: { data: UserRoleUpdateInput, where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLog: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteOrgainization: <T = Orgainization | null>(args: { where: OrgainizationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePermission: <T = Permission | null>(args: { where: PermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRolePermission: <T = RolePermission | null>(args: { where: RolePermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSystem: <T = System | null>(args: { where: SystemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUserOrgainization: <T = UserOrgainization | null>(args: { where: UserOrgainizationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUserPermission: <T = UserPermission | null>(args: { where: UserPermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUserRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertLog: <T = Log>(args: { where: LogWhereUniqueInput, create: LogCreateInput, update: LogUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrgainization: <T = Orgainization>(args: { where: OrgainizationWhereUniqueInput, create: OrgainizationCreateInput, update: OrgainizationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPermission: <T = Permission>(args: { where: PermissionWhereUniqueInput, create: PermissionCreateInput, update: PermissionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRolePermission: <T = RolePermission>(args: { where: RolePermissionWhereUniqueInput, create: RolePermissionCreateInput, update: RolePermissionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSystem: <T = System>(args: { where: SystemWhereUniqueInput, create: SystemCreateInput, update: SystemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserOrgainization: <T = UserOrgainization>(args: { where: UserOrgainizationWhereUniqueInput, create: UserOrgainizationCreateInput, update: UserOrgainizationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserPermission: <T = UserPermission>(args: { where: UserPermissionWhereUniqueInput, create: UserPermissionCreateInput, update: UserPermissionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserRole: <T = UserRole>(args: { where: UserRoleWhereUniqueInput, create: UserRoleCreateInput, update: UserRoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLogs: <T = BatchPayload>(args: { data: LogUpdateManyMutationInput, where?: LogWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrgainizations: <T = BatchPayload>(args: { data: OrgainizationUpdateManyMutationInput, where?: OrgainizationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPermissions: <T = BatchPayload>(args: { data: PermissionUpdateManyMutationInput, where?: PermissionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRolePermissions: <T = BatchPayload>(args: { data: RolePermissionUpdateManyMutationInput, where?: RolePermissionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateManyMutationInput, where?: RoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySystems: <T = BatchPayload>(args: { data: SystemUpdateManyMutationInput, where?: SystemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserOrgainizations: <T = BatchPayload>(args: { data: UserOrgainizationUpdateManyMutationInput, where?: UserOrgainizationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserPermissions: <T = BatchPayload>(args: { data: UserPermissionUpdateManyMutationInput, where?: UserPermissionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserRoles: <T = BatchPayload>(args: { data: UserRoleUpdateManyMutationInput, where?: UserRoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLogs: <T = BatchPayload>(args: { where?: LogWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrgainizations: <T = BatchPayload>(args: { where?: OrgainizationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPermissions: <T = BatchPayload>(args: { where?: PermissionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRolePermissions: <T = BatchPayload>(args: { where?: RolePermissionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySystems: <T = BatchPayload>(args: { where?: SystemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserOrgainizations: <T = BatchPayload>(args: { where?: UserOrgainizationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserPermissions: <T = BatchPayload>(args: { where?: UserPermissionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserRoles: <T = BatchPayload>(args: { where?: UserRoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    log: <T = LogSubscriptionPayload | null>(args: { where?: LogSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    orgainization: <T = OrgainizationSubscriptionPayload | null>(args: { where?: OrgainizationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    permission: <T = PermissionSubscriptionPayload | null>(args: { where?: PermissionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    rolePermission: <T = RolePermissionSubscriptionPayload | null>(args: { where?: RolePermissionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    system: <T = SystemSubscriptionPayload | null>(args: { where?: SystemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    userOrgainization: <T = UserOrgainizationSubscriptionPayload | null>(args: { where?: UserOrgainizationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    userPermission: <T = UserPermissionSubscriptionPayload | null>(args: { where?: UserPermissionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    userRole: <T = UserRoleSubscriptionPayload | null>(args: { where?: UserRoleSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Log: (where?: LogWhereInput) => Promise<boolean>
  Orgainization: (where?: OrgainizationWhereInput) => Promise<boolean>
  Permission: (where?: PermissionWhereInput) => Promise<boolean>
  RolePermission: (where?: RolePermissionWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
  System: (where?: SystemWhereInput) => Promise<boolean>
  UserOrgainization: (where?: UserOrgainizationWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  UserPermission: (where?: UserPermissionWhereInput) => Promise<boolean>
  UserRole: (where?: UserRoleWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateLog {
  count: Int!
}

type AggregateOrgainization {
  count: Int!
}

type AggregatePermission {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateRolePermission {
  count: Int!
}

type AggregateSystem {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserOrgainization {
  count: Int!
}

type AggregateUserPermission {
  count: Int!
}

type AggregateUserRole {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""Raw JSON value"""
scalar Json

type Log {
  log_id: ID!
  description: String
  username: String!
  start_time: Int!
  spend_time: Int!
  basepath: String!
  uri: String!
  url: String!
  method: String!
  parameter: String!
  user_agent: String
  ip: String
  result: String
  permission: String
}

"""A connection to a list of items."""
type LogConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  log_id: ID
  description: String
  username: String!
  start_time: Int!
  spend_time: Int!
  basepath: String!
  uri: String!
  url: String!
  method: String!
  parameter: String!
  user_agent: String
  ip: String
  result: String
  permission: String
}

"""An edge in a connection."""
type LogEdge {
  """The item at the end of the edge."""
  node: Log!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LogOrderByInput {
  log_id_ASC
  log_id_DESC
  description_ASC
  description_DESC
  username_ASC
  username_DESC
  start_time_ASC
  start_time_DESC
  spend_time_ASC
  spend_time_DESC
  basepath_ASC
  basepath_DESC
  uri_ASC
  uri_DESC
  url_ASC
  url_DESC
  method_ASC
  method_DESC
  parameter_ASC
  parameter_DESC
  user_agent_ASC
  user_agent_DESC
  ip_ASC
  ip_DESC
  result_ASC
  result_DESC
  permission_ASC
  permission_DESC
}

type LogPreviousValues {
  log_id: ID!
  description: String
  username: String!
  start_time: Int!
  spend_time: Int!
  basepath: String!
  uri: String!
  url: String!
  method: String!
  parameter: String!
  user_agent: String
  ip: String
  result: String
  permission: String
}

type LogSubscriptionPayload {
  mutation: MutationType!
  node: Log
  updatedFields: [String!]
  previousValues: LogPreviousValues
}

input LogSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LogSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LogWhereInput
}

input LogUpdateInput {
  description: String
  username: String
  start_time: Int
  spend_time: Int
  basepath: String
  uri: String
  url: String
  method: String
  parameter: String
  user_agent: String
  ip: String
  result: String
  permission: String
}

input LogUpdateManyMutationInput {
  description: String
  username: String
  start_time: Int
  spend_time: Int
  basepath: String
  uri: String
  url: String
  method: String
  parameter: String
  user_agent: String
  ip: String
  result: String
  permission: String
}

input LogWhereInput {
  """Logical AND on all given filters."""
  AND: [LogWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogWhereInput!]
  log_id: ID

  """All values that are not equal to given value."""
  log_id_not: ID

  """All values that are contained in given list."""
  log_id_in: [ID!]

  """All values that are not contained in given list."""
  log_id_not_in: [ID!]

  """All values less than the given value."""
  log_id_lt: ID

  """All values less than or equal the given value."""
  log_id_lte: ID

  """All values greater than the given value."""
  log_id_gt: ID

  """All values greater than or equal the given value."""
  log_id_gte: ID

  """All values containing the given string."""
  log_id_contains: ID

  """All values not containing the given string."""
  log_id_not_contains: ID

  """All values starting with the given string."""
  log_id_starts_with: ID

  """All values not starting with the given string."""
  log_id_not_starts_with: ID

  """All values ending with the given string."""
  log_id_ends_with: ID

  """All values not ending with the given string."""
  log_id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  start_time: Int

  """All values that are not equal to given value."""
  start_time_not: Int

  """All values that are contained in given list."""
  start_time_in: [Int!]

  """All values that are not contained in given list."""
  start_time_not_in: [Int!]

  """All values less than the given value."""
  start_time_lt: Int

  """All values less than or equal the given value."""
  start_time_lte: Int

  """All values greater than the given value."""
  start_time_gt: Int

  """All values greater than or equal the given value."""
  start_time_gte: Int
  spend_time: Int

  """All values that are not equal to given value."""
  spend_time_not: Int

  """All values that are contained in given list."""
  spend_time_in: [Int!]

  """All values that are not contained in given list."""
  spend_time_not_in: [Int!]

  """All values less than the given value."""
  spend_time_lt: Int

  """All values less than or equal the given value."""
  spend_time_lte: Int

  """All values greater than the given value."""
  spend_time_gt: Int

  """All values greater than or equal the given value."""
  spend_time_gte: Int
  basepath: String

  """All values that are not equal to given value."""
  basepath_not: String

  """All values that are contained in given list."""
  basepath_in: [String!]

  """All values that are not contained in given list."""
  basepath_not_in: [String!]

  """All values less than the given value."""
  basepath_lt: String

  """All values less than or equal the given value."""
  basepath_lte: String

  """All values greater than the given value."""
  basepath_gt: String

  """All values greater than or equal the given value."""
  basepath_gte: String

  """All values containing the given string."""
  basepath_contains: String

  """All values not containing the given string."""
  basepath_not_contains: String

  """All values starting with the given string."""
  basepath_starts_with: String

  """All values not starting with the given string."""
  basepath_not_starts_with: String

  """All values ending with the given string."""
  basepath_ends_with: String

  """All values not ending with the given string."""
  basepath_not_ends_with: String
  uri: String

  """All values that are not equal to given value."""
  uri_not: String

  """All values that are contained in given list."""
  uri_in: [String!]

  """All values that are not contained in given list."""
  uri_not_in: [String!]

  """All values less than the given value."""
  uri_lt: String

  """All values less than or equal the given value."""
  uri_lte: String

  """All values greater than the given value."""
  uri_gt: String

  """All values greater than or equal the given value."""
  uri_gte: String

  """All values containing the given string."""
  uri_contains: String

  """All values not containing the given string."""
  uri_not_contains: String

  """All values starting with the given string."""
  uri_starts_with: String

  """All values not starting with the given string."""
  uri_not_starts_with: String

  """All values ending with the given string."""
  uri_ends_with: String

  """All values not ending with the given string."""
  uri_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  method: String

  """All values that are not equal to given value."""
  method_not: String

  """All values that are contained in given list."""
  method_in: [String!]

  """All values that are not contained in given list."""
  method_not_in: [String!]

  """All values less than the given value."""
  method_lt: String

  """All values less than or equal the given value."""
  method_lte: String

  """All values greater than the given value."""
  method_gt: String

  """All values greater than or equal the given value."""
  method_gte: String

  """All values containing the given string."""
  method_contains: String

  """All values not containing the given string."""
  method_not_contains: String

  """All values starting with the given string."""
  method_starts_with: String

  """All values not starting with the given string."""
  method_not_starts_with: String

  """All values ending with the given string."""
  method_ends_with: String

  """All values not ending with the given string."""
  method_not_ends_with: String
  parameter: String

  """All values that are not equal to given value."""
  parameter_not: String

  """All values that are contained in given list."""
  parameter_in: [String!]

  """All values that are not contained in given list."""
  parameter_not_in: [String!]

  """All values less than the given value."""
  parameter_lt: String

  """All values less than or equal the given value."""
  parameter_lte: String

  """All values greater than the given value."""
  parameter_gt: String

  """All values greater than or equal the given value."""
  parameter_gte: String

  """All values containing the given string."""
  parameter_contains: String

  """All values not containing the given string."""
  parameter_not_contains: String

  """All values starting with the given string."""
  parameter_starts_with: String

  """All values not starting with the given string."""
  parameter_not_starts_with: String

  """All values ending with the given string."""
  parameter_ends_with: String

  """All values not ending with the given string."""
  parameter_not_ends_with: String
  user_agent: String

  """All values that are not equal to given value."""
  user_agent_not: String

  """All values that are contained in given list."""
  user_agent_in: [String!]

  """All values that are not contained in given list."""
  user_agent_not_in: [String!]

  """All values less than the given value."""
  user_agent_lt: String

  """All values less than or equal the given value."""
  user_agent_lte: String

  """All values greater than the given value."""
  user_agent_gt: String

  """All values greater than or equal the given value."""
  user_agent_gte: String

  """All values containing the given string."""
  user_agent_contains: String

  """All values not containing the given string."""
  user_agent_not_contains: String

  """All values starting with the given string."""
  user_agent_starts_with: String

  """All values not starting with the given string."""
  user_agent_not_starts_with: String

  """All values ending with the given string."""
  user_agent_ends_with: String

  """All values not ending with the given string."""
  user_agent_not_ends_with: String
  ip: String

  """All values that are not equal to given value."""
  ip_not: String

  """All values that are contained in given list."""
  ip_in: [String!]

  """All values that are not contained in given list."""
  ip_not_in: [String!]

  """All values less than the given value."""
  ip_lt: String

  """All values less than or equal the given value."""
  ip_lte: String

  """All values greater than the given value."""
  ip_gt: String

  """All values greater than or equal the given value."""
  ip_gte: String

  """All values containing the given string."""
  ip_contains: String

  """All values not containing the given string."""
  ip_not_contains: String

  """All values starting with the given string."""
  ip_starts_with: String

  """All values not starting with the given string."""
  ip_not_starts_with: String

  """All values ending with the given string."""
  ip_ends_with: String

  """All values not ending with the given string."""
  ip_not_ends_with: String
  result: String

  """All values that are not equal to given value."""
  result_not: String

  """All values that are contained in given list."""
  result_in: [String!]

  """All values that are not contained in given list."""
  result_not_in: [String!]

  """All values less than the given value."""
  result_lt: String

  """All values less than or equal the given value."""
  result_lte: String

  """All values greater than the given value."""
  result_gt: String

  """All values greater than or equal the given value."""
  result_gte: String

  """All values containing the given string."""
  result_contains: String

  """All values not containing the given string."""
  result_not_contains: String

  """All values starting with the given string."""
  result_starts_with: String

  """All values not starting with the given string."""
  result_not_starts_with: String

  """All values ending with the given string."""
  result_ends_with: String

  """All values not ending with the given string."""
  result_not_ends_with: String
  permission: String

  """All values that are not equal to given value."""
  permission_not: String

  """All values that are contained in given list."""
  permission_in: [String!]

  """All values that are not contained in given list."""
  permission_not_in: [String!]

  """All values less than the given value."""
  permission_lt: String

  """All values less than or equal the given value."""
  permission_lte: String

  """All values greater than the given value."""
  permission_gt: String

  """All values greater than or equal the given value."""
  permission_gte: String

  """All values containing the given string."""
  permission_contains: String

  """All values not containing the given string."""
  permission_not_contains: String

  """All values starting with the given string."""
  permission_starts_with: String

  """All values not starting with the given string."""
  permission_not_starts_with: String

  """All values ending with the given string."""
  permission_ends_with: String

  """All values not ending with the given string."""
  permission_not_ends_with: String
}

input LogWhereUniqueInput {
  log_id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createLog(data: LogCreateInput!): Log!
  createOrgainization(data: OrgainizationCreateInput!): Orgainization!
  createPermission(data: PermissionCreateInput!): Permission!
  createRolePermission(data: RolePermissionCreateInput!): RolePermission!
  createRole(data: RoleCreateInput!): Role!
  createSystem(data: SystemCreateInput!): System!
  createUserOrgainization(data: UserOrgainizationCreateInput!): UserOrgainization!
  createUser(data: UserCreateInput!): User!
  createUserPermission(data: UserPermissionCreateInput!): UserPermission!
  createUserRole(data: UserRoleCreateInput!): UserRole!
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateOrgainization(data: OrgainizationUpdateInput!, where: OrgainizationWhereUniqueInput!): Orgainization
  updatePermission(data: PermissionUpdateInput!, where: PermissionWhereUniqueInput!): Permission
  updateRolePermission(data: RolePermissionUpdateInput!, where: RolePermissionWhereUniqueInput!): RolePermission
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateSystem(data: SystemUpdateInput!, where: SystemWhereUniqueInput!): System
  updateUserOrgainization(data: UserOrgainizationUpdateInput!, where: UserOrgainizationWhereUniqueInput!): UserOrgainization
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateUserPermission(data: UserPermissionUpdateInput!, where: UserPermissionWhereUniqueInput!): UserPermission
  updateUserRole(data: UserRoleUpdateInput!, where: UserRoleWhereUniqueInput!): UserRole
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteOrgainization(where: OrgainizationWhereUniqueInput!): Orgainization
  deletePermission(where: PermissionWhereUniqueInput!): Permission
  deleteRolePermission(where: RolePermissionWhereUniqueInput!): RolePermission
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteSystem(where: SystemWhereUniqueInput!): System
  deleteUserOrgainization(where: UserOrgainizationWhereUniqueInput!): UserOrgainization
  deleteUser(where: UserWhereUniqueInput!): User
  deleteUserPermission(where: UserPermissionWhereUniqueInput!): UserPermission
  deleteUserRole(where: UserRoleWhereUniqueInput!): UserRole
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  upsertOrgainization(where: OrgainizationWhereUniqueInput!, create: OrgainizationCreateInput!, update: OrgainizationUpdateInput!): Orgainization!
  upsertPermission(where: PermissionWhereUniqueInput!, create: PermissionCreateInput!, update: PermissionUpdateInput!): Permission!
  upsertRolePermission(where: RolePermissionWhereUniqueInput!, create: RolePermissionCreateInput!, update: RolePermissionUpdateInput!): RolePermission!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  upsertSystem(where: SystemWhereUniqueInput!, create: SystemCreateInput!, update: SystemUpdateInput!): System!
  upsertUserOrgainization(where: UserOrgainizationWhereUniqueInput!, create: UserOrgainizationCreateInput!, update: UserOrgainizationUpdateInput!): UserOrgainization!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertUserPermission(where: UserPermissionWhereUniqueInput!, create: UserPermissionCreateInput!, update: UserPermissionUpdateInput!): UserPermission!
  upsertUserRole(where: UserRoleWhereUniqueInput!, create: UserRoleCreateInput!, update: UserRoleUpdateInput!): UserRole!
  updateManyLogs(data: LogUpdateManyMutationInput!, where: LogWhereInput): BatchPayload!
  updateManyOrgainizations(data: OrgainizationUpdateManyMutationInput!, where: OrgainizationWhereInput): BatchPayload!
  updateManyPermissions(data: PermissionUpdateManyMutationInput!, where: PermissionWhereInput): BatchPayload!
  updateManyRolePermissions(data: RolePermissionUpdateManyMutationInput!, where: RolePermissionWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  updateManySystems(data: SystemUpdateManyMutationInput!, where: SystemWhereInput): BatchPayload!
  updateManyUserOrgainizations(data: UserOrgainizationUpdateManyMutationInput!, where: UserOrgainizationWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyUserPermissions(data: UserPermissionUpdateManyMutationInput!, where: UserPermissionWhereInput): BatchPayload!
  updateManyUserRoles(data: UserRoleUpdateManyMutationInput!, where: UserRoleWhereInput): BatchPayload!
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  deleteManyOrgainizations(where: OrgainizationWhereInput): BatchPayload!
  deleteManyPermissions(where: PermissionWhereInput): BatchPayload!
  deleteManyRolePermissions(where: RolePermissionWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  deleteManySystems(where: SystemWhereInput): BatchPayload!
  deleteManyUserOrgainizations(where: UserOrgainizationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyUserPermissions(where: UserPermissionWhereInput): BatchPayload!
  deleteManyUserRoles(where: UserRoleWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Orgainization {
  orgainization_id: ID!
  pid: Int
  name: String
  description: String
  ctime: DateTime!
}

"""A connection to a list of items."""
type OrgainizationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrgainizationEdge]!
  aggregate: AggregateOrgainization!
}

input OrgainizationCreateInput {
  orgainization_id: ID
  pid: Int
  name: String
  description: String
}

"""An edge in a connection."""
type OrgainizationEdge {
  """The item at the end of the edge."""
  node: Orgainization!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrgainizationOrderByInput {
  orgainization_id_ASC
  orgainization_id_DESC
  pid_ASC
  pid_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  ctime_ASC
  ctime_DESC
}

type OrgainizationPreviousValues {
  orgainization_id: ID!
  pid: Int
  name: String
  description: String
  ctime: DateTime!
}

type OrgainizationSubscriptionPayload {
  mutation: MutationType!
  node: Orgainization
  updatedFields: [String!]
  previousValues: OrgainizationPreviousValues
}

input OrgainizationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrgainizationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrgainizationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrgainizationSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrgainizationWhereInput
}

input OrgainizationUpdateInput {
  pid: Int
  name: String
  description: String
}

input OrgainizationUpdateManyMutationInput {
  pid: Int
  name: String
  description: String
}

input OrgainizationWhereInput {
  """Logical AND on all given filters."""
  AND: [OrgainizationWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrgainizationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrgainizationWhereInput!]
  orgainization_id: ID

  """All values that are not equal to given value."""
  orgainization_id_not: ID

  """All values that are contained in given list."""
  orgainization_id_in: [ID!]

  """All values that are not contained in given list."""
  orgainization_id_not_in: [ID!]

  """All values less than the given value."""
  orgainization_id_lt: ID

  """All values less than or equal the given value."""
  orgainization_id_lte: ID

  """All values greater than the given value."""
  orgainization_id_gt: ID

  """All values greater than or equal the given value."""
  orgainization_id_gte: ID

  """All values containing the given string."""
  orgainization_id_contains: ID

  """All values not containing the given string."""
  orgainization_id_not_contains: ID

  """All values starting with the given string."""
  orgainization_id_starts_with: ID

  """All values not starting with the given string."""
  orgainization_id_not_starts_with: ID

  """All values ending with the given string."""
  orgainization_id_ends_with: ID

  """All values not ending with the given string."""
  orgainization_id_not_ends_with: ID
  pid: Int

  """All values that are not equal to given value."""
  pid_not: Int

  """All values that are contained in given list."""
  pid_in: [Int!]

  """All values that are not contained in given list."""
  pid_not_in: [Int!]

  """All values less than the given value."""
  pid_lt: Int

  """All values less than or equal the given value."""
  pid_lte: Int

  """All values greater than the given value."""
  pid_gt: Int

  """All values greater than or equal the given value."""
  pid_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  ctime: DateTime

  """All values that are not equal to given value."""
  ctime_not: DateTime

  """All values that are contained in given list."""
  ctime_in: [DateTime!]

  """All values that are not contained in given list."""
  ctime_not_in: [DateTime!]

  """All values less than the given value."""
  ctime_lt: DateTime

  """All values less than or equal the given value."""
  ctime_lte: DateTime

  """All values greater than the given value."""
  ctime_gt: DateTime

  """All values greater than or equal the given value."""
  ctime_gte: DateTime
}

input OrgainizationWhereUniqueInput {
  orgainization_id: ID
  name: String
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Permission {
  permission_id: ID!
  system_id: Int!
  pid: Int
  name: String!
  type: Int!
  permission_value: String
  uri: String
  icon: String
  status: Int!
  ctime: DateTime!
  orders: Int
}

"""A connection to a list of items."""
type PermissionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PermissionEdge]!
  aggregate: AggregatePermission!
}

input PermissionCreateInput {
  permission_id: ID
  system_id: Int!
  pid: Int
  name: String!
  type: Int!
  permission_value: String
  uri: String
  icon: String
  status: Int!
  orders: Int
}

"""An edge in a connection."""
type PermissionEdge {
  """The item at the end of the edge."""
  node: Permission!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PermissionOrderByInput {
  permission_id_ASC
  permission_id_DESC
  system_id_ASC
  system_id_DESC
  pid_ASC
  pid_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  permission_value_ASC
  permission_value_DESC
  uri_ASC
  uri_DESC
  icon_ASC
  icon_DESC
  status_ASC
  status_DESC
  ctime_ASC
  ctime_DESC
  orders_ASC
  orders_DESC
}

type PermissionPreviousValues {
  permission_id: ID!
  system_id: Int!
  pid: Int
  name: String!
  type: Int!
  permission_value: String
  uri: String
  icon: String
  status: Int!
  ctime: DateTime!
  orders: Int
}

type PermissionSubscriptionPayload {
  mutation: MutationType!
  node: Permission
  updatedFields: [String!]
  previousValues: PermissionPreviousValues
}

input PermissionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PermissionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PermissionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PermissionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PermissionWhereInput
}

input PermissionUpdateInput {
  system_id: Int
  pid: Int
  name: String
  type: Int
  permission_value: String
  uri: String
  icon: String
  status: Int
  orders: Int
}

input PermissionUpdateManyMutationInput {
  system_id: Int
  pid: Int
  name: String
  type: Int
  permission_value: String
  uri: String
  icon: String
  status: Int
  orders: Int
}

input PermissionWhereInput {
  """Logical AND on all given filters."""
  AND: [PermissionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PermissionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PermissionWhereInput!]
  permission_id: ID

  """All values that are not equal to given value."""
  permission_id_not: ID

  """All values that are contained in given list."""
  permission_id_in: [ID!]

  """All values that are not contained in given list."""
  permission_id_not_in: [ID!]

  """All values less than the given value."""
  permission_id_lt: ID

  """All values less than or equal the given value."""
  permission_id_lte: ID

  """All values greater than the given value."""
  permission_id_gt: ID

  """All values greater than or equal the given value."""
  permission_id_gte: ID

  """All values containing the given string."""
  permission_id_contains: ID

  """All values not containing the given string."""
  permission_id_not_contains: ID

  """All values starting with the given string."""
  permission_id_starts_with: ID

  """All values not starting with the given string."""
  permission_id_not_starts_with: ID

  """All values ending with the given string."""
  permission_id_ends_with: ID

  """All values not ending with the given string."""
  permission_id_not_ends_with: ID
  system_id: Int

  """All values that are not equal to given value."""
  system_id_not: Int

  """All values that are contained in given list."""
  system_id_in: [Int!]

  """All values that are not contained in given list."""
  system_id_not_in: [Int!]

  """All values less than the given value."""
  system_id_lt: Int

  """All values less than or equal the given value."""
  system_id_lte: Int

  """All values greater than the given value."""
  system_id_gt: Int

  """All values greater than or equal the given value."""
  system_id_gte: Int
  pid: Int

  """All values that are not equal to given value."""
  pid_not: Int

  """All values that are contained in given list."""
  pid_in: [Int!]

  """All values that are not contained in given list."""
  pid_not_in: [Int!]

  """All values less than the given value."""
  pid_lt: Int

  """All values less than or equal the given value."""
  pid_lte: Int

  """All values greater than the given value."""
  pid_gt: Int

  """All values greater than or equal the given value."""
  pid_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  type: Int

  """All values that are not equal to given value."""
  type_not: Int

  """All values that are contained in given list."""
  type_in: [Int!]

  """All values that are not contained in given list."""
  type_not_in: [Int!]

  """All values less than the given value."""
  type_lt: Int

  """All values less than or equal the given value."""
  type_lte: Int

  """All values greater than the given value."""
  type_gt: Int

  """All values greater than or equal the given value."""
  type_gte: Int
  permission_value: String

  """All values that are not equal to given value."""
  permission_value_not: String

  """All values that are contained in given list."""
  permission_value_in: [String!]

  """All values that are not contained in given list."""
  permission_value_not_in: [String!]

  """All values less than the given value."""
  permission_value_lt: String

  """All values less than or equal the given value."""
  permission_value_lte: String

  """All values greater than the given value."""
  permission_value_gt: String

  """All values greater than or equal the given value."""
  permission_value_gte: String

  """All values containing the given string."""
  permission_value_contains: String

  """All values not containing the given string."""
  permission_value_not_contains: String

  """All values starting with the given string."""
  permission_value_starts_with: String

  """All values not starting with the given string."""
  permission_value_not_starts_with: String

  """All values ending with the given string."""
  permission_value_ends_with: String

  """All values not ending with the given string."""
  permission_value_not_ends_with: String
  uri: String

  """All values that are not equal to given value."""
  uri_not: String

  """All values that are contained in given list."""
  uri_in: [String!]

  """All values that are not contained in given list."""
  uri_not_in: [String!]

  """All values less than the given value."""
  uri_lt: String

  """All values less than or equal the given value."""
  uri_lte: String

  """All values greater than the given value."""
  uri_gt: String

  """All values greater than or equal the given value."""
  uri_gte: String

  """All values containing the given string."""
  uri_contains: String

  """All values not containing the given string."""
  uri_not_contains: String

  """All values starting with the given string."""
  uri_starts_with: String

  """All values not starting with the given string."""
  uri_not_starts_with: String

  """All values ending with the given string."""
  uri_ends_with: String

  """All values not ending with the given string."""
  uri_not_ends_with: String
  icon: String

  """All values that are not equal to given value."""
  icon_not: String

  """All values that are contained in given list."""
  icon_in: [String!]

  """All values that are not contained in given list."""
  icon_not_in: [String!]

  """All values less than the given value."""
  icon_lt: String

  """All values less than or equal the given value."""
  icon_lte: String

  """All values greater than the given value."""
  icon_gt: String

  """All values greater than or equal the given value."""
  icon_gte: String

  """All values containing the given string."""
  icon_contains: String

  """All values not containing the given string."""
  icon_not_contains: String

  """All values starting with the given string."""
  icon_starts_with: String

  """All values not starting with the given string."""
  icon_not_starts_with: String

  """All values ending with the given string."""
  icon_ends_with: String

  """All values not ending with the given string."""
  icon_not_ends_with: String
  status: Int

  """All values that are not equal to given value."""
  status_not: Int

  """All values that are contained in given list."""
  status_in: [Int!]

  """All values that are not contained in given list."""
  status_not_in: [Int!]

  """All values less than the given value."""
  status_lt: Int

  """All values less than or equal the given value."""
  status_lte: Int

  """All values greater than the given value."""
  status_gt: Int

  """All values greater than or equal the given value."""
  status_gte: Int
  ctime: DateTime

  """All values that are not equal to given value."""
  ctime_not: DateTime

  """All values that are contained in given list."""
  ctime_in: [DateTime!]

  """All values that are not contained in given list."""
  ctime_not_in: [DateTime!]

  """All values less than the given value."""
  ctime_lt: DateTime

  """All values less than or equal the given value."""
  ctime_lte: DateTime

  """All values greater than the given value."""
  ctime_gt: DateTime

  """All values greater than or equal the given value."""
  ctime_gte: DateTime
  orders: Int

  """All values that are not equal to given value."""
  orders_not: Int

  """All values that are contained in given list."""
  orders_in: [Int!]

  """All values that are not contained in given list."""
  orders_not_in: [Int!]

  """All values less than the given value."""
  orders_lt: Int

  """All values less than or equal the given value."""
  orders_lte: Int

  """All values greater than the given value."""
  orders_gt: Int

  """All values greater than or equal the given value."""
  orders_gte: Int
}

input PermissionWhereUniqueInput {
  permission_id: ID
}

enum PrismaDatabase {
  default
}

type Query {
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  orgainizations(where: OrgainizationWhereInput, orderBy: OrgainizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Orgainization]!
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission]!
  rolePermissions(where: RolePermissionWhereInput, orderBy: RolePermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RolePermission]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  systems(where: SystemWhereInput, orderBy: SystemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [System]!
  userOrgainizations(where: UserOrgainizationWhereInput, orderBy: UserOrgainizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserOrgainization]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  userPermissions(where: UserPermissionWhereInput, orderBy: UserPermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserPermission]!
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole]!
  log(where: LogWhereUniqueInput!): Log
  orgainization(where: OrgainizationWhereUniqueInput!): Orgainization
  permission(where: PermissionWhereUniqueInput!): Permission
  rolePermission(where: RolePermissionWhereUniqueInput!): RolePermission
  role(where: RoleWhereUniqueInput!): Role
  system(where: SystemWhereUniqueInput!): System
  userOrgainization(where: UserOrgainizationWhereUniqueInput!): UserOrgainization
  user(where: UserWhereUniqueInput!): User
  userPermission(where: UserPermissionWhereUniqueInput!): UserPermission
  userRole(where: UserRoleWhereUniqueInput!): UserRole
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  orgainizationsConnection(where: OrgainizationWhereInput, orderBy: OrgainizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrgainizationConnection!
  permissionsConnection(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PermissionConnection!
  rolePermissionsConnection(where: RolePermissionWhereInput, orderBy: RolePermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RolePermissionConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  systemsConnection(where: SystemWhereInput, orderBy: SystemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemConnection!
  userOrgainizationsConnection(where: UserOrgainizationWhereInput, orderBy: UserOrgainizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserOrgainizationConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userPermissionsConnection(where: UserPermissionWhereInput, orderBy: UserPermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserPermissionConnection!
  userRolesConnection(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRoleConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Role {
  role_id: ID!
  name: String
  title: String
  description: String
  ctime: DateTime!
  orders: Int
}

"""A connection to a list of items."""
type RoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  role_id: ID
  name: String
  title: String
  description: String
  orders: Int
}

"""An edge in a connection."""
type RoleEdge {
  """The item at the end of the edge."""
  node: Role!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoleOrderByInput {
  role_id_ASC
  role_id_DESC
  name_ASC
  name_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  ctime_ASC
  ctime_DESC
  orders_ASC
  orders_DESC
}

type RolePermission {
  role_permission_id: ID!
  role_id: Int
  permission_id: Int
}

"""A connection to a list of items."""
type RolePermissionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RolePermissionEdge]!
  aggregate: AggregateRolePermission!
}

input RolePermissionCreateInput {
  role_permission_id: ID
  role_id: Int
  permission_id: Int
}

"""An edge in a connection."""
type RolePermissionEdge {
  """The item at the end of the edge."""
  node: RolePermission!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RolePermissionOrderByInput {
  role_permission_id_ASC
  role_permission_id_DESC
  role_id_ASC
  role_id_DESC
  permission_id_ASC
  permission_id_DESC
}

type RolePermissionPreviousValues {
  role_permission_id: ID!
  role_id: Int
  permission_id: Int
}

type RolePermissionSubscriptionPayload {
  mutation: MutationType!
  node: RolePermission
  updatedFields: [String!]
  previousValues: RolePermissionPreviousValues
}

input RolePermissionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RolePermissionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RolePermissionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RolePermissionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RolePermissionWhereInput
}

input RolePermissionUpdateInput {
  role_id: Int
  permission_id: Int
}

input RolePermissionUpdateManyMutationInput {
  role_id: Int
  permission_id: Int
}

input RolePermissionWhereInput {
  """Logical AND on all given filters."""
  AND: [RolePermissionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RolePermissionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RolePermissionWhereInput!]
  role_permission_id: ID

  """All values that are not equal to given value."""
  role_permission_id_not: ID

  """All values that are contained in given list."""
  role_permission_id_in: [ID!]

  """All values that are not contained in given list."""
  role_permission_id_not_in: [ID!]

  """All values less than the given value."""
  role_permission_id_lt: ID

  """All values less than or equal the given value."""
  role_permission_id_lte: ID

  """All values greater than the given value."""
  role_permission_id_gt: ID

  """All values greater than or equal the given value."""
  role_permission_id_gte: ID

  """All values containing the given string."""
  role_permission_id_contains: ID

  """All values not containing the given string."""
  role_permission_id_not_contains: ID

  """All values starting with the given string."""
  role_permission_id_starts_with: ID

  """All values not starting with the given string."""
  role_permission_id_not_starts_with: ID

  """All values ending with the given string."""
  role_permission_id_ends_with: ID

  """All values not ending with the given string."""
  role_permission_id_not_ends_with: ID
  role_id: Int

  """All values that are not equal to given value."""
  role_id_not: Int

  """All values that are contained in given list."""
  role_id_in: [Int!]

  """All values that are not contained in given list."""
  role_id_not_in: [Int!]

  """All values less than the given value."""
  role_id_lt: Int

  """All values less than or equal the given value."""
  role_id_lte: Int

  """All values greater than the given value."""
  role_id_gt: Int

  """All values greater than or equal the given value."""
  role_id_gte: Int
  permission_id: Int

  """All values that are not equal to given value."""
  permission_id_not: Int

  """All values that are contained in given list."""
  permission_id_in: [Int!]

  """All values that are not contained in given list."""
  permission_id_not_in: [Int!]

  """All values less than the given value."""
  permission_id_lt: Int

  """All values less than or equal the given value."""
  permission_id_lte: Int

  """All values greater than the given value."""
  permission_id_gt: Int

  """All values greater than or equal the given value."""
  permission_id_gte: Int
}

input RolePermissionWhereUniqueInput {
  role_permission_id: ID
}

type RolePreviousValues {
  role_id: ID!
  name: String
  title: String
  description: String
  ctime: DateTime!
  orders: Int
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
}

input RoleUpdateInput {
  name: String
  title: String
  description: String
  orders: Int
}

input RoleUpdateManyMutationInput {
  name: String
  title: String
  description: String
  orders: Int
}

input RoleWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleWhereInput!]
  role_id: ID

  """All values that are not equal to given value."""
  role_id_not: ID

  """All values that are contained in given list."""
  role_id_in: [ID!]

  """All values that are not contained in given list."""
  role_id_not_in: [ID!]

  """All values less than the given value."""
  role_id_lt: ID

  """All values less than or equal the given value."""
  role_id_lte: ID

  """All values greater than the given value."""
  role_id_gt: ID

  """All values greater than or equal the given value."""
  role_id_gte: ID

  """All values containing the given string."""
  role_id_contains: ID

  """All values not containing the given string."""
  role_id_not_contains: ID

  """All values starting with the given string."""
  role_id_starts_with: ID

  """All values not starting with the given string."""
  role_id_not_starts_with: ID

  """All values ending with the given string."""
  role_id_ends_with: ID

  """All values not ending with the given string."""
  role_id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  ctime: DateTime

  """All values that are not equal to given value."""
  ctime_not: DateTime

  """All values that are contained in given list."""
  ctime_in: [DateTime!]

  """All values that are not contained in given list."""
  ctime_not_in: [DateTime!]

  """All values less than the given value."""
  ctime_lt: DateTime

  """All values less than or equal the given value."""
  ctime_lte: DateTime

  """All values greater than the given value."""
  ctime_gt: DateTime

  """All values greater than or equal the given value."""
  ctime_gte: DateTime
  orders: Int

  """All values that are not equal to given value."""
  orders_not: Int

  """All values that are contained in given list."""
  orders_in: [Int!]

  """All values that are not contained in given list."""
  orders_not_in: [Int!]

  """All values less than the given value."""
  orders_lt: Int

  """All values less than or equal the given value."""
  orders_lte: Int

  """All values greater than the given value."""
  orders_gt: Int

  """All values greater than or equal the given value."""
  orders_gte: Int
}

input RoleWhereUniqueInput {
  role_id: ID
}

type Subscription {
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  orgainization(where: OrgainizationSubscriptionWhereInput): OrgainizationSubscriptionPayload
  permission(where: PermissionSubscriptionWhereInput): PermissionSubscriptionPayload
  rolePermission(where: RolePermissionSubscriptionWhereInput): RolePermissionSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  system(where: SystemSubscriptionWhereInput): SystemSubscriptionPayload
  userOrgainization(where: UserOrgainizationSubscriptionWhereInput): UserOrgainizationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userPermission(where: UserPermissionSubscriptionWhereInput): UserPermissionSubscriptionPayload
  userRole(where: UserRoleSubscriptionWhereInput): UserRoleSubscriptionPayload
}

type System {
  system_id: ID!
  icon: String
  banner: String
  theme: String
  basepath: String
  status: Int!
  name: String
  title: String
  description: String
  ctime: DateTime!
  orders: Int
}

"""A connection to a list of items."""
type SystemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SystemEdge]!
  aggregate: AggregateSystem!
}

input SystemCreateInput {
  system_id: ID
  icon: String
  banner: String
  theme: String
  basepath: String
  status: Int!
  name: String
  title: String
  description: String
  orders: Int
}

"""An edge in a connection."""
type SystemEdge {
  """The item at the end of the edge."""
  node: System!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SystemOrderByInput {
  system_id_ASC
  system_id_DESC
  icon_ASC
  icon_DESC
  banner_ASC
  banner_DESC
  theme_ASC
  theme_DESC
  basepath_ASC
  basepath_DESC
  status_ASC
  status_DESC
  name_ASC
  name_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  ctime_ASC
  ctime_DESC
  orders_ASC
  orders_DESC
}

type SystemPreviousValues {
  system_id: ID!
  icon: String
  banner: String
  theme: String
  basepath: String
  status: Int!
  name: String
  title: String
  description: String
  ctime: DateTime!
  orders: Int
}

type SystemSubscriptionPayload {
  mutation: MutationType!
  node: System
  updatedFields: [String!]
  previousValues: SystemPreviousValues
}

input SystemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SystemWhereInput
}

input SystemUpdateInput {
  icon: String
  banner: String
  theme: String
  basepath: String
  status: Int
  name: String
  title: String
  description: String
  orders: Int
}

input SystemUpdateManyMutationInput {
  icon: String
  banner: String
  theme: String
  basepath: String
  status: Int
  name: String
  title: String
  description: String
  orders: Int
}

input SystemWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemWhereInput!]
  system_id: ID

  """All values that are not equal to given value."""
  system_id_not: ID

  """All values that are contained in given list."""
  system_id_in: [ID!]

  """All values that are not contained in given list."""
  system_id_not_in: [ID!]

  """All values less than the given value."""
  system_id_lt: ID

  """All values less than or equal the given value."""
  system_id_lte: ID

  """All values greater than the given value."""
  system_id_gt: ID

  """All values greater than or equal the given value."""
  system_id_gte: ID

  """All values containing the given string."""
  system_id_contains: ID

  """All values not containing the given string."""
  system_id_not_contains: ID

  """All values starting with the given string."""
  system_id_starts_with: ID

  """All values not starting with the given string."""
  system_id_not_starts_with: ID

  """All values ending with the given string."""
  system_id_ends_with: ID

  """All values not ending with the given string."""
  system_id_not_ends_with: ID
  icon: String

  """All values that are not equal to given value."""
  icon_not: String

  """All values that are contained in given list."""
  icon_in: [String!]

  """All values that are not contained in given list."""
  icon_not_in: [String!]

  """All values less than the given value."""
  icon_lt: String

  """All values less than or equal the given value."""
  icon_lte: String

  """All values greater than the given value."""
  icon_gt: String

  """All values greater than or equal the given value."""
  icon_gte: String

  """All values containing the given string."""
  icon_contains: String

  """All values not containing the given string."""
  icon_not_contains: String

  """All values starting with the given string."""
  icon_starts_with: String

  """All values not starting with the given string."""
  icon_not_starts_with: String

  """All values ending with the given string."""
  icon_ends_with: String

  """All values not ending with the given string."""
  icon_not_ends_with: String
  banner: String

  """All values that are not equal to given value."""
  banner_not: String

  """All values that are contained in given list."""
  banner_in: [String!]

  """All values that are not contained in given list."""
  banner_not_in: [String!]

  """All values less than the given value."""
  banner_lt: String

  """All values less than or equal the given value."""
  banner_lte: String

  """All values greater than the given value."""
  banner_gt: String

  """All values greater than or equal the given value."""
  banner_gte: String

  """All values containing the given string."""
  banner_contains: String

  """All values not containing the given string."""
  banner_not_contains: String

  """All values starting with the given string."""
  banner_starts_with: String

  """All values not starting with the given string."""
  banner_not_starts_with: String

  """All values ending with the given string."""
  banner_ends_with: String

  """All values not ending with the given string."""
  banner_not_ends_with: String
  theme: String

  """All values that are not equal to given value."""
  theme_not: String

  """All values that are contained in given list."""
  theme_in: [String!]

  """All values that are not contained in given list."""
  theme_not_in: [String!]

  """All values less than the given value."""
  theme_lt: String

  """All values less than or equal the given value."""
  theme_lte: String

  """All values greater than the given value."""
  theme_gt: String

  """All values greater than or equal the given value."""
  theme_gte: String

  """All values containing the given string."""
  theme_contains: String

  """All values not containing the given string."""
  theme_not_contains: String

  """All values starting with the given string."""
  theme_starts_with: String

  """All values not starting with the given string."""
  theme_not_starts_with: String

  """All values ending with the given string."""
  theme_ends_with: String

  """All values not ending with the given string."""
  theme_not_ends_with: String
  basepath: String

  """All values that are not equal to given value."""
  basepath_not: String

  """All values that are contained in given list."""
  basepath_in: [String!]

  """All values that are not contained in given list."""
  basepath_not_in: [String!]

  """All values less than the given value."""
  basepath_lt: String

  """All values less than or equal the given value."""
  basepath_lte: String

  """All values greater than the given value."""
  basepath_gt: String

  """All values greater than or equal the given value."""
  basepath_gte: String

  """All values containing the given string."""
  basepath_contains: String

  """All values not containing the given string."""
  basepath_not_contains: String

  """All values starting with the given string."""
  basepath_starts_with: String

  """All values not starting with the given string."""
  basepath_not_starts_with: String

  """All values ending with the given string."""
  basepath_ends_with: String

  """All values not ending with the given string."""
  basepath_not_ends_with: String
  status: Int

  """All values that are not equal to given value."""
  status_not: Int

  """All values that are contained in given list."""
  status_in: [Int!]

  """All values that are not contained in given list."""
  status_not_in: [Int!]

  """All values less than the given value."""
  status_lt: Int

  """All values less than or equal the given value."""
  status_lte: Int

  """All values greater than the given value."""
  status_gt: Int

  """All values greater than or equal the given value."""
  status_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  ctime: DateTime

  """All values that are not equal to given value."""
  ctime_not: DateTime

  """All values that are contained in given list."""
  ctime_in: [DateTime!]

  """All values that are not contained in given list."""
  ctime_not_in: [DateTime!]

  """All values less than the given value."""
  ctime_lt: DateTime

  """All values less than or equal the given value."""
  ctime_lte: DateTime

  """All values greater than the given value."""
  ctime_gt: DateTime

  """All values greater than or equal the given value."""
  ctime_gte: DateTime
  orders: Int

  """All values that are not equal to given value."""
  orders_not: Int

  """All values that are contained in given list."""
  orders_in: [Int!]

  """All values that are not contained in given list."""
  orders_not_in: [Int!]

  """All values less than the given value."""
  orders_lt: Int

  """All values less than or equal the given value."""
  orders_lte: Int

  """All values greater than the given value."""
  orders_gt: Int

  """All values greater than or equal the given value."""
  orders_gte: Int
}

input SystemWhereUniqueInput {
  system_id: ID
}

type User {
  user_id: ID!
  username: String
  password: String!
  salt: String
  realname: String
  avatar: String
  phone: String
  email: String
  sex: Int!
  locked: Int!
  ctime: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  user_id: ID
  username: String
  password: String!
  salt: String
  realname: String
  avatar: String
  phone: String
  email: String
  sex: Int!
  locked: Int!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  user_id_ASC
  user_id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  salt_ASC
  salt_DESC
  realname_ASC
  realname_DESC
  avatar_ASC
  avatar_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  sex_ASC
  sex_DESC
  locked_ASC
  locked_DESC
  ctime_ASC
  ctime_DESC
}

type UserOrgainization {
  user_orgainization_id: ID!
  user_id: Int
  orgainization_id: Int
}

"""A connection to a list of items."""
type UserOrgainizationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserOrgainizationEdge]!
  aggregate: AggregateUserOrgainization!
}

input UserOrgainizationCreateInput {
  user_orgainization_id: ID
  user_id: Int
  orgainization_id: Int
}

"""An edge in a connection."""
type UserOrgainizationEdge {
  """The item at the end of the edge."""
  node: UserOrgainization!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrgainizationOrderByInput {
  user_orgainization_id_ASC
  user_orgainization_id_DESC
  user_id_ASC
  user_id_DESC
  orgainization_id_ASC
  orgainization_id_DESC
}

type UserOrgainizationPreviousValues {
  user_orgainization_id: ID!
  user_id: Int
  orgainization_id: Int
}

type UserOrgainizationSubscriptionPayload {
  mutation: MutationType!
  node: UserOrgainization
  updatedFields: [String!]
  previousValues: UserOrgainizationPreviousValues
}

input UserOrgainizationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserOrgainizationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserOrgainizationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserOrgainizationSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserOrgainizationWhereInput
}

input UserOrgainizationUpdateInput {
  user_id: Int
  orgainization_id: Int
}

input UserOrgainizationUpdateManyMutationInput {
  user_id: Int
  orgainization_id: Int
}

input UserOrgainizationWhereInput {
  """Logical AND on all given filters."""
  AND: [UserOrgainizationWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserOrgainizationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserOrgainizationWhereInput!]
  user_orgainization_id: ID

  """All values that are not equal to given value."""
  user_orgainization_id_not: ID

  """All values that are contained in given list."""
  user_orgainization_id_in: [ID!]

  """All values that are not contained in given list."""
  user_orgainization_id_not_in: [ID!]

  """All values less than the given value."""
  user_orgainization_id_lt: ID

  """All values less than or equal the given value."""
  user_orgainization_id_lte: ID

  """All values greater than the given value."""
  user_orgainization_id_gt: ID

  """All values greater than or equal the given value."""
  user_orgainization_id_gte: ID

  """All values containing the given string."""
  user_orgainization_id_contains: ID

  """All values not containing the given string."""
  user_orgainization_id_not_contains: ID

  """All values starting with the given string."""
  user_orgainization_id_starts_with: ID

  """All values not starting with the given string."""
  user_orgainization_id_not_starts_with: ID

  """All values ending with the given string."""
  user_orgainization_id_ends_with: ID

  """All values not ending with the given string."""
  user_orgainization_id_not_ends_with: ID
  user_id: Int

  """All values that are not equal to given value."""
  user_id_not: Int

  """All values that are contained in given list."""
  user_id_in: [Int!]

  """All values that are not contained in given list."""
  user_id_not_in: [Int!]

  """All values less than the given value."""
  user_id_lt: Int

  """All values less than or equal the given value."""
  user_id_lte: Int

  """All values greater than the given value."""
  user_id_gt: Int

  """All values greater than or equal the given value."""
  user_id_gte: Int
  orgainization_id: Int

  """All values that are not equal to given value."""
  orgainization_id_not: Int

  """All values that are contained in given list."""
  orgainization_id_in: [Int!]

  """All values that are not contained in given list."""
  orgainization_id_not_in: [Int!]

  """All values less than the given value."""
  orgainization_id_lt: Int

  """All values less than or equal the given value."""
  orgainization_id_lte: Int

  """All values greater than the given value."""
  orgainization_id_gt: Int

  """All values greater than or equal the given value."""
  orgainization_id_gte: Int
}

input UserOrgainizationWhereUniqueInput {
  user_orgainization_id: ID
}

type UserPermission {
  user_permission_id: ID!
  user_id: Int!
  permission_id: Int!
  type: Int!
}

"""A connection to a list of items."""
type UserPermissionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserPermissionEdge]!
  aggregate: AggregateUserPermission!
}

input UserPermissionCreateInput {
  user_permission_id: ID
  user_id: Int!
  permission_id: Int!
  type: Int!
}

"""An edge in a connection."""
type UserPermissionEdge {
  """The item at the end of the edge."""
  node: UserPermission!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserPermissionOrderByInput {
  user_permission_id_ASC
  user_permission_id_DESC
  user_id_ASC
  user_id_DESC
  permission_id_ASC
  permission_id_DESC
  type_ASC
  type_DESC
}

type UserPermissionPreviousValues {
  user_permission_id: ID!
  user_id: Int!
  permission_id: Int!
  type: Int!
}

type UserPermissionSubscriptionPayload {
  mutation: MutationType!
  node: UserPermission
  updatedFields: [String!]
  previousValues: UserPermissionPreviousValues
}

input UserPermissionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserPermissionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserPermissionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserPermissionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserPermissionWhereInput
}

input UserPermissionUpdateInput {
  user_id: Int
  permission_id: Int
  type: Int
}

input UserPermissionUpdateManyMutationInput {
  user_id: Int
  permission_id: Int
  type: Int
}

input UserPermissionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserPermissionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserPermissionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserPermissionWhereInput!]
  user_permission_id: ID

  """All values that are not equal to given value."""
  user_permission_id_not: ID

  """All values that are contained in given list."""
  user_permission_id_in: [ID!]

  """All values that are not contained in given list."""
  user_permission_id_not_in: [ID!]

  """All values less than the given value."""
  user_permission_id_lt: ID

  """All values less than or equal the given value."""
  user_permission_id_lte: ID

  """All values greater than the given value."""
  user_permission_id_gt: ID

  """All values greater than or equal the given value."""
  user_permission_id_gte: ID

  """All values containing the given string."""
  user_permission_id_contains: ID

  """All values not containing the given string."""
  user_permission_id_not_contains: ID

  """All values starting with the given string."""
  user_permission_id_starts_with: ID

  """All values not starting with the given string."""
  user_permission_id_not_starts_with: ID

  """All values ending with the given string."""
  user_permission_id_ends_with: ID

  """All values not ending with the given string."""
  user_permission_id_not_ends_with: ID
  user_id: Int

  """All values that are not equal to given value."""
  user_id_not: Int

  """All values that are contained in given list."""
  user_id_in: [Int!]

  """All values that are not contained in given list."""
  user_id_not_in: [Int!]

  """All values less than the given value."""
  user_id_lt: Int

  """All values less than or equal the given value."""
  user_id_lte: Int

  """All values greater than the given value."""
  user_id_gt: Int

  """All values greater than or equal the given value."""
  user_id_gte: Int
  permission_id: Int

  """All values that are not equal to given value."""
  permission_id_not: Int

  """All values that are contained in given list."""
  permission_id_in: [Int!]

  """All values that are not contained in given list."""
  permission_id_not_in: [Int!]

  """All values less than the given value."""
  permission_id_lt: Int

  """All values less than or equal the given value."""
  permission_id_lte: Int

  """All values greater than the given value."""
  permission_id_gt: Int

  """All values greater than or equal the given value."""
  permission_id_gte: Int
  type: Int

  """All values that are not equal to given value."""
  type_not: Int

  """All values that are contained in given list."""
  type_in: [Int!]

  """All values that are not contained in given list."""
  type_not_in: [Int!]

  """All values less than the given value."""
  type_lt: Int

  """All values less than or equal the given value."""
  type_lte: Int

  """All values greater than the given value."""
  type_gt: Int

  """All values greater than or equal the given value."""
  type_gte: Int
}

input UserPermissionWhereUniqueInput {
  user_permission_id: ID
}

type UserPreviousValues {
  user_id: ID!
  username: String
  password: String!
  salt: String
  realname: String
  avatar: String
  phone: String
  email: String
  sex: Int!
  locked: Int!
  ctime: DateTime!
}

type UserRole {
  user_role_id: ID!
  user_id: Int!
  role_id: Int!
}

"""A connection to a list of items."""
type UserRoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserRoleEdge]!
  aggregate: AggregateUserRole!
}

input UserRoleCreateInput {
  user_role_id: ID
  user_id: Int!
  role_id: Int!
}

"""An edge in a connection."""
type UserRoleEdge {
  """The item at the end of the edge."""
  node: UserRole!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserRoleOrderByInput {
  user_role_id_ASC
  user_role_id_DESC
  user_id_ASC
  user_id_DESC
  role_id_ASC
  role_id_DESC
}

type UserRolePreviousValues {
  user_role_id: ID!
  user_id: Int!
  role_id: Int!
}

type UserRoleSubscriptionPayload {
  mutation: MutationType!
  node: UserRole
  updatedFields: [String!]
  previousValues: UserRolePreviousValues
}

input UserRoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRoleSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserRoleWhereInput
}

input UserRoleUpdateInput {
  user_id: Int
  role_id: Int
}

input UserRoleUpdateManyMutationInput {
  user_id: Int
  role_id: Int
}

input UserRoleWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRoleWhereInput!]
  user_role_id: ID

  """All values that are not equal to given value."""
  user_role_id_not: ID

  """All values that are contained in given list."""
  user_role_id_in: [ID!]

  """All values that are not contained in given list."""
  user_role_id_not_in: [ID!]

  """All values less than the given value."""
  user_role_id_lt: ID

  """All values less than or equal the given value."""
  user_role_id_lte: ID

  """All values greater than the given value."""
  user_role_id_gt: ID

  """All values greater than or equal the given value."""
  user_role_id_gte: ID

  """All values containing the given string."""
  user_role_id_contains: ID

  """All values not containing the given string."""
  user_role_id_not_contains: ID

  """All values starting with the given string."""
  user_role_id_starts_with: ID

  """All values not starting with the given string."""
  user_role_id_not_starts_with: ID

  """All values ending with the given string."""
  user_role_id_ends_with: ID

  """All values not ending with the given string."""
  user_role_id_not_ends_with: ID
  user_id: Int

  """All values that are not equal to given value."""
  user_id_not: Int

  """All values that are contained in given list."""
  user_id_in: [Int!]

  """All values that are not contained in given list."""
  user_id_not_in: [Int!]

  """All values less than the given value."""
  user_id_lt: Int

  """All values less than or equal the given value."""
  user_id_lte: Int

  """All values greater than the given value."""
  user_id_gt: Int

  """All values greater than or equal the given value."""
  user_id_gte: Int
  role_id: Int

  """All values that are not equal to given value."""
  role_id_not: Int

  """All values that are contained in given list."""
  role_id_in: [Int!]

  """All values that are not contained in given list."""
  role_id_not_in: [Int!]

  """All values less than the given value."""
  role_id_lt: Int

  """All values less than or equal the given value."""
  role_id_lte: Int

  """All values greater than the given value."""
  role_id_gt: Int

  """All values greater than or equal the given value."""
  role_id_gte: Int
}

input UserRoleWhereUniqueInput {
  user_role_id: ID
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  username: String
  password: String
  salt: String
  realname: String
  avatar: String
  phone: String
  email: String
  sex: Int
  locked: Int
}

input UserUpdateManyMutationInput {
  username: String
  password: String
  salt: String
  realname: String
  avatar: String
  phone: String
  email: String
  sex: Int
  locked: Int
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  user_id: ID

  """All values that are not equal to given value."""
  user_id_not: ID

  """All values that are contained in given list."""
  user_id_in: [ID!]

  """All values that are not contained in given list."""
  user_id_not_in: [ID!]

  """All values less than the given value."""
  user_id_lt: ID

  """All values less than or equal the given value."""
  user_id_lte: ID

  """All values greater than the given value."""
  user_id_gt: ID

  """All values greater than or equal the given value."""
  user_id_gte: ID

  """All values containing the given string."""
  user_id_contains: ID

  """All values not containing the given string."""
  user_id_not_contains: ID

  """All values starting with the given string."""
  user_id_starts_with: ID

  """All values not starting with the given string."""
  user_id_not_starts_with: ID

  """All values ending with the given string."""
  user_id_ends_with: ID

  """All values not ending with the given string."""
  user_id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  salt: String

  """All values that are not equal to given value."""
  salt_not: String

  """All values that are contained in given list."""
  salt_in: [String!]

  """All values that are not contained in given list."""
  salt_not_in: [String!]

  """All values less than the given value."""
  salt_lt: String

  """All values less than or equal the given value."""
  salt_lte: String

  """All values greater than the given value."""
  salt_gt: String

  """All values greater than or equal the given value."""
  salt_gte: String

  """All values containing the given string."""
  salt_contains: String

  """All values not containing the given string."""
  salt_not_contains: String

  """All values starting with the given string."""
  salt_starts_with: String

  """All values not starting with the given string."""
  salt_not_starts_with: String

  """All values ending with the given string."""
  salt_ends_with: String

  """All values not ending with the given string."""
  salt_not_ends_with: String
  realname: String

  """All values that are not equal to given value."""
  realname_not: String

  """All values that are contained in given list."""
  realname_in: [String!]

  """All values that are not contained in given list."""
  realname_not_in: [String!]

  """All values less than the given value."""
  realname_lt: String

  """All values less than or equal the given value."""
  realname_lte: String

  """All values greater than the given value."""
  realname_gt: String

  """All values greater than or equal the given value."""
  realname_gte: String

  """All values containing the given string."""
  realname_contains: String

  """All values not containing the given string."""
  realname_not_contains: String

  """All values starting with the given string."""
  realname_starts_with: String

  """All values not starting with the given string."""
  realname_not_starts_with: String

  """All values ending with the given string."""
  realname_ends_with: String

  """All values not ending with the given string."""
  realname_not_ends_with: String
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  sex: Int

  """All values that are not equal to given value."""
  sex_not: Int

  """All values that are contained in given list."""
  sex_in: [Int!]

  """All values that are not contained in given list."""
  sex_not_in: [Int!]

  """All values less than the given value."""
  sex_lt: Int

  """All values less than or equal the given value."""
  sex_lte: Int

  """All values greater than the given value."""
  sex_gt: Int

  """All values greater than or equal the given value."""
  sex_gte: Int
  locked: Int

  """All values that are not equal to given value."""
  locked_not: Int

  """All values that are contained in given list."""
  locked_in: [Int!]

  """All values that are not contained in given list."""
  locked_not_in: [Int!]

  """All values less than the given value."""
  locked_lt: Int

  """All values less than or equal the given value."""
  locked_lte: Int

  """All values greater than the given value."""
  locked_gt: Int

  """All values greater than or equal the given value."""
  locked_gte: Int
  ctime: DateTime

  """All values that are not equal to given value."""
  ctime_not: DateTime

  """All values that are contained in given list."""
  ctime_in: [DateTime!]

  """All values that are not contained in given list."""
  ctime_not_in: [DateTime!]

  """All values less than the given value."""
  ctime_lt: DateTime

  """All values less than or equal the given value."""
  ctime_lte: DateTime

  """All values greater than the given value."""
  ctime_gt: DateTime

  """All values greater than or equal the given value."""
  ctime_gte: DateTime
}

input UserWhereUniqueInput {
  user_id: ID
  username: String
  phone: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type LogOrderByInput =   'log_id_ASC' |
  'log_id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'username_ASC' |
  'username_DESC' |
  'start_time_ASC' |
  'start_time_DESC' |
  'spend_time_ASC' |
  'spend_time_DESC' |
  'basepath_ASC' |
  'basepath_DESC' |
  'uri_ASC' |
  'uri_DESC' |
  'url_ASC' |
  'url_DESC' |
  'method_ASC' |
  'method_DESC' |
  'parameter_ASC' |
  'parameter_DESC' |
  'user_agent_ASC' |
  'user_agent_DESC' |
  'ip_ASC' |
  'ip_DESC' |
  'result_ASC' |
  'result_DESC' |
  'permission_ASC' |
  'permission_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type OrgainizationOrderByInput =   'orgainization_id_ASC' |
  'orgainization_id_DESC' |
  'pid_ASC' |
  'pid_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'ctime_ASC' |
  'ctime_DESC'

export type PermissionOrderByInput =   'permission_id_ASC' |
  'permission_id_DESC' |
  'system_id_ASC' |
  'system_id_DESC' |
  'pid_ASC' |
  'pid_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'permission_value_ASC' |
  'permission_value_DESC' |
  'uri_ASC' |
  'uri_DESC' |
  'icon_ASC' |
  'icon_DESC' |
  'status_ASC' |
  'status_DESC' |
  'ctime_ASC' |
  'ctime_DESC' |
  'orders_ASC' |
  'orders_DESC'

export type PrismaDatabase =   'default'

export type RoleOrderByInput =   'role_id_ASC' |
  'role_id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'ctime_ASC' |
  'ctime_DESC' |
  'orders_ASC' |
  'orders_DESC'

export type RolePermissionOrderByInput =   'role_permission_id_ASC' |
  'role_permission_id_DESC' |
  'role_id_ASC' |
  'role_id_DESC' |
  'permission_id_ASC' |
  'permission_id_DESC'

export type SystemOrderByInput =   'system_id_ASC' |
  'system_id_DESC' |
  'icon_ASC' |
  'icon_DESC' |
  'banner_ASC' |
  'banner_DESC' |
  'theme_ASC' |
  'theme_DESC' |
  'basepath_ASC' |
  'basepath_DESC' |
  'status_ASC' |
  'status_DESC' |
  'name_ASC' |
  'name_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'ctime_ASC' |
  'ctime_DESC' |
  'orders_ASC' |
  'orders_DESC'

export type UserOrderByInput =   'user_id_ASC' |
  'user_id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'salt_ASC' |
  'salt_DESC' |
  'realname_ASC' |
  'realname_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'email_ASC' |
  'email_DESC' |
  'sex_ASC' |
  'sex_DESC' |
  'locked_ASC' |
  'locked_DESC' |
  'ctime_ASC' |
  'ctime_DESC'

export type UserOrgainizationOrderByInput =   'user_orgainization_id_ASC' |
  'user_orgainization_id_DESC' |
  'user_id_ASC' |
  'user_id_DESC' |
  'orgainization_id_ASC' |
  'orgainization_id_DESC'

export type UserPermissionOrderByInput =   'user_permission_id_ASC' |
  'user_permission_id_DESC' |
  'user_id_ASC' |
  'user_id_DESC' |
  'permission_id_ASC' |
  'permission_id_DESC' |
  'type_ASC' |
  'type_DESC'

export type UserRoleOrderByInput =   'user_role_id_ASC' |
  'user_role_id_DESC' |
  'user_id_ASC' |
  'user_id_DESC' |
  'role_id_ASC' |
  'role_id_DESC'

export interface LogCreateInput {
  log_id?: ID_Input | null
  description?: String | null
  username: String
  start_time: Int
  spend_time: Int
  basepath: String
  uri: String
  url: String
  method: String
  parameter: String
  user_agent?: String | null
  ip?: String | null
  result?: String | null
  permission?: String | null
}

export interface LogSubscriptionWhereInput {
  AND?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput | null
  OR?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput | null
  NOT?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LogWhereInput | null
}

export interface LogUpdateInput {
  description?: String | null
  username?: String | null
  start_time?: Int | null
  spend_time?: Int | null
  basepath?: String | null
  uri?: String | null
  url?: String | null
  method?: String | null
  parameter?: String | null
  user_agent?: String | null
  ip?: String | null
  result?: String | null
  permission?: String | null
}

export interface LogUpdateManyMutationInput {
  description?: String | null
  username?: String | null
  start_time?: Int | null
  spend_time?: Int | null
  basepath?: String | null
  uri?: String | null
  url?: String | null
  method?: String | null
  parameter?: String | null
  user_agent?: String | null
  ip?: String | null
  result?: String | null
  permission?: String | null
}

export interface LogWhereInput {
  AND?: LogWhereInput[] | LogWhereInput | null
  OR?: LogWhereInput[] | LogWhereInput | null
  NOT?: LogWhereInput[] | LogWhereInput | null
  log_id?: ID_Input | null
  log_id_not?: ID_Input | null
  log_id_in?: ID_Output[] | ID_Output | null
  log_id_not_in?: ID_Output[] | ID_Output | null
  log_id_lt?: ID_Input | null
  log_id_lte?: ID_Input | null
  log_id_gt?: ID_Input | null
  log_id_gte?: ID_Input | null
  log_id_contains?: ID_Input | null
  log_id_not_contains?: ID_Input | null
  log_id_starts_with?: ID_Input | null
  log_id_not_starts_with?: ID_Input | null
  log_id_ends_with?: ID_Input | null
  log_id_not_ends_with?: ID_Input | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  start_time?: Int | null
  start_time_not?: Int | null
  start_time_in?: Int[] | Int | null
  start_time_not_in?: Int[] | Int | null
  start_time_lt?: Int | null
  start_time_lte?: Int | null
  start_time_gt?: Int | null
  start_time_gte?: Int | null
  spend_time?: Int | null
  spend_time_not?: Int | null
  spend_time_in?: Int[] | Int | null
  spend_time_not_in?: Int[] | Int | null
  spend_time_lt?: Int | null
  spend_time_lte?: Int | null
  spend_time_gt?: Int | null
  spend_time_gte?: Int | null
  basepath?: String | null
  basepath_not?: String | null
  basepath_in?: String[] | String | null
  basepath_not_in?: String[] | String | null
  basepath_lt?: String | null
  basepath_lte?: String | null
  basepath_gt?: String | null
  basepath_gte?: String | null
  basepath_contains?: String | null
  basepath_not_contains?: String | null
  basepath_starts_with?: String | null
  basepath_not_starts_with?: String | null
  basepath_ends_with?: String | null
  basepath_not_ends_with?: String | null
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  method?: String | null
  method_not?: String | null
  method_in?: String[] | String | null
  method_not_in?: String[] | String | null
  method_lt?: String | null
  method_lte?: String | null
  method_gt?: String | null
  method_gte?: String | null
  method_contains?: String | null
  method_not_contains?: String | null
  method_starts_with?: String | null
  method_not_starts_with?: String | null
  method_ends_with?: String | null
  method_not_ends_with?: String | null
  parameter?: String | null
  parameter_not?: String | null
  parameter_in?: String[] | String | null
  parameter_not_in?: String[] | String | null
  parameter_lt?: String | null
  parameter_lte?: String | null
  parameter_gt?: String | null
  parameter_gte?: String | null
  parameter_contains?: String | null
  parameter_not_contains?: String | null
  parameter_starts_with?: String | null
  parameter_not_starts_with?: String | null
  parameter_ends_with?: String | null
  parameter_not_ends_with?: String | null
  user_agent?: String | null
  user_agent_not?: String | null
  user_agent_in?: String[] | String | null
  user_agent_not_in?: String[] | String | null
  user_agent_lt?: String | null
  user_agent_lte?: String | null
  user_agent_gt?: String | null
  user_agent_gte?: String | null
  user_agent_contains?: String | null
  user_agent_not_contains?: String | null
  user_agent_starts_with?: String | null
  user_agent_not_starts_with?: String | null
  user_agent_ends_with?: String | null
  user_agent_not_ends_with?: String | null
  ip?: String | null
  ip_not?: String | null
  ip_in?: String[] | String | null
  ip_not_in?: String[] | String | null
  ip_lt?: String | null
  ip_lte?: String | null
  ip_gt?: String | null
  ip_gte?: String | null
  ip_contains?: String | null
  ip_not_contains?: String | null
  ip_starts_with?: String | null
  ip_not_starts_with?: String | null
  ip_ends_with?: String | null
  ip_not_ends_with?: String | null
  result?: String | null
  result_not?: String | null
  result_in?: String[] | String | null
  result_not_in?: String[] | String | null
  result_lt?: String | null
  result_lte?: String | null
  result_gt?: String | null
  result_gte?: String | null
  result_contains?: String | null
  result_not_contains?: String | null
  result_starts_with?: String | null
  result_not_starts_with?: String | null
  result_ends_with?: String | null
  result_not_ends_with?: String | null
  permission?: String | null
  permission_not?: String | null
  permission_in?: String[] | String | null
  permission_not_in?: String[] | String | null
  permission_lt?: String | null
  permission_lte?: String | null
  permission_gt?: String | null
  permission_gte?: String | null
  permission_contains?: String | null
  permission_not_contains?: String | null
  permission_starts_with?: String | null
  permission_not_starts_with?: String | null
  permission_ends_with?: String | null
  permission_not_ends_with?: String | null
}

export interface LogWhereUniqueInput {
  log_id?: ID_Input | null
}

export interface OrgainizationCreateInput {
  orgainization_id?: ID_Input | null
  pid?: Int | null
  name?: String | null
  description?: String | null
}

export interface OrgainizationSubscriptionWhereInput {
  AND?: OrgainizationSubscriptionWhereInput[] | OrgainizationSubscriptionWhereInput | null
  OR?: OrgainizationSubscriptionWhereInput[] | OrgainizationSubscriptionWhereInput | null
  NOT?: OrgainizationSubscriptionWhereInput[] | OrgainizationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: OrgainizationWhereInput | null
}

export interface OrgainizationUpdateInput {
  pid?: Int | null
  name?: String | null
  description?: String | null
}

export interface OrgainizationUpdateManyMutationInput {
  pid?: Int | null
  name?: String | null
  description?: String | null
}

export interface OrgainizationWhereInput {
  AND?: OrgainizationWhereInput[] | OrgainizationWhereInput | null
  OR?: OrgainizationWhereInput[] | OrgainizationWhereInput | null
  NOT?: OrgainizationWhereInput[] | OrgainizationWhereInput | null
  orgainization_id?: ID_Input | null
  orgainization_id_not?: ID_Input | null
  orgainization_id_in?: ID_Output[] | ID_Output | null
  orgainization_id_not_in?: ID_Output[] | ID_Output | null
  orgainization_id_lt?: ID_Input | null
  orgainization_id_lte?: ID_Input | null
  orgainization_id_gt?: ID_Input | null
  orgainization_id_gte?: ID_Input | null
  orgainization_id_contains?: ID_Input | null
  orgainization_id_not_contains?: ID_Input | null
  orgainization_id_starts_with?: ID_Input | null
  orgainization_id_not_starts_with?: ID_Input | null
  orgainization_id_ends_with?: ID_Input | null
  orgainization_id_not_ends_with?: ID_Input | null
  pid?: Int | null
  pid_not?: Int | null
  pid_in?: Int[] | Int | null
  pid_not_in?: Int[] | Int | null
  pid_lt?: Int | null
  pid_lte?: Int | null
  pid_gt?: Int | null
  pid_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  ctime?: DateTime | null
  ctime_not?: DateTime | null
  ctime_in?: DateTime[] | DateTime | null
  ctime_not_in?: DateTime[] | DateTime | null
  ctime_lt?: DateTime | null
  ctime_lte?: DateTime | null
  ctime_gt?: DateTime | null
  ctime_gte?: DateTime | null
}

export interface OrgainizationWhereUniqueInput {
  orgainization_id?: ID_Input | null
  name?: String | null
}

export interface PermissionCreateInput {
  permission_id?: ID_Input | null
  system_id: Int
  pid?: Int | null
  name: String
  type: Int
  permission_value?: String | null
  uri?: String | null
  icon?: String | null
  status: Int
  orders?: Int | null
}

export interface PermissionSubscriptionWhereInput {
  AND?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput | null
  OR?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput | null
  NOT?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PermissionWhereInput | null
}

export interface PermissionUpdateInput {
  system_id?: Int | null
  pid?: Int | null
  name?: String | null
  type?: Int | null
  permission_value?: String | null
  uri?: String | null
  icon?: String | null
  status?: Int | null
  orders?: Int | null
}

export interface PermissionUpdateManyMutationInput {
  system_id?: Int | null
  pid?: Int | null
  name?: String | null
  type?: Int | null
  permission_value?: String | null
  uri?: String | null
  icon?: String | null
  status?: Int | null
  orders?: Int | null
}

export interface PermissionWhereInput {
  AND?: PermissionWhereInput[] | PermissionWhereInput | null
  OR?: PermissionWhereInput[] | PermissionWhereInput | null
  NOT?: PermissionWhereInput[] | PermissionWhereInput | null
  permission_id?: ID_Input | null
  permission_id_not?: ID_Input | null
  permission_id_in?: ID_Output[] | ID_Output | null
  permission_id_not_in?: ID_Output[] | ID_Output | null
  permission_id_lt?: ID_Input | null
  permission_id_lte?: ID_Input | null
  permission_id_gt?: ID_Input | null
  permission_id_gte?: ID_Input | null
  permission_id_contains?: ID_Input | null
  permission_id_not_contains?: ID_Input | null
  permission_id_starts_with?: ID_Input | null
  permission_id_not_starts_with?: ID_Input | null
  permission_id_ends_with?: ID_Input | null
  permission_id_not_ends_with?: ID_Input | null
  system_id?: Int | null
  system_id_not?: Int | null
  system_id_in?: Int[] | Int | null
  system_id_not_in?: Int[] | Int | null
  system_id_lt?: Int | null
  system_id_lte?: Int | null
  system_id_gt?: Int | null
  system_id_gte?: Int | null
  pid?: Int | null
  pid_not?: Int | null
  pid_in?: Int[] | Int | null
  pid_not_in?: Int[] | Int | null
  pid_lt?: Int | null
  pid_lte?: Int | null
  pid_gt?: Int | null
  pid_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  type?: Int | null
  type_not?: Int | null
  type_in?: Int[] | Int | null
  type_not_in?: Int[] | Int | null
  type_lt?: Int | null
  type_lte?: Int | null
  type_gt?: Int | null
  type_gte?: Int | null
  permission_value?: String | null
  permission_value_not?: String | null
  permission_value_in?: String[] | String | null
  permission_value_not_in?: String[] | String | null
  permission_value_lt?: String | null
  permission_value_lte?: String | null
  permission_value_gt?: String | null
  permission_value_gte?: String | null
  permission_value_contains?: String | null
  permission_value_not_contains?: String | null
  permission_value_starts_with?: String | null
  permission_value_not_starts_with?: String | null
  permission_value_ends_with?: String | null
  permission_value_not_ends_with?: String | null
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  icon?: String | null
  icon_not?: String | null
  icon_in?: String[] | String | null
  icon_not_in?: String[] | String | null
  icon_lt?: String | null
  icon_lte?: String | null
  icon_gt?: String | null
  icon_gte?: String | null
  icon_contains?: String | null
  icon_not_contains?: String | null
  icon_starts_with?: String | null
  icon_not_starts_with?: String | null
  icon_ends_with?: String | null
  icon_not_ends_with?: String | null
  status?: Int | null
  status_not?: Int | null
  status_in?: Int[] | Int | null
  status_not_in?: Int[] | Int | null
  status_lt?: Int | null
  status_lte?: Int | null
  status_gt?: Int | null
  status_gte?: Int | null
  ctime?: DateTime | null
  ctime_not?: DateTime | null
  ctime_in?: DateTime[] | DateTime | null
  ctime_not_in?: DateTime[] | DateTime | null
  ctime_lt?: DateTime | null
  ctime_lte?: DateTime | null
  ctime_gt?: DateTime | null
  ctime_gte?: DateTime | null
  orders?: Int | null
  orders_not?: Int | null
  orders_in?: Int[] | Int | null
  orders_not_in?: Int[] | Int | null
  orders_lt?: Int | null
  orders_lte?: Int | null
  orders_gt?: Int | null
  orders_gte?: Int | null
}

export interface PermissionWhereUniqueInput {
  permission_id?: ID_Input | null
}

export interface RoleCreateInput {
  role_id?: ID_Input | null
  name?: String | null
  title?: String | null
  description?: String | null
  orders?: Int | null
}

export interface RolePermissionCreateInput {
  role_permission_id?: ID_Input | null
  role_id?: Int | null
  permission_id?: Int | null
}

export interface RolePermissionSubscriptionWhereInput {
  AND?: RolePermissionSubscriptionWhereInput[] | RolePermissionSubscriptionWhereInput | null
  OR?: RolePermissionSubscriptionWhereInput[] | RolePermissionSubscriptionWhereInput | null
  NOT?: RolePermissionSubscriptionWhereInput[] | RolePermissionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RolePermissionWhereInput | null
}

export interface RolePermissionUpdateInput {
  role_id?: Int | null
  permission_id?: Int | null
}

export interface RolePermissionUpdateManyMutationInput {
  role_id?: Int | null
  permission_id?: Int | null
}

export interface RolePermissionWhereInput {
  AND?: RolePermissionWhereInput[] | RolePermissionWhereInput | null
  OR?: RolePermissionWhereInput[] | RolePermissionWhereInput | null
  NOT?: RolePermissionWhereInput[] | RolePermissionWhereInput | null
  role_permission_id?: ID_Input | null
  role_permission_id_not?: ID_Input | null
  role_permission_id_in?: ID_Output[] | ID_Output | null
  role_permission_id_not_in?: ID_Output[] | ID_Output | null
  role_permission_id_lt?: ID_Input | null
  role_permission_id_lte?: ID_Input | null
  role_permission_id_gt?: ID_Input | null
  role_permission_id_gte?: ID_Input | null
  role_permission_id_contains?: ID_Input | null
  role_permission_id_not_contains?: ID_Input | null
  role_permission_id_starts_with?: ID_Input | null
  role_permission_id_not_starts_with?: ID_Input | null
  role_permission_id_ends_with?: ID_Input | null
  role_permission_id_not_ends_with?: ID_Input | null
  role_id?: Int | null
  role_id_not?: Int | null
  role_id_in?: Int[] | Int | null
  role_id_not_in?: Int[] | Int | null
  role_id_lt?: Int | null
  role_id_lte?: Int | null
  role_id_gt?: Int | null
  role_id_gte?: Int | null
  permission_id?: Int | null
  permission_id_not?: Int | null
  permission_id_in?: Int[] | Int | null
  permission_id_not_in?: Int[] | Int | null
  permission_id_lt?: Int | null
  permission_id_lte?: Int | null
  permission_id_gt?: Int | null
  permission_id_gte?: Int | null
}

export interface RolePermissionWhereUniqueInput {
  role_permission_id?: ID_Input | null
}

export interface RoleSubscriptionWhereInput {
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput | null
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput | null
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RoleWhereInput | null
}

export interface RoleUpdateInput {
  name?: String | null
  title?: String | null
  description?: String | null
  orders?: Int | null
}

export interface RoleUpdateManyMutationInput {
  name?: String | null
  title?: String | null
  description?: String | null
  orders?: Int | null
}

export interface RoleWhereInput {
  AND?: RoleWhereInput[] | RoleWhereInput | null
  OR?: RoleWhereInput[] | RoleWhereInput | null
  NOT?: RoleWhereInput[] | RoleWhereInput | null
  role_id?: ID_Input | null
  role_id_not?: ID_Input | null
  role_id_in?: ID_Output[] | ID_Output | null
  role_id_not_in?: ID_Output[] | ID_Output | null
  role_id_lt?: ID_Input | null
  role_id_lte?: ID_Input | null
  role_id_gt?: ID_Input | null
  role_id_gte?: ID_Input | null
  role_id_contains?: ID_Input | null
  role_id_not_contains?: ID_Input | null
  role_id_starts_with?: ID_Input | null
  role_id_not_starts_with?: ID_Input | null
  role_id_ends_with?: ID_Input | null
  role_id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  ctime?: DateTime | null
  ctime_not?: DateTime | null
  ctime_in?: DateTime[] | DateTime | null
  ctime_not_in?: DateTime[] | DateTime | null
  ctime_lt?: DateTime | null
  ctime_lte?: DateTime | null
  ctime_gt?: DateTime | null
  ctime_gte?: DateTime | null
  orders?: Int | null
  orders_not?: Int | null
  orders_in?: Int[] | Int | null
  orders_not_in?: Int[] | Int | null
  orders_lt?: Int | null
  orders_lte?: Int | null
  orders_gt?: Int | null
  orders_gte?: Int | null
}

export interface RoleWhereUniqueInput {
  role_id?: ID_Input | null
}

export interface SystemCreateInput {
  system_id?: ID_Input | null
  icon?: String | null
  banner?: String | null
  theme?: String | null
  basepath?: String | null
  status: Int
  name?: String | null
  title?: String | null
  description?: String | null
  orders?: Int | null
}

export interface SystemSubscriptionWhereInput {
  AND?: SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput | null
  OR?: SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput | null
  NOT?: SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SystemWhereInput | null
}

export interface SystemUpdateInput {
  icon?: String | null
  banner?: String | null
  theme?: String | null
  basepath?: String | null
  status?: Int | null
  name?: String | null
  title?: String | null
  description?: String | null
  orders?: Int | null
}

export interface SystemUpdateManyMutationInput {
  icon?: String | null
  banner?: String | null
  theme?: String | null
  basepath?: String | null
  status?: Int | null
  name?: String | null
  title?: String | null
  description?: String | null
  orders?: Int | null
}

export interface SystemWhereInput {
  AND?: SystemWhereInput[] | SystemWhereInput | null
  OR?: SystemWhereInput[] | SystemWhereInput | null
  NOT?: SystemWhereInput[] | SystemWhereInput | null
  system_id?: ID_Input | null
  system_id_not?: ID_Input | null
  system_id_in?: ID_Output[] | ID_Output | null
  system_id_not_in?: ID_Output[] | ID_Output | null
  system_id_lt?: ID_Input | null
  system_id_lte?: ID_Input | null
  system_id_gt?: ID_Input | null
  system_id_gte?: ID_Input | null
  system_id_contains?: ID_Input | null
  system_id_not_contains?: ID_Input | null
  system_id_starts_with?: ID_Input | null
  system_id_not_starts_with?: ID_Input | null
  system_id_ends_with?: ID_Input | null
  system_id_not_ends_with?: ID_Input | null
  icon?: String | null
  icon_not?: String | null
  icon_in?: String[] | String | null
  icon_not_in?: String[] | String | null
  icon_lt?: String | null
  icon_lte?: String | null
  icon_gt?: String | null
  icon_gte?: String | null
  icon_contains?: String | null
  icon_not_contains?: String | null
  icon_starts_with?: String | null
  icon_not_starts_with?: String | null
  icon_ends_with?: String | null
  icon_not_ends_with?: String | null
  banner?: String | null
  banner_not?: String | null
  banner_in?: String[] | String | null
  banner_not_in?: String[] | String | null
  banner_lt?: String | null
  banner_lte?: String | null
  banner_gt?: String | null
  banner_gte?: String | null
  banner_contains?: String | null
  banner_not_contains?: String | null
  banner_starts_with?: String | null
  banner_not_starts_with?: String | null
  banner_ends_with?: String | null
  banner_not_ends_with?: String | null
  theme?: String | null
  theme_not?: String | null
  theme_in?: String[] | String | null
  theme_not_in?: String[] | String | null
  theme_lt?: String | null
  theme_lte?: String | null
  theme_gt?: String | null
  theme_gte?: String | null
  theme_contains?: String | null
  theme_not_contains?: String | null
  theme_starts_with?: String | null
  theme_not_starts_with?: String | null
  theme_ends_with?: String | null
  theme_not_ends_with?: String | null
  basepath?: String | null
  basepath_not?: String | null
  basepath_in?: String[] | String | null
  basepath_not_in?: String[] | String | null
  basepath_lt?: String | null
  basepath_lte?: String | null
  basepath_gt?: String | null
  basepath_gte?: String | null
  basepath_contains?: String | null
  basepath_not_contains?: String | null
  basepath_starts_with?: String | null
  basepath_not_starts_with?: String | null
  basepath_ends_with?: String | null
  basepath_not_ends_with?: String | null
  status?: Int | null
  status_not?: Int | null
  status_in?: Int[] | Int | null
  status_not_in?: Int[] | Int | null
  status_lt?: Int | null
  status_lte?: Int | null
  status_gt?: Int | null
  status_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  ctime?: DateTime | null
  ctime_not?: DateTime | null
  ctime_in?: DateTime[] | DateTime | null
  ctime_not_in?: DateTime[] | DateTime | null
  ctime_lt?: DateTime | null
  ctime_lte?: DateTime | null
  ctime_gt?: DateTime | null
  ctime_gte?: DateTime | null
  orders?: Int | null
  orders_not?: Int | null
  orders_in?: Int[] | Int | null
  orders_not_in?: Int[] | Int | null
  orders_lt?: Int | null
  orders_lte?: Int | null
  orders_gt?: Int | null
  orders_gte?: Int | null
}

export interface SystemWhereUniqueInput {
  system_id?: ID_Input | null
}

export interface UserCreateInput {
  user_id?: ID_Input | null
  username?: String | null
  password: String
  salt?: String | null
  realname?: String | null
  avatar?: String | null
  phone?: String | null
  email?: String | null
  sex: Int
  locked: Int
}

export interface UserOrgainizationCreateInput {
  user_orgainization_id?: ID_Input | null
  user_id?: Int | null
  orgainization_id?: Int | null
}

export interface UserOrgainizationSubscriptionWhereInput {
  AND?: UserOrgainizationSubscriptionWhereInput[] | UserOrgainizationSubscriptionWhereInput | null
  OR?: UserOrgainizationSubscriptionWhereInput[] | UserOrgainizationSubscriptionWhereInput | null
  NOT?: UserOrgainizationSubscriptionWhereInput[] | UserOrgainizationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserOrgainizationWhereInput | null
}

export interface UserOrgainizationUpdateInput {
  user_id?: Int | null
  orgainization_id?: Int | null
}

export interface UserOrgainizationUpdateManyMutationInput {
  user_id?: Int | null
  orgainization_id?: Int | null
}

export interface UserOrgainizationWhereInput {
  AND?: UserOrgainizationWhereInput[] | UserOrgainizationWhereInput | null
  OR?: UserOrgainizationWhereInput[] | UserOrgainizationWhereInput | null
  NOT?: UserOrgainizationWhereInput[] | UserOrgainizationWhereInput | null
  user_orgainization_id?: ID_Input | null
  user_orgainization_id_not?: ID_Input | null
  user_orgainization_id_in?: ID_Output[] | ID_Output | null
  user_orgainization_id_not_in?: ID_Output[] | ID_Output | null
  user_orgainization_id_lt?: ID_Input | null
  user_orgainization_id_lte?: ID_Input | null
  user_orgainization_id_gt?: ID_Input | null
  user_orgainization_id_gte?: ID_Input | null
  user_orgainization_id_contains?: ID_Input | null
  user_orgainization_id_not_contains?: ID_Input | null
  user_orgainization_id_starts_with?: ID_Input | null
  user_orgainization_id_not_starts_with?: ID_Input | null
  user_orgainization_id_ends_with?: ID_Input | null
  user_orgainization_id_not_ends_with?: ID_Input | null
  user_id?: Int | null
  user_id_not?: Int | null
  user_id_in?: Int[] | Int | null
  user_id_not_in?: Int[] | Int | null
  user_id_lt?: Int | null
  user_id_lte?: Int | null
  user_id_gt?: Int | null
  user_id_gte?: Int | null
  orgainization_id?: Int | null
  orgainization_id_not?: Int | null
  orgainization_id_in?: Int[] | Int | null
  orgainization_id_not_in?: Int[] | Int | null
  orgainization_id_lt?: Int | null
  orgainization_id_lte?: Int | null
  orgainization_id_gt?: Int | null
  orgainization_id_gte?: Int | null
}

export interface UserOrgainizationWhereUniqueInput {
  user_orgainization_id?: ID_Input | null
}

export interface UserPermissionCreateInput {
  user_permission_id?: ID_Input | null
  user_id: Int
  permission_id: Int
  type: Int
}

export interface UserPermissionSubscriptionWhereInput {
  AND?: UserPermissionSubscriptionWhereInput[] | UserPermissionSubscriptionWhereInput | null
  OR?: UserPermissionSubscriptionWhereInput[] | UserPermissionSubscriptionWhereInput | null
  NOT?: UserPermissionSubscriptionWhereInput[] | UserPermissionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserPermissionWhereInput | null
}

export interface UserPermissionUpdateInput {
  user_id?: Int | null
  permission_id?: Int | null
  type?: Int | null
}

export interface UserPermissionUpdateManyMutationInput {
  user_id?: Int | null
  permission_id?: Int | null
  type?: Int | null
}

export interface UserPermissionWhereInput {
  AND?: UserPermissionWhereInput[] | UserPermissionWhereInput | null
  OR?: UserPermissionWhereInput[] | UserPermissionWhereInput | null
  NOT?: UserPermissionWhereInput[] | UserPermissionWhereInput | null
  user_permission_id?: ID_Input | null
  user_permission_id_not?: ID_Input | null
  user_permission_id_in?: ID_Output[] | ID_Output | null
  user_permission_id_not_in?: ID_Output[] | ID_Output | null
  user_permission_id_lt?: ID_Input | null
  user_permission_id_lte?: ID_Input | null
  user_permission_id_gt?: ID_Input | null
  user_permission_id_gte?: ID_Input | null
  user_permission_id_contains?: ID_Input | null
  user_permission_id_not_contains?: ID_Input | null
  user_permission_id_starts_with?: ID_Input | null
  user_permission_id_not_starts_with?: ID_Input | null
  user_permission_id_ends_with?: ID_Input | null
  user_permission_id_not_ends_with?: ID_Input | null
  user_id?: Int | null
  user_id_not?: Int | null
  user_id_in?: Int[] | Int | null
  user_id_not_in?: Int[] | Int | null
  user_id_lt?: Int | null
  user_id_lte?: Int | null
  user_id_gt?: Int | null
  user_id_gte?: Int | null
  permission_id?: Int | null
  permission_id_not?: Int | null
  permission_id_in?: Int[] | Int | null
  permission_id_not_in?: Int[] | Int | null
  permission_id_lt?: Int | null
  permission_id_lte?: Int | null
  permission_id_gt?: Int | null
  permission_id_gte?: Int | null
  type?: Int | null
  type_not?: Int | null
  type_in?: Int[] | Int | null
  type_not_in?: Int[] | Int | null
  type_lt?: Int | null
  type_lte?: Int | null
  type_gt?: Int | null
  type_gte?: Int | null
}

export interface UserPermissionWhereUniqueInput {
  user_permission_id?: ID_Input | null
}

export interface UserRoleCreateInput {
  user_role_id?: ID_Input | null
  user_id: Int
  role_id: Int
}

export interface UserRoleSubscriptionWhereInput {
  AND?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput | null
  OR?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput | null
  NOT?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserRoleWhereInput | null
}

export interface UserRoleUpdateInput {
  user_id?: Int | null
  role_id?: Int | null
}

export interface UserRoleUpdateManyMutationInput {
  user_id?: Int | null
  role_id?: Int | null
}

export interface UserRoleWhereInput {
  AND?: UserRoleWhereInput[] | UserRoleWhereInput | null
  OR?: UserRoleWhereInput[] | UserRoleWhereInput | null
  NOT?: UserRoleWhereInput[] | UserRoleWhereInput | null
  user_role_id?: ID_Input | null
  user_role_id_not?: ID_Input | null
  user_role_id_in?: ID_Output[] | ID_Output | null
  user_role_id_not_in?: ID_Output[] | ID_Output | null
  user_role_id_lt?: ID_Input | null
  user_role_id_lte?: ID_Input | null
  user_role_id_gt?: ID_Input | null
  user_role_id_gte?: ID_Input | null
  user_role_id_contains?: ID_Input | null
  user_role_id_not_contains?: ID_Input | null
  user_role_id_starts_with?: ID_Input | null
  user_role_id_not_starts_with?: ID_Input | null
  user_role_id_ends_with?: ID_Input | null
  user_role_id_not_ends_with?: ID_Input | null
  user_id?: Int | null
  user_id_not?: Int | null
  user_id_in?: Int[] | Int | null
  user_id_not_in?: Int[] | Int | null
  user_id_lt?: Int | null
  user_id_lte?: Int | null
  user_id_gt?: Int | null
  user_id_gte?: Int | null
  role_id?: Int | null
  role_id_not?: Int | null
  role_id_in?: Int[] | Int | null
  role_id_not_in?: Int[] | Int | null
  role_id_lt?: Int | null
  role_id_lte?: Int | null
  role_id_gt?: Int | null
  role_id_gte?: Int | null
}

export interface UserRoleWhereUniqueInput {
  user_role_id?: ID_Input | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  username?: String | null
  password?: String | null
  salt?: String | null
  realname?: String | null
  avatar?: String | null
  phone?: String | null
  email?: String | null
  sex?: Int | null
  locked?: Int | null
}

export interface UserUpdateManyMutationInput {
  username?: String | null
  password?: String | null
  salt?: String | null
  realname?: String | null
  avatar?: String | null
  phone?: String | null
  email?: String | null
  sex?: Int | null
  locked?: Int | null
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  user_id?: ID_Input | null
  user_id_not?: ID_Input | null
  user_id_in?: ID_Output[] | ID_Output | null
  user_id_not_in?: ID_Output[] | ID_Output | null
  user_id_lt?: ID_Input | null
  user_id_lte?: ID_Input | null
  user_id_gt?: ID_Input | null
  user_id_gte?: ID_Input | null
  user_id_contains?: ID_Input | null
  user_id_not_contains?: ID_Input | null
  user_id_starts_with?: ID_Input | null
  user_id_not_starts_with?: ID_Input | null
  user_id_ends_with?: ID_Input | null
  user_id_not_ends_with?: ID_Input | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  salt?: String | null
  salt_not?: String | null
  salt_in?: String[] | String | null
  salt_not_in?: String[] | String | null
  salt_lt?: String | null
  salt_lte?: String | null
  salt_gt?: String | null
  salt_gte?: String | null
  salt_contains?: String | null
  salt_not_contains?: String | null
  salt_starts_with?: String | null
  salt_not_starts_with?: String | null
  salt_ends_with?: String | null
  salt_not_ends_with?: String | null
  realname?: String | null
  realname_not?: String | null
  realname_in?: String[] | String | null
  realname_not_in?: String[] | String | null
  realname_lt?: String | null
  realname_lte?: String | null
  realname_gt?: String | null
  realname_gte?: String | null
  realname_contains?: String | null
  realname_not_contains?: String | null
  realname_starts_with?: String | null
  realname_not_starts_with?: String | null
  realname_ends_with?: String | null
  realname_not_ends_with?: String | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  sex?: Int | null
  sex_not?: Int | null
  sex_in?: Int[] | Int | null
  sex_not_in?: Int[] | Int | null
  sex_lt?: Int | null
  sex_lte?: Int | null
  sex_gt?: Int | null
  sex_gte?: Int | null
  locked?: Int | null
  locked_not?: Int | null
  locked_in?: Int[] | Int | null
  locked_not_in?: Int[] | Int | null
  locked_lt?: Int | null
  locked_lte?: Int | null
  locked_gt?: Int | null
  locked_gte?: Int | null
  ctime?: DateTime | null
  ctime_not?: DateTime | null
  ctime_in?: DateTime[] | DateTime | null
  ctime_not_in?: DateTime[] | DateTime | null
  ctime_lt?: DateTime | null
  ctime_lte?: DateTime | null
  ctime_gt?: DateTime | null
  ctime_gte?: DateTime | null
}

export interface UserWhereUniqueInput {
  user_id?: ID_Input | null
  username?: String | null
  phone?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateLog {
  count: Int
}

export interface AggregateOrgainization {
  count: Int
}

export interface AggregatePermission {
  count: Int
}

export interface AggregateRole {
  count: Int
}

export interface AggregateRolePermission {
  count: Int
}

export interface AggregateSystem {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateUserOrgainization {
  count: Int
}

export interface AggregateUserPermission {
  count: Int
}

export interface AggregateUserRole {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Log {
  log_id: ID_Output
  description?: String | null
  username: String
  start_time: Int
  spend_time: Int
  basepath: String
  uri: String
  url: String
  method: String
  parameter: String
  user_agent?: String | null
  ip?: String | null
  result?: String | null
  permission?: String | null
}

/*
 * A connection to a list of items.

 */
export interface LogConnection {
  pageInfo: PageInfo
  edges: Array<LogEdge | null>
  aggregate: AggregateLog
}

/*
 * An edge in a connection.

 */
export interface LogEdge {
  node: Log
  cursor: String
}

export interface LogPreviousValues {
  log_id: ID_Output
  description?: String | null
  username: String
  start_time: Int
  spend_time: Int
  basepath: String
  uri: String
  url: String
  method: String
  parameter: String
  user_agent?: String | null
  ip?: String | null
  result?: String | null
  permission?: String | null
}

export interface LogSubscriptionPayload {
  mutation: MutationType
  node?: Log | null
  updatedFields?: Array<String> | null
  previousValues?: LogPreviousValues | null
}

export interface Orgainization {
  orgainization_id: ID_Output
  pid?: Int | null
  name?: String | null
  description?: String | null
  ctime: DateTime
}

/*
 * A connection to a list of items.

 */
export interface OrgainizationConnection {
  pageInfo: PageInfo
  edges: Array<OrgainizationEdge | null>
  aggregate: AggregateOrgainization
}

/*
 * An edge in a connection.

 */
export interface OrgainizationEdge {
  node: Orgainization
  cursor: String
}

export interface OrgainizationPreviousValues {
  orgainization_id: ID_Output
  pid?: Int | null
  name?: String | null
  description?: String | null
  ctime: DateTime
}

export interface OrgainizationSubscriptionPayload {
  mutation: MutationType
  node?: Orgainization | null
  updatedFields?: Array<String> | null
  previousValues?: OrgainizationPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Permission {
  permission_id: ID_Output
  system_id: Int
  pid?: Int | null
  name: String
  type: Int
  permission_value?: String | null
  uri?: String | null
  icon?: String | null
  status: Int
  ctime: DateTime
  orders?: Int | null
}

/*
 * A connection to a list of items.

 */
export interface PermissionConnection {
  pageInfo: PageInfo
  edges: Array<PermissionEdge | null>
  aggregate: AggregatePermission
}

/*
 * An edge in a connection.

 */
export interface PermissionEdge {
  node: Permission
  cursor: String
}

export interface PermissionPreviousValues {
  permission_id: ID_Output
  system_id: Int
  pid?: Int | null
  name: String
  type: Int
  permission_value?: String | null
  uri?: String | null
  icon?: String | null
  status: Int
  ctime: DateTime
  orders?: Int | null
}

export interface PermissionSubscriptionPayload {
  mutation: MutationType
  node?: Permission | null
  updatedFields?: Array<String> | null
  previousValues?: PermissionPreviousValues | null
}

export interface Role {
  role_id: ID_Output
  name?: String | null
  title?: String | null
  description?: String | null
  ctime: DateTime
  orders?: Int | null
}

/*
 * A connection to a list of items.

 */
export interface RoleConnection {
  pageInfo: PageInfo
  edges: Array<RoleEdge | null>
  aggregate: AggregateRole
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface RolePermission {
  role_permission_id: ID_Output
  role_id?: Int | null
  permission_id?: Int | null
}

/*
 * A connection to a list of items.

 */
export interface RolePermissionConnection {
  pageInfo: PageInfo
  edges: Array<RolePermissionEdge | null>
  aggregate: AggregateRolePermission
}

/*
 * An edge in a connection.

 */
export interface RolePermissionEdge {
  node: RolePermission
  cursor: String
}

export interface RolePermissionPreviousValues {
  role_permission_id: ID_Output
  role_id?: Int | null
  permission_id?: Int | null
}

export interface RolePermissionSubscriptionPayload {
  mutation: MutationType
  node?: RolePermission | null
  updatedFields?: Array<String> | null
  previousValues?: RolePermissionPreviousValues | null
}

export interface RolePreviousValues {
  role_id: ID_Output
  name?: String | null
  title?: String | null
  description?: String | null
  ctime: DateTime
  orders?: Int | null
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role | null
  updatedFields?: Array<String> | null
  previousValues?: RolePreviousValues | null
}

export interface System {
  system_id: ID_Output
  icon?: String | null
  banner?: String | null
  theme?: String | null
  basepath?: String | null
  status: Int
  name?: String | null
  title?: String | null
  description?: String | null
  ctime: DateTime
  orders?: Int | null
}

/*
 * A connection to a list of items.

 */
export interface SystemConnection {
  pageInfo: PageInfo
  edges: Array<SystemEdge | null>
  aggregate: AggregateSystem
}

/*
 * An edge in a connection.

 */
export interface SystemEdge {
  node: System
  cursor: String
}

export interface SystemPreviousValues {
  system_id: ID_Output
  icon?: String | null
  banner?: String | null
  theme?: String | null
  basepath?: String | null
  status: Int
  name?: String | null
  title?: String | null
  description?: String | null
  ctime: DateTime
  orders?: Int | null
}

export interface SystemSubscriptionPayload {
  mutation: MutationType
  node?: System | null
  updatedFields?: Array<String> | null
  previousValues?: SystemPreviousValues | null
}

export interface User {
  user_id: ID_Output
  username?: String | null
  password: String
  salt?: String | null
  realname?: String | null
  avatar?: String | null
  phone?: String | null
  email?: String | null
  sex: Int
  locked: Int
  ctime: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserOrgainization {
  user_orgainization_id: ID_Output
  user_id?: Int | null
  orgainization_id?: Int | null
}

/*
 * A connection to a list of items.

 */
export interface UserOrgainizationConnection {
  pageInfo: PageInfo
  edges: Array<UserOrgainizationEdge | null>
  aggregate: AggregateUserOrgainization
}

/*
 * An edge in a connection.

 */
export interface UserOrgainizationEdge {
  node: UserOrgainization
  cursor: String
}

export interface UserOrgainizationPreviousValues {
  user_orgainization_id: ID_Output
  user_id?: Int | null
  orgainization_id?: Int | null
}

export interface UserOrgainizationSubscriptionPayload {
  mutation: MutationType
  node?: UserOrgainization | null
  updatedFields?: Array<String> | null
  previousValues?: UserOrgainizationPreviousValues | null
}

export interface UserPermission {
  user_permission_id: ID_Output
  user_id: Int
  permission_id: Int
  type: Int
}

/*
 * A connection to a list of items.

 */
export interface UserPermissionConnection {
  pageInfo: PageInfo
  edges: Array<UserPermissionEdge | null>
  aggregate: AggregateUserPermission
}

/*
 * An edge in a connection.

 */
export interface UserPermissionEdge {
  node: UserPermission
  cursor: String
}

export interface UserPermissionPreviousValues {
  user_permission_id: ID_Output
  user_id: Int
  permission_id: Int
  type: Int
}

export interface UserPermissionSubscriptionPayload {
  mutation: MutationType
  node?: UserPermission | null
  updatedFields?: Array<String> | null
  previousValues?: UserPermissionPreviousValues | null
}

export interface UserPreviousValues {
  user_id: ID_Output
  username?: String | null
  password: String
  salt?: String | null
  realname?: String | null
  avatar?: String | null
  phone?: String | null
  email?: String | null
  sex: Int
  locked: Int
  ctime: DateTime
}

export interface UserRole {
  user_role_id: ID_Output
  user_id: Int
  role_id: Int
}

/*
 * A connection to a list of items.

 */
export interface UserRoleConnection {
  pageInfo: PageInfo
  edges: Array<UserRoleEdge | null>
  aggregate: AggregateUserRole
}

/*
 * An edge in a connection.

 */
export interface UserRoleEdge {
  node: UserRole
  cursor: String
}

export interface UserRolePreviousValues {
  user_role_id: ID_Output
  user_id: Int
  role_id: Int
}

export interface UserRoleSubscriptionPayload {
  mutation: MutationType
  node?: UserRole | null
  updatedFields?: Array<String> | null
  previousValues?: UserRolePreviousValues | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string