import { Observable } from 'rxjs';

/**
 * Namespace notadd_rpc_demo.
 * @exports notadd_rpc_demo
 * @namespace
 */
export namespace notadd_rpc_demo {

    /**
     * Contains all the RPC service clients.
     * @exports notadd_rpc_demo.ClientFactory
     * @interface
     */
    export interface ClientFactory {

        /**
         * Returns the RootService service client.
         * @returns {notadd_rpc_demo.RootService}
         */
        getRootService(): notadd_rpc_demo.RootService;
    }

    /**
     * Builder for an RPC service server.
     * @exports notadd_rpc_demo.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {

        /**
         * Adds a RootService service implementation.
         * @param {notadd_rpc_demo.RootService} impl RootService service implementation
         * @returns {notadd_rpc_demo.ServerBuilder}
         */
        addRootService(impl: notadd_rpc_demo.RootService): notadd_rpc_demo.ServerBuilder;
    }

    /**
     * Constructs a new RootService service.
     * @exports notadd_rpc_demo.RootService
     * @interface
     */
    export interface RootService {

        /**
         * Calls SayHello.
         * @param {notadd_rpc_demo.SayHelloRequest} request SayHelloRequest message or plain object
         * @returns {Observable<notadd_rpc_demo.SayHelloResponse>}
         */
        sayHello(request: notadd_rpc_demo.SayHelloRequest): Observable<notadd_rpc_demo.SayHelloResponse>;
    }

    /**
     * Constructs a new SayHelloRequest.
     * @exports notadd_rpc_demo.SayHelloRequest
     * @interface
     */
    export interface SayHelloRequest {

        /**
         * SayHelloRequest name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new SayHelloResponse.
     * @exports notadd_rpc_demo.SayHelloResponse
     * @interface
     */
    export interface SayHelloResponse {

        /**
         * SayHelloResponse msg.
         * @type {string|undefined}
         */
        msg?: string;
    }
}

/**
 * Namespace notadd_module_user.
 * @exports notadd_module_user
 * @namespace
 */
export namespace notadd_module_user {

    /**
     * Contains all the RPC service clients.
     * @exports notadd_module_user.ClientFactory
     * @interface
     */
    export interface ClientFactory {

        /**
         * Returns the InfoGroupService service client.
         * @returns {notadd_module_user.InfoGroupService}
         */
        getInfoGroupService(): notadd_module_user.InfoGroupService;

        /**
         * Returns the InfoItemService service client.
         * @returns {notadd_module_user.InfoItemService}
         */
        getInfoItemService(): notadd_module_user.InfoItemService;

        /**
         * Returns the OrganizationService service client.
         * @returns {notadd_module_user.OrganizationService}
         */
        getOrganizationService(): notadd_module_user.OrganizationService;

        /**
         * Returns the SystemModuleService service client.
         * @returns {notadd_module_user.SystemModuleService}
         */
        getSystemModuleService(): notadd_module_user.SystemModuleService;

        /**
         * Returns the ResourceService service client.
         * @returns {notadd_module_user.ResourceService}
         */
        getResourceService(): notadd_module_user.ResourceService;

        /**
         * Returns the RoleService service client.
         * @returns {notadd_module_user.RoleService}
         */
        getRoleService(): notadd_module_user.RoleService;

        /**
         * Returns the UserService service client.
         * @returns {notadd_module_user.UserService}
         */
        getUserService(): notadd_module_user.UserService;
    }

    /**
     * Builder for an RPC service server.
     * @exports notadd_module_user.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {

        /**
         * Adds a InfoGroupService service implementation.
         * @param {notadd_module_user.InfoGroupService} impl InfoGroupService service implementation
         * @returns {notadd_module_user.ServerBuilder}
         */
        addInfoGroupService(impl: notadd_module_user.InfoGroupService): notadd_module_user.ServerBuilder;

        /**
         * Adds a InfoItemService service implementation.
         * @param {notadd_module_user.InfoItemService} impl InfoItemService service implementation
         * @returns {notadd_module_user.ServerBuilder}
         */
        addInfoItemService(impl: notadd_module_user.InfoItemService): notadd_module_user.ServerBuilder;

        /**
         * Adds a OrganizationService service implementation.
         * @param {notadd_module_user.OrganizationService} impl OrganizationService service implementation
         * @returns {notadd_module_user.ServerBuilder}
         */
        addOrganizationService(impl: notadd_module_user.OrganizationService): notadd_module_user.ServerBuilder;

        /**
         * Adds a SystemModuleService service implementation.
         * @param {notadd_module_user.SystemModuleService} impl SystemModuleService service implementation
         * @returns {notadd_module_user.ServerBuilder}
         */
        addSystemModuleService(impl: notadd_module_user.SystemModuleService): notadd_module_user.ServerBuilder;

        /**
         * Adds a ResourceService service implementation.
         * @param {notadd_module_user.ResourceService} impl ResourceService service implementation
         * @returns {notadd_module_user.ServerBuilder}
         */
        addResourceService(impl: notadd_module_user.ResourceService): notadd_module_user.ServerBuilder;

        /**
         * Adds a RoleService service implementation.
         * @param {notadd_module_user.RoleService} impl RoleService service implementation
         * @returns {notadd_module_user.ServerBuilder}
         */
        addRoleService(impl: notadd_module_user.RoleService): notadd_module_user.ServerBuilder;

        /**
         * Adds a UserService service implementation.
         * @param {notadd_module_user.UserService} impl UserService service implementation
         * @returns {notadd_module_user.ServerBuilder}
         */
        addUserService(impl: notadd_module_user.UserService): notadd_module_user.ServerBuilder;
    }

    /**
     * Constructs a new PlaceholderRequest.
     * @exports notadd_module_user.PlaceholderRequest
     * @interface
     */
    export interface PlaceholderRequest {
    }

    /**
     * Constructs a new StringDataResponse.
     * @exports notadd_module_user.StringDataResponse
     * @interface
     */
    export interface StringDataResponse {

        /**
         * StringDataResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * StringDataResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * StringDataResponse data.
         * @type {string|undefined}
         */
        data?: string;
    }

    /**
     * Constructs a new FindDataByPageRequest.
     * @exports notadd_module_user.FindDataByPageRequest
     * @interface
     */
    export interface FindDataByPageRequest {

        /**
         * FindDataByPageRequest pageNumber.
         * @type {number|undefined}
         */
        pageNumber?: number;

        /**
         * FindDataByPageRequest pageSize.
         * @type {number|undefined}
         */
        pageSize?: number;
    }

    /**
     * Constructs a new InfoGroupService service.
     * @exports notadd_module_user.InfoGroupService
     * @interface
     */
    export interface InfoGroupService {

        /**
         * Calls CreateInfoGroup.
         * @param {notadd_module_user.CreateInfoGroupRequest} request CreateInfoGroupRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        createInfoGroup(request: notadd_module_user.CreateInfoGroupRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteInfoGroup.
         * @param {notadd_module_user.DeleteInfoGroupRequest} request DeleteInfoGroupRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteInfoGroup(request: notadd_module_user.DeleteInfoGroupRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls UpdateInfoGroup.
         * @param {notadd_module_user.UpdateInfoGroupRequest} request UpdateInfoGroupRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        updateInfoGroup(request: notadd_module_user.UpdateInfoGroupRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls AddInfoItemToInfoGroup.
         * @param {notadd_module_user.AddInfoItemToInfoGroupRequest} request AddInfoItemToInfoGroupRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        addInfoItemToInfoGroup(request: notadd_module_user.AddInfoItemToInfoGroupRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteIntoItemFromInfoGroup.
         * @param {notadd_module_user.DeleteIntoItemFromInfoGroupRequest} request DeleteIntoItemFromInfoGroupRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteIntoItemFromInfoGroup(request: notadd_module_user.DeleteIntoItemFromInfoGroupRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls FindAllInfoGroup.
         * @param {notadd_module_user.FindDataByPageRequest} request FindDataByPageRequest message or plain object
         * @returns {Observable<notadd_module_user.FindAllInfoGroupResponse>}
         */
        findAllInfoGroup(request: notadd_module_user.FindDataByPageRequest): Observable<notadd_module_user.FindAllInfoGroupResponse>;

        /**
         * Calls FindInfoItemsByGroupId.
         * @param {notadd_module_user.FindInfoItemsByGroupIdRequest} request FindInfoItemsByGroupIdRequest message or plain object
         * @returns {Observable<notadd_module_user.FindInfoItemsByGroupIdResponse>}
         */
        findInfoItemsByGroupId(request: notadd_module_user.FindInfoItemsByGroupIdRequest): Observable<notadd_module_user.FindInfoItemsByGroupIdResponse>;
    }

    /**
     * Constructs a new CreateInfoGroupRequest.
     * @exports notadd_module_user.CreateInfoGroupRequest
     * @interface
     */
    export interface CreateInfoGroupRequest {

        /**
         * CreateInfoGroupRequest name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * CreateInfoGroupRequest roleId.
         * @type {number|undefined}
         */
        roleId?: number;
    }

    /**
     * Constructs a new DeleteInfoGroupRequest.
     * @exports notadd_module_user.DeleteInfoGroupRequest
     * @interface
     */
    export interface DeleteInfoGroupRequest {

        /**
         * DeleteInfoGroupRequest groupId.
         * @type {number|undefined}
         */
        groupId?: number;
    }

    /**
     * Constructs a new UpdateInfoGroupRequest.
     * @exports notadd_module_user.UpdateInfoGroupRequest
     * @interface
     */
    export interface UpdateInfoGroupRequest {

        /**
         * UpdateInfoGroupRequest groupId.
         * @type {number|undefined}
         */
        groupId?: number;

        /**
         * UpdateInfoGroupRequest name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * UpdateInfoGroupRequest roleId.
         * @type {number|undefined}
         */
        roleId?: number;
    }

    /**
     * Constructs a new AddInfoItemToInfoGroupRequest.
     * @exports notadd_module_user.AddInfoItemToInfoGroupRequest
     * @interface
     */
    export interface AddInfoItemToInfoGroupRequest {

        /**
         * AddInfoItemToInfoGroupRequest infoGroupId.
         * @type {number|undefined}
         */
        infoGroupId?: number;

        /**
         * AddInfoItemToInfoGroupRequest infoItemIds.
         * @type {Array.<number>|undefined}
         */
        infoItemIds?: number[];
    }

    /**
     * Constructs a new DeleteIntoItemFromInfoGroupRequest.
     * @exports notadd_module_user.DeleteIntoItemFromInfoGroupRequest
     * @interface
     */
    export interface DeleteIntoItemFromInfoGroupRequest {

        /**
         * DeleteIntoItemFromInfoGroupRequest infoGroupId.
         * @type {number|undefined}
         */
        infoGroupId?: number;

        /**
         * DeleteIntoItemFromInfoGroupRequest infoItemIds.
         * @type {Array.<number>|undefined}
         */
        infoItemIds?: number[];
    }

    /**
     * Constructs a new FindAllInfoGroupResponse.
     * @exports notadd_module_user.FindAllInfoGroupResponse
     * @interface
     */
    export interface FindAllInfoGroupResponse {

        /**
         * FindAllInfoGroupResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindAllInfoGroupResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindAllInfoGroupResponse data.
         * @type {Array.<notadd_module_user.InfoGroup>|undefined}
         */
        data?: notadd_module_user.InfoGroup[];

        /**
         * FindAllInfoGroupResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    /**
     * Constructs a new InfoGroup.
     * @exports notadd_module_user.InfoGroup
     * @interface
     */
    export interface InfoGroup {

        /**
         * InfoGroup id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * InfoGroup name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new FindInfoItemsByGroupIdRequest.
     * @exports notadd_module_user.FindInfoItemsByGroupIdRequest
     * @interface
     */
    export interface FindInfoItemsByGroupIdRequest {

        /**
         * FindInfoItemsByGroupIdRequest infoGroupId.
         * @type {number|undefined}
         */
        infoGroupId?: number;
    }

    /**
     * Constructs a new FindInfoItemsByGroupIdResponse.
     * @exports notadd_module_user.FindInfoItemsByGroupIdResponse
     * @interface
     */
    export interface FindInfoItemsByGroupIdResponse {

        /**
         * FindInfoItemsByGroupIdResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindInfoItemsByGroupIdResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindInfoItemsByGroupIdResponse data.
         * @type {Array.<notadd_module_user.InfoItem>|undefined}
         */
        data?: notadd_module_user.InfoItem[];
    }

    /**
     * Constructs a new InfoItem.
     * @exports notadd_module_user.InfoItem
     * @interface
     */
    export interface InfoItem {

        /**
         * InfoItem id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * InfoItem name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * InfoItem description.
         * @type {string|undefined}
         */
        description?: string;

        /**
         * InfoItem type.
         * @type {string|undefined}
         */
        type?: string;

        /**
         * InfoItem registerDisplay.
         * @type {boolean|undefined}
         */
        registerDisplay?: boolean;

        /**
         * InfoItem informationDisplay.
         * @type {boolean|undefined}
         */
        informationDisplay?: boolean;

        /**
         * InfoItem order.
         * @type {number|undefined}
         */
        order?: number;
    }

    /**
     * Constructs a new InfoItemService service.
     * @exports notadd_module_user.InfoItemService
     * @interface
     */
    export interface InfoItemService {

        /**
         * Calls CreateInfoItem.
         * @param {notadd_module_user.CreateInfoItemRequest} request CreateInfoItemRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        createInfoItem(request: notadd_module_user.CreateInfoItemRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteInfoItem.
         * @param {notadd_module_user.DeleteInfoItemRequest} request DeleteInfoItemRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteInfoItem(request: notadd_module_user.DeleteInfoItemRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls UpdateInfoItem.
         * @param {notadd_module_user.UpdateInfoItemRequest} request UpdateInfoItemRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        updateInfoItem(request: notadd_module_user.UpdateInfoItemRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls FindAllInfoItem.
         * @param {notadd_module_user.FindDataByPageRequest} request FindDataByPageRequest message or plain object
         * @returns {Observable<notadd_module_user.FindAllInfoItemResponse>}
         */
        findAllInfoItem(request: notadd_module_user.FindDataByPageRequest): Observable<notadd_module_user.FindAllInfoItemResponse>;
    }

    /**
     * Constructs a new CreateInfoItemRequest.
     * @exports notadd_module_user.CreateInfoItemRequest
     * @interface
     */
    export interface CreateInfoItemRequest {

        /**
         * CreateInfoItemRequest infoItemInput.
         * @type {notadd_module_user.InfoItem|undefined}
         */
        infoItemInput?: notadd_module_user.InfoItem;
    }

    export namespace CreateInfoItemRequest {

        /**
         * Constructs a new InfoItemInput.
         * @exports notadd_module_user.CreateInfoItemRequest.InfoItemInput
         * @interface
         */
        export interface InfoItemInput {

            /**
             * InfoItemInput name.
             * @type {string|undefined}
             */
            name?: string;

            /**
             * InfoItemInput description.
             * @type {string|undefined}
             */
            description?: string;

            /**
             * InfoItemInput type.
             * @type {string|undefined}
             */
            type?: string;

            /**
             * InfoItemInput registerDisplay.
             * @type {boolean|undefined}
             */
            registerDisplay?: boolean;

            /**
             * InfoItemInput informationDisplay.
             * @type {boolean|undefined}
             */
            informationDisplay?: boolean;

            /**
             * InfoItemInput order.
             * @type {number|undefined}
             */
            order?: number;
        }
    }

    /**
     * Constructs a new DeleteInfoItemRequest.
     * @exports notadd_module_user.DeleteInfoItemRequest
     * @interface
     */
    export interface DeleteInfoItemRequest {

        /**
         * DeleteInfoItemRequest infoItemId.
         * @type {number|undefined}
         */
        infoItemId?: number;
    }

    /**
     * Constructs a new UpdateInfoItemRequest.
     * @exports notadd_module_user.UpdateInfoItemRequest
     * @interface
     */
    export interface UpdateInfoItemRequest {

        /**
         * UpdateInfoItemRequest updateInfoItemInput.
         * @type {notadd_module_user.InfoItem|undefined}
         */
        updateInfoItemInput?: notadd_module_user.InfoItem;
    }

    /**
     * Constructs a new FindAllInfoItemResponse.
     * @exports notadd_module_user.FindAllInfoItemResponse
     * @interface
     */
    export interface FindAllInfoItemResponse {

        /**
         * FindAllInfoItemResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindAllInfoItemResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindAllInfoItemResponse data.
         * @type {Array.<notadd_module_user.InfoItem>|undefined}
         */
        data?: notadd_module_user.InfoItem[];

        /**
         * FindAllInfoItemResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    /**
     * Constructs a new OrganizationService service.
     * @exports notadd_module_user.OrganizationService
     * @interface
     */
    export interface OrganizationService {

        /**
         * Calls CreateOrganization.
         * @param {notadd_module_user.CreateOrganizationRequest} request CreateOrganizationRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        createOrganization(request: notadd_module_user.CreateOrganizationRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls AddUsersToOrganization.
         * @param {notadd_module_user.AddUsersToOrganizationRequest} request AddUsersToOrganizationRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        addUsersToOrganization(request: notadd_module_user.AddUsersToOrganizationRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteOrganization.
         * @param {notadd_module_user.DeleteOrganizationRequest} request DeleteOrganizationRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteOrganization(request: notadd_module_user.DeleteOrganizationRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteUserFromOrganization.
         * @param {notadd_module_user.DeleteUserFromOrganizationRequest} request DeleteUserFromOrganizationRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteUserFromOrganization(request: notadd_module_user.DeleteUserFromOrganizationRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls UpdateOrganization.
         * @param {notadd_module_user.UpdateOrganizationRequest} request UpdateOrganizationRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        updateOrganization(request: notadd_module_user.UpdateOrganizationRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls FindRootOrganizations.
         * @param {notadd_module_user.PlaceholderRequest} request PlaceholderRequest message or plain object
         * @returns {Observable<notadd_module_user.FindRootOrganizationsResponse>}
         */
        findRootOrganizations(request: notadd_module_user.PlaceholderRequest): Observable<notadd_module_user.FindRootOrganizationsResponse>;

        /**
         * Calls FindAllOrganizations.
         * @param {notadd_module_user.PlaceholderRequest} request PlaceholderRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        findAllOrganizations(request: notadd_module_user.PlaceholderRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls FindChildrenOrganizations.
         * @param {notadd_module_user.FindChildrenOrganizationsRequest} request FindChildrenOrganizationsRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        findChildrenOrganizations(request: notadd_module_user.FindChildrenOrganizationsRequest): Observable<notadd_module_user.StringDataResponse>;
    }

    /**
     * Constructs a new CreateOrganizationRequest.
     * @exports notadd_module_user.CreateOrganizationRequest
     * @interface
     */
    export interface CreateOrganizationRequest {

        /**
         * CreateOrganizationRequest name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * CreateOrganizationRequest parentId.
         * @type {number|undefined}
         */
        parentId?: number;
    }

    /**
     * Constructs a new AddUsersToOrganizationRequest.
     * @exports notadd_module_user.AddUsersToOrganizationRequest
     * @interface
     */
    export interface AddUsersToOrganizationRequest {

        /**
         * AddUsersToOrganizationRequest id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * AddUsersToOrganizationRequest userIds.
         * @type {Array.<number>|undefined}
         */
        userIds?: number[];
    }

    /**
     * Constructs a new DeleteOrganizationRequest.
     * @exports notadd_module_user.DeleteOrganizationRequest
     * @interface
     */
    export interface DeleteOrganizationRequest {

        /**
         * DeleteOrganizationRequest id.
         * @type {number|undefined}
         */
        id?: number;
    }

    /**
     * Constructs a new DeleteUserFromOrganizationRequest.
     * @exports notadd_module_user.DeleteUserFromOrganizationRequest
     * @interface
     */
    export interface DeleteUserFromOrganizationRequest {

        /**
         * DeleteUserFromOrganizationRequest id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * DeleteUserFromOrganizationRequest userIds.
         * @type {Array.<number>|undefined}
         */
        userIds?: number[];
    }

    /**
     * Constructs a new UpdateOrganizationRequest.
     * @exports notadd_module_user.UpdateOrganizationRequest
     * @interface
     */
    export interface UpdateOrganizationRequest {

        /**
         * UpdateOrganizationRequest id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * UpdateOrganizationRequest name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * UpdateOrganizationRequest parentId.
         * @type {number|undefined}
         */
        parentId?: number;
    }

    /**
     * Constructs a new FindRootOrganizationsResponse.
     * @exports notadd_module_user.FindRootOrganizationsResponse
     * @interface
     */
    export interface FindRootOrganizationsResponse {

        /**
         * FindRootOrganizationsResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindRootOrganizationsResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindRootOrganizationsResponse data.
         * @type {Array.<notadd_module_user.Organization>|undefined}
         */
        data?: notadd_module_user.Organization[];
    }

    /**
     * Constructs a new Organization.
     * @exports notadd_module_user.Organization
     * @interface
     */
    export interface Organization {

        /**
         * Organization id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * Organization name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new FindChildrenOrganizationsRequest.
     * @exports notadd_module_user.FindChildrenOrganizationsRequest
     * @interface
     */
    export interface FindChildrenOrganizationsRequest {

        /**
         * FindChildrenOrganizationsRequest id.
         * @type {number|undefined}
         */
        id?: number;
    }

    /**
     * Constructs a new SystemModuleService service.
     * @exports notadd_module_user.SystemModuleService
     * @interface
     */
    export interface SystemModuleService {

        /**
         * Calls FindSystemModules.
         * @param {notadd_module_user.FindDataByPageRequest} request FindDataByPageRequest message or plain object
         * @returns {Observable<notadd_module_user.FindSystemModuleResponse>}
         */
        findSystemModules(request: notadd_module_user.FindDataByPageRequest): Observable<notadd_module_user.FindSystemModuleResponse>;
    }

    /**
     * Constructs a new FindSystemModuleResponse.
     * @exports notadd_module_user.FindSystemModuleResponse
     * @interface
     */
    export interface FindSystemModuleResponse {

        /**
         * FindSystemModuleResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindSystemModuleResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindSystemModuleResponse data.
         * @type {Array.<notadd_module_user.FindSystemModuleResponse.SystemModule>|undefined}
         */
        data?: notadd_module_user.FindSystemModuleResponse.SystemModule[];

        /**
         * FindSystemModuleResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    export namespace FindSystemModuleResponse {

        /**
         * Constructs a new SystemModule.
         * @exports notadd_module_user.FindSystemModuleResponse.SystemModule
         * @interface
         */
        export interface SystemModule {

            /**
             * SystemModule id.
             * @type {number|undefined}
             */
            id?: number;

            /**
             * SystemModule name.
             * @type {string|undefined}
             */
            name?: string;
        }
    }

    /**
     * Constructs a new ResourceService service.
     * @exports notadd_module_user.ResourceService
     * @interface
     */
    export interface ResourceService {

        /**
         * Calls FindResources.
         * @param {notadd_module_user.FindResourcesRequest} request FindResourcesRequest message or plain object
         * @returns {Observable<notadd_module_user.FindResourcesResponse>}
         */
        findResources(request: notadd_module_user.FindResourcesRequest): Observable<notadd_module_user.FindResourcesResponse>;

        /**
         * Calls SaveResourcesAndPermissions.
         * @param {notadd_module_user.SaveResourcesAndPermissionsRequest} request SaveResourcesAndPermissionsRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        saveResourcesAndPermissions(request: notadd_module_user.SaveResourcesAndPermissionsRequest): Observable<notadd_module_user.StringDataResponse>;
    }

    /**
     * Constructs a new FindResourcesRequest.
     * @exports notadd_module_user.FindResourcesRequest
     * @interface
     */
    export interface FindResourcesRequest {

        /**
         * FindResourcesRequest systemModuleId.
         * @type {number|undefined}
         */
        systemModuleId?: number;

        /**
         * FindResourcesRequest pageNumber.
         * @type {number|undefined}
         */
        pageNumber?: number;

        /**
         * FindResourcesRequest pageSize.
         * @type {number|undefined}
         */
        pageSize?: number;
    }

    /**
     * Constructs a new SaveResourcesAndPermissionsRequest.
     * @exports notadd_module_user.SaveResourcesAndPermissionsRequest
     * @interface
     */
    export interface SaveResourcesAndPermissionsRequest {

        /**
         * SaveResourcesAndPermissionsRequest metadata.
         * @type {string|undefined}
         */
        metadata?: string;
    }

    /**
     * Constructs a new FindResourcesResponse.
     * @exports notadd_module_user.FindResourcesResponse
     * @interface
     */
    export interface FindResourcesResponse {

        /**
         * FindResourcesResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindResourcesResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindResourcesResponse data.
         * @type {Array.<notadd_module_user.FindResourcesResponse.Resource>|undefined}
         */
        data?: notadd_module_user.FindResourcesResponse.Resource[];

        /**
         * FindResourcesResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    export namespace FindResourcesResponse {

        /**
         * Constructs a new Resource.
         * @exports notadd_module_user.FindResourcesResponse.Resource
         * @interface
         */
        export interface Resource {

            /**
             * Resource id.
             * @type {number|undefined}
             */
            id?: number;

            /**
             * Resource name.
             * @type {string|undefined}
             */
            name?: string;

            /**
             * Resource identify.
             * @type {string|undefined}
             */
            identify?: string;

            /**
             * Resource permissions.
             * @type {Array.<notadd_module_user.Permission>|undefined}
             */
            permissions?: notadd_module_user.Permission[];
        }
    }

    /**
     * Constructs a new Permission.
     * @exports notadd_module_user.Permission
     * @interface
     */
    export interface Permission {

        /**
         * Permission id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * Permission name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * Permission action.
         * @type {string|undefined}
         */
        action?: string;

        /**
         * Permission identify.
         * @type {string|undefined}
         */
        identify?: string;
    }

    /**
     * Constructs a new RoleService service.
     * @exports notadd_module_user.RoleService
     * @interface
     */
    export interface RoleService {

        /**
         * Calls CreateRole.
         * @param {notadd_module_user.CreateRoleRequest} request CreateRoleRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        createRole(request: notadd_module_user.CreateRoleRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteRole.
         * @param {notadd_module_user.DeleteRoleRequest} request DeleteRoleRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteRole(request: notadd_module_user.DeleteRoleRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls UpdateRole.
         * @param {notadd_module_user.UpdateRoleRequest} request UpdateRoleRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        updateRole(request: notadd_module_user.UpdateRoleRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls RemovePermissionOfRole.
         * @param {notadd_module_user.RemovePermissionRequest} request RemovePermissionRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        removePermissionOfRole(request: notadd_module_user.RemovePermissionRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls SetPermissionsToRole.
         * @param {notadd_module_user.SetPermissionToRoleRequest} request SetPermissionToRoleRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        setPermissionsToRole(request: notadd_module_user.SetPermissionToRoleRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls FindRoles.
         * @param {notadd_module_user.FindDataByPageRequest} request FindDataByPageRequest message or plain object
         * @returns {Observable<notadd_module_user.FindRolesResponse>}
         */
        findRoles(request: notadd_module_user.FindDataByPageRequest): Observable<notadd_module_user.FindRolesResponse>;

        /**
         * Calls FindOneRoleInfo.
         * @param {notadd_module_user.FindOneRoleInfoRequest} request FindOneRoleInfoRequest message or plain object
         * @returns {Observable<notadd_module_user.FindOneRoleInfoResponse>}
         */
        findOneRoleInfo(request: notadd_module_user.FindOneRoleInfoRequest): Observable<notadd_module_user.FindOneRoleInfoResponse>;
    }

    /**
     * Constructs a new CreateRoleRequest.
     * @exports notadd_module_user.CreateRoleRequest
     * @interface
     */
    export interface CreateRoleRequest {

        /**
         * CreateRoleRequest name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new DeleteRoleRequest.
     * @exports notadd_module_user.DeleteRoleRequest
     * @interface
     */
    export interface DeleteRoleRequest {

        /**
         * DeleteRoleRequest id.
         * @type {number|undefined}
         */
        id?: number;
    }

    /**
     * Constructs a new UpdateRoleRequest.
     * @exports notadd_module_user.UpdateRoleRequest
     * @interface
     */
    export interface UpdateRoleRequest {

        /**
         * UpdateRoleRequest id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * UpdateRoleRequest name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new RemovePermissionRequest.
     * @exports notadd_module_user.RemovePermissionRequest
     * @interface
     */
    export interface RemovePermissionRequest {

        /**
         * RemovePermissionRequest roleId.
         * @type {number|undefined}
         */
        roleId?: number;

        /**
         * RemovePermissionRequest permissionId.
         * @type {number|undefined}
         */
        permissionId?: number;
    }

    /**
     * Constructs a new SetPermissionToRoleRequest.
     * @exports notadd_module_user.SetPermissionToRoleRequest
     * @interface
     */
    export interface SetPermissionToRoleRequest {

        /**
         * SetPermissionToRoleRequest roleId.
         * @type {number|undefined}
         */
        roleId?: number;

        /**
         * SetPermissionToRoleRequest permissionIds.
         * @type {Array.<number>|undefined}
         */
        permissionIds?: number[];
    }

    /**
     * Constructs a new FindRolesResponse.
     * @exports notadd_module_user.FindRolesResponse
     * @interface
     */
    export interface FindRolesResponse {

        /**
         * FindRolesResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindRolesResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindRolesResponse data.
         * @type {Array.<notadd_module_user.RoleData>|undefined}
         */
        data?: notadd_module_user.RoleData[];

        /**
         * FindRolesResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    /**
     * Constructs a new RoleData.
     * @exports notadd_module_user.RoleData
     * @interface
     */
    export interface RoleData {

        /**
         * RoleData id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * RoleData name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new FindOneRoleInfoRequest.
     * @exports notadd_module_user.FindOneRoleInfoRequest
     * @interface
     */
    export interface FindOneRoleInfoRequest {

        /**
         * FindOneRoleInfoRequest roleId.
         * @type {number|undefined}
         */
        roleId?: number;
    }

    /**
     * Constructs a new FindOneRoleInfoResponse.
     * @exports notadd_module_user.FindOneRoleInfoResponse
     * @interface
     */
    export interface FindOneRoleInfoResponse {

        /**
         * FindOneRoleInfoResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindOneRoleInfoResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindOneRoleInfoResponse data.
         * @type {notadd_module_user.OneRoleInfoData|undefined}
         */
        data?: notadd_module_user.OneRoleInfoData;
    }

    /**
     * Constructs a new OneRoleInfoData.
     * @exports notadd_module_user.OneRoleInfoData
     * @interface
     */
    export interface OneRoleInfoData {

        /**
         * OneRoleInfoData id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * OneRoleInfoData name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * OneRoleInfoData permissions.
         * @type {Array.<notadd_module_user.Permission>|undefined}
         */
        permissions?: notadd_module_user.Permission[];

        /**
         * OneRoleInfoData infoItems.
         * @type {Array.<notadd_module_user.InfoItem>|undefined}
         */
        infoItems?: notadd_module_user.InfoItem[];
    }

    /**
     * Constructs a new UserService service.
     * @exports notadd_module_user.UserService
     * @interface
     */
    export interface UserService {

        /**
         * Calls Login.
         * @param {notadd_module_user.LoginRequest} request LoginRequest message or plain object
         * @returns {Observable<notadd_module_user.LoginResponse>}
         */
        login(request: notadd_module_user.LoginRequest): Observable<notadd_module_user.LoginResponse>;

        /**
         * Calls Register.
         * @param {notadd_module_user.RegisterRequest} request RegisterRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        register(request: notadd_module_user.RegisterRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls CreateUser.
         * @param {notadd_module_user.CreateUserRequest} request CreateUserRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        createUser(request: notadd_module_user.CreateUserRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls AddUserRole.
         * @param {notadd_module_user.AddOrDeleteUserRoleRequest} request AddOrDeleteUserRoleRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        addUserRole(request: notadd_module_user.AddOrDeleteUserRoleRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteUserRole.
         * @param {notadd_module_user.AddOrDeleteUserRoleRequest} request AddOrDeleteUserRoleRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteUserRole(request: notadd_module_user.AddOrDeleteUserRoleRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls BanUser.
         * @param {notadd_module_user.DeleteUserRequest} request DeleteUserRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        banUser(request: notadd_module_user.DeleteUserRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls RecycleUser.
         * @param {notadd_module_user.DeleteUserRequest} request DeleteUserRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        recycleUser(request: notadd_module_user.DeleteUserRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeleteRecycledUser.
         * @param {notadd_module_user.DeleteUserRequest} request DeleteUserRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deleteRecycledUser(request: notadd_module_user.DeleteUserRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls RevertBannedUser.
         * @param {notadd_module_user.DeleteUserRequest} request DeleteUserRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        revertBannedUser(request: notadd_module_user.DeleteUserRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls RevertRecycledUser.
         * @param {notadd_module_user.DeleteUserRequest} request DeleteUserRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        revertRecycledUser(request: notadd_module_user.DeleteUserRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls UpdateUserInfoById.
         * @param {notadd_module_user.UpdateUserInfoByIdRequest} request UpdateUserInfoByIdRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        updateUserInfoById(request: notadd_module_user.UpdateUserInfoByIdRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls UpdateCurrentUserInfo.
         * @param {notadd_module_user.UpdateCurrentUserInfoRequest} request UpdateCurrentUserInfoRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        updateCurrentUserInfo(request: notadd_module_user.UpdateCurrentUserInfoRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls FindUserInfoByIds.
         * @param {notadd_module_user.FindUserInfoByIdsRequest} request FindUserInfoByIdsRequest message or plain object
         * @returns {Observable<notadd_module_user.FindUserInfoByIdsResponse>}
         */
        findUserInfoByIds(request: notadd_module_user.FindUserInfoByIdsRequest): Observable<notadd_module_user.FindUserInfoByIdsResponse>;

        /**
         * Calls FindCurrentUserInfo.
         * @param {notadd_module_user.FindCurrentUserInfoRequest} request FindCurrentUserInfoRequest message or plain object
         * @returns {Observable<notadd_module_user.FindCurrentUserInfoResponse>}
         */
        findCurrentUserInfo(request: notadd_module_user.FindCurrentUserInfoRequest): Observable<notadd_module_user.FindCurrentUserInfoResponse>;

        /**
         * Calls FindRegisterUserInputInfo.
         * @param {notadd_module_user.PlaceholderRequest} request PlaceholderRequest message or plain object
         * @returns {Observable<notadd_module_user.FindRegisterUserInputInfoResponse>}
         */
        findRegisterUserInputInfo(request: notadd_module_user.PlaceholderRequest): Observable<notadd_module_user.FindRegisterUserInputInfoResponse>;

        /**
         * Calls FindAllUsers.
         * @param {notadd_module_user.FindDataByPageRequest} request FindDataByPageRequest message or plain object
         * @returns {Observable<notadd_module_user.FindAllUsersResponse>}
         */
        findAllUsers(request: notadd_module_user.FindDataByPageRequest): Observable<notadd_module_user.FindAllUsersResponse>;

        /**
         * Calls FindUsersInRole.
         * @param {notadd_module_user.FindUsersInRoleRequest} request FindUsersInRoleRequest message or plain object
         * @returns {Observable<notadd_module_user.FindUsersInRoleResponse>}
         */
        findUsersInRole(request: notadd_module_user.FindUsersInRoleRequest): Observable<notadd_module_user.FindUsersInRoleResponse>;

        /**
         * Calls FindUsersInOrganization.
         * @param {notadd_module_user.FindUsersInOrganizationRequest} request FindUsersInOrganizationRequest message or plain object
         * @returns {Observable<notadd_module_user.FindUsersInOrganizationResponse>}
         */
        findUsersInOrganization(request: notadd_module_user.FindUsersInOrganizationRequest): Observable<notadd_module_user.FindUsersInOrganizationResponse>;

        /**
         * Calls FindOneWithRolesAndPermissions.
         * @param {notadd_module_user.FindOneWithRolesAndPermissionsRequest} request FindOneWithRolesAndPermissionsRequest message or plain object
         * @returns {Observable<notadd_module_user.FindOneWithRolesAndPermissionsResponse>}
         */
        findOneWithRolesAndPermissions(request: notadd_module_user.FindOneWithRolesAndPermissionsRequest): Observable<notadd_module_user.FindOneWithRolesAndPermissionsResponse>;

        /**
         * Calls AddPermissionToUser.
         * @param {notadd_module_user.AddOrDeleteUserPermRequest} request AddOrDeleteUserPermRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        addPermissionToUser(request: notadd_module_user.AddOrDeleteUserPermRequest): Observable<notadd_module_user.StringDataResponse>;

        /**
         * Calls DeletePermissionOfUser.
         * @param {notadd_module_user.AddOrDeleteUserPermRequest} request AddOrDeleteUserPermRequest message or plain object
         * @returns {Observable<notadd_module_user.StringDataResponse>}
         */
        deletePermissionOfUser(request: notadd_module_user.AddOrDeleteUserPermRequest): Observable<notadd_module_user.StringDataResponse>;
    }

    /**
     * Constructs a new LoginRequest.
     * @exports notadd_module_user.LoginRequest
     * @interface
     */
    export interface LoginRequest {

        /**
         * LoginRequest username.
         * @type {string|undefined}
         */
        username?: string;

        /**
         * LoginRequest password.
         * @type {string|undefined}
         */
        password?: string;
    }

    /**
     * Constructs a new LoginResponse.
     * @exports notadd_module_user.LoginResponse
     * @interface
     */
    export interface LoginResponse {

        /**
         * LoginResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * LoginResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * LoginResponse data.
         * @type {notadd_module_user.LoginResponse.LoginResponseData|undefined}
         */
        data?: notadd_module_user.LoginResponse.LoginResponseData;
    }

    export namespace LoginResponse {

        /**
         * Constructs a new LoginResponseData.
         * @exports notadd_module_user.LoginResponse.LoginResponseData
         * @interface
         */
        export interface LoginResponseData {

            /**
             * LoginResponseData tokenInfo.
             * @type {notadd_module_user.LoginResponse.TokenInfo|undefined}
             */
            tokenInfo?: notadd_module_user.LoginResponse.TokenInfo;

            /**
             * LoginResponseData userInfoData.
             * @type {notadd_module_user.UserData|undefined}
             */
            userInfoData?: notadd_module_user.UserData;
        }

        /**
         * Constructs a new TokenInfo.
         * @exports notadd_module_user.LoginResponse.TokenInfo
         * @interface
         */
        export interface TokenInfo {

            /**
             * TokenInfo accessToken.
             * @type {string|undefined}
             */
            accessToken?: string;

            /**
             * TokenInfo expiresIn.
             * @type {number|undefined}
             */
            expiresIn?: number;
        }
    }

    /**
     * Constructs a new RegisterRequest.
     * @exports notadd_module_user.RegisterRequest
     * @interface
     */
    export interface RegisterRequest {

        /**
         * RegisterRequest registerUserInput.
         * @type {notadd_module_user.RegisterRequest.RegisterUserInput|undefined}
         */
        registerUserInput?: notadd_module_user.RegisterRequest.RegisterUserInput;
    }

    export namespace RegisterRequest {

        /**
         * Constructs a new RegisterUserInput.
         * @exports notadd_module_user.RegisterRequest.RegisterUserInput
         * @interface
         */
        export interface RegisterUserInput {

            /**
             * RegisterUserInput username.
             * @type {string|undefined}
             */
            username?: string;

            /**
             * RegisterUserInput email.
             * @type {string|undefined}
             */
            email?: string;

            /**
             * RegisterUserInput mobile.
             * @type {string|undefined}
             */
            mobile?: string;

            /**
             * RegisterUserInput password.
             * @type {string|undefined}
             */
            password?: string;

            /**
             * RegisterUserInput infoKVs.
             * @type {Array.<notadd_module_user.CreateUserInfoInfoKV>|undefined}
             */
            infoKVs?: notadd_module_user.CreateUserInfoInfoKV[];
        }
    }

    /**
     * Constructs a new CreateUserRequest.
     * @exports notadd_module_user.CreateUserRequest
     * @interface
     */
    export interface CreateUserRequest {

        /**
         * CreateUserRequest createUserInput.
         * @type {notadd_module_user.CreateUserRequest.CreateUserInput|undefined}
         */
        createUserInput?: notadd_module_user.CreateUserRequest.CreateUserInput;
    }

    export namespace CreateUserRequest {

        /**
         * Constructs a new CreateUserInput.
         * @exports notadd_module_user.CreateUserRequest.CreateUserInput
         * @interface
         */
        export interface CreateUserInput {

            /**
             * CreateUserInput username.
             * @type {string|undefined}
             */
            username?: string;

            /**
             * CreateUserInput email.
             * @type {string|undefined}
             */
            email?: string;

            /**
             * CreateUserInput mobile.
             * @type {string|undefined}
             */
            mobile?: string;

            /**
             * CreateUserInput password.
             * @type {string|undefined}
             */
            password?: string;

            /**
             * CreateUserInput infoKVs.
             * @type {Array.<notadd_module_user.CreateUserInfoInfoKV>|undefined}
             */
            infoKVs?: notadd_module_user.CreateUserInfoInfoKV[];

            /**
             * CreateUserInput roleIds.
             * @type {Array.<number>|undefined}
             */
            roleIds?: number[];

            /**
             * CreateUserInput organizationIds.
             * @type {Array.<number>|undefined}
             */
            organizationIds?: number[];
        }
    }

    /**
     * Constructs a new CreateUserInfoInfoKV.
     * @exports notadd_module_user.CreateUserInfoInfoKV
     * @interface
     */
    export interface CreateUserInfoInfoKV {

        /**
         * CreateUserInfoInfoKV infoItemId.
         * @type {number|undefined}
         */
        infoItemId?: number;

        /**
         * CreateUserInfoInfoKV userInfoValue.
         * @type {string|undefined}
         */
        userInfoValue?: string;
    }

    /**
     * Constructs a new AddOrDeleteUserRoleRequest.
     * @exports notadd_module_user.AddOrDeleteUserRoleRequest
     * @interface
     */
    export interface AddOrDeleteUserRoleRequest {

        /**
         * AddOrDeleteUserRoleRequest userId.
         * @type {number|undefined}
         */
        userId?: number;

        /**
         * AddOrDeleteUserRoleRequest roleId.
         * @type {number|undefined}
         */
        roleId?: number;
    }

    /**
     * Constructs a new DeleteUserRequest.
     * @exports notadd_module_user.DeleteUserRequest
     * @interface
     */
    export interface DeleteUserRequest {

        /**
         * DeleteUserRequest userId.
         * @type {number|undefined}
         */
        userId?: number;
    }

    /**
     * Constructs a new UpdateUserInfoByIdRequest.
     * @exports notadd_module_user.UpdateUserInfoByIdRequest
     * @interface
     */
    export interface UpdateUserInfoByIdRequest {

        /**
         * UpdateUserInfoByIdRequest userId.
         * @type {number|undefined}
         */
        userId?: number;

        /**
         * UpdateUserInfoByIdRequest updateUserInput.
         * @type {notadd_module_user.UpdateUserInput|undefined}
         */
        updateUserInput?: notadd_module_user.UpdateUserInput;
    }

    /**
     * Constructs a new UpdateUserInput.
     * @exports notadd_module_user.UpdateUserInput
     * @interface
     */
    export interface UpdateUserInput {

        /**
         * UpdateUserInput username.
         * @type {string|undefined}
         */
        username?: string;

        /**
         * UpdateUserInput email.
         * @type {string|undefined}
         */
        email?: string;

        /**
         * UpdateUserInput mobile.
         * @type {string|undefined}
         */
        mobile?: string;

        /**
         * UpdateUserInput password.
         * @type {string|undefined}
         */
        password?: string;

        /**
         * UpdateUserInput infoKVs.
         * @type {Array.<notadd_module_user.UpdateUserInput.UpdateUserInfoKV>|undefined}
         */
        infoKVs?: notadd_module_user.UpdateUserInput.UpdateUserInfoKV[];

        /**
         * UpdateUserInput roleIds.
         * @type {Array.<notadd_module_user.UpdateUserInput.ChangedUserRoleOrOrganization>|undefined}
         */
        roleIds?: notadd_module_user.UpdateUserInput.ChangedUserRoleOrOrganization[];

        /**
         * UpdateUserInput organizationIds.
         * @type {Array.<notadd_module_user.UpdateUserInput.ChangedUserRoleOrOrganization>|undefined}
         */
        organizationIds?: notadd_module_user.UpdateUserInput.ChangedUserRoleOrOrganization[];
    }

    export namespace UpdateUserInput {

        /**
         * Constructs a new UpdateUserInfoKV.
         * @exports notadd_module_user.UpdateUserInput.UpdateUserInfoKV
         * @interface
         */
        export interface UpdateUserInfoKV {

            /**
             * UpdateUserInfoKV userInfoId.
             * @type {number|undefined}
             */
            userInfoId?: number;

            /**
             * UpdateUserInfoKV userInfoValue.
             * @type {string|undefined}
             */
            userInfoValue?: string;

            /**
             * UpdateUserInfoKV infoItemId.
             * @type {number|undefined}
             */
            infoItemId?: number;
        }

        /**
         * Constructs a new ChangedUserRoleOrOrganization.
         * @exports notadd_module_user.UpdateUserInput.ChangedUserRoleOrOrganization
         * @interface
         */
        export interface ChangedUserRoleOrOrganization {

            /**
             * ChangedUserRoleOrOrganization before.
             * @type {number|undefined}
             */
            before?: number;

            /**
             * ChangedUserRoleOrOrganization after.
             * @type {number|undefined}
             */
            after?: number;
        }
    }

    /**
     * Constructs a new UpdateCurrentUserInfoRequest.
     * @exports notadd_module_user.UpdateCurrentUserInfoRequest
     * @interface
     */
    export interface UpdateCurrentUserInfoRequest {

        /**
         * UpdateCurrentUserInfoRequest userId.
         * @type {number|undefined}
         */
        userId?: number;

        /**
         * UpdateCurrentUserInfoRequest updateCurrentUserInput.
         * @type {notadd_module_user.UpdateUserInput|undefined}
         */
        updateCurrentUserInput?: notadd_module_user.UpdateUserInput;
    }

    /**
     * Constructs a new FindUserInfoByIdsRequest.
     * @exports notadd_module_user.FindUserInfoByIdsRequest
     * @interface
     */
    export interface FindUserInfoByIdsRequest {

        /**
         * FindUserInfoByIdsRequest userIds.
         * @type {Array.<number>|undefined}
         */
        userIds?: number[];
    }

    /**
     * Constructs a new FindUserInfoByIdsResponse.
     * @exports notadd_module_user.FindUserInfoByIdsResponse
     * @interface
     */
    export interface FindUserInfoByIdsResponse {

        /**
         * FindUserInfoByIdsResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindUserInfoByIdsResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindUserInfoByIdsResponse data.
         * @type {Array.<notadd_module_user.UserData>|undefined}
         */
        data?: notadd_module_user.UserData[];
    }

    /**
     * Constructs a new UserData.
     * @exports notadd_module_user.UserData
     * @interface
     */
    export interface UserData {

        /**
         * UserData id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * UserData username.
         * @type {string|undefined}
         */
        username?: string;

        /**
         * UserData email.
         * @type {string|undefined}
         */
        email?: string;

        /**
         * UserData mobile.
         * @type {string|undefined}
         */
        mobile?: string;

        /**
         * UserData banned.
         * @type {boolean|undefined}
         */
        banned?: boolean;

        /**
         * UserData recycle.
         * @type {boolean|undefined}
         */
        recycle?: boolean;

        /**
         * UserData createdAt.
         * @type {string|undefined}
         */
        createdAt?: string;

        /**
         * UserData updatedAt.
         * @type {string|undefined}
         */
        updatedAt?: string;

        /**
         * UserData userRoles.
         * @type {Array.<notadd_module_user.UserRoleData>|undefined}
         */
        userRoles?: notadd_module_user.UserRoleData[];

        /**
         * UserData userOrganizations.
         * @type {Array.<notadd_module_user.UserOrganizationData>|undefined}
         */
        userOrganizations?: notadd_module_user.UserOrganizationData[];

        /**
         * UserData userInfos.
         * @type {Array.<notadd_module_user.UserInfoData>|undefined}
         */
        userInfos?: notadd_module_user.UserInfoData[];
    }

    /**
     * Constructs a new UserRoleData.
     * @exports notadd_module_user.UserRoleData
     * @interface
     */
    export interface UserRoleData {

        /**
         * UserRoleData id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * UserRoleData name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new UserOrganizationData.
     * @exports notadd_module_user.UserOrganizationData
     * @interface
     */
    export interface UserOrganizationData {

        /**
         * UserOrganizationData id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * UserOrganizationData name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new UserInfoData.
     * @exports notadd_module_user.UserInfoData
     * @interface
     */
    export interface UserInfoData {

        /**
         * UserInfoData id.
         * @type {number|undefined}
         */
        id?: number;

        /**
         * UserInfoData order.
         * @type {number|undefined}
         */
        order?: number;

        /**
         * UserInfoData infoItemId.
         * @type {number|undefined}
         */
        infoItemId?: number;

        /**
         * UserInfoData type.
         * @type {string|undefined}
         */
        type?: string;

        /**
         * UserInfoData name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * UserInfoData value.
         * @type {string|undefined}
         */
        value?: string;

        /**
         * UserInfoData description.
         * @type {string|undefined}
         */
        description?: string;

        /**
         * UserInfoData registerDisplay.
         * @type {boolean|undefined}
         */
        registerDisplay?: boolean;

        /**
         * UserInfoData informationDisplay.
         * @type {boolean|undefined}
         */
        informationDisplay?: boolean;
    }

    /**
     * Constructs a new FindCurrentUserInfoRequest.
     * @exports notadd_module_user.FindCurrentUserInfoRequest
     * @interface
     */
    export interface FindCurrentUserInfoRequest {

        /**
         * FindCurrentUserInfoRequest userId.
         * @type {number|undefined}
         */
        userId?: number;
    }

    /**
     * Constructs a new FindCurrentUserInfoResponse.
     * @exports notadd_module_user.FindCurrentUserInfoResponse
     * @interface
     */
    export interface FindCurrentUserInfoResponse {

        /**
         * FindCurrentUserInfoResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindCurrentUserInfoResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindCurrentUserInfoResponse data.
         * @type {notadd_module_user.UserData|undefined}
         */
        data?: notadd_module_user.UserData;
    }

    /**
     * Constructs a new FindRegisterUserInputInfoResponse.
     * @exports notadd_module_user.FindRegisterUserInputInfoResponse
     * @interface
     */
    export interface FindRegisterUserInputInfoResponse {

        /**
         * FindRegisterUserInputInfoResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindRegisterUserInputInfoResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindRegisterUserInputInfoResponse data.
         * @type {Array.<notadd_module_user.InfoItem>|undefined}
         */
        data?: notadd_module_user.InfoItem[];
    }

    /**
     * Constructs a new FindAllUsersResponse.
     * @exports notadd_module_user.FindAllUsersResponse
     * @interface
     */
    export interface FindAllUsersResponse {

        /**
         * FindAllUsersResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindAllUsersResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindAllUsersResponse data.
         * @type {Array.<notadd_module_user.UserData>|undefined}
         */
        data?: notadd_module_user.UserData[];

        /**
         * FindAllUsersResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    /**
     * Constructs a new FindUsersInRoleRequest.
     * @exports notadd_module_user.FindUsersInRoleRequest
     * @interface
     */
    export interface FindUsersInRoleRequest {

        /**
         * FindUsersInRoleRequest roleId.
         * @type {number|undefined}
         */
        roleId?: number;

        /**
         * FindUsersInRoleRequest pageNumber.
         * @type {number|undefined}
         */
        pageNumber?: number;

        /**
         * FindUsersInRoleRequest pageSize.
         * @type {number|undefined}
         */
        pageSize?: number;
    }

    /**
     * Constructs a new FindUsersInRoleResponse.
     * @exports notadd_module_user.FindUsersInRoleResponse
     * @interface
     */
    export interface FindUsersInRoleResponse {

        /**
         * FindUsersInRoleResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindUsersInRoleResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindUsersInRoleResponse data.
         * @type {Array.<notadd_module_user.UserData>|undefined}
         */
        data?: notadd_module_user.UserData[];

        /**
         * FindUsersInRoleResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    /**
     * Constructs a new FindUsersInOrganizationRequest.
     * @exports notadd_module_user.FindUsersInOrganizationRequest
     * @interface
     */
    export interface FindUsersInOrganizationRequest {

        /**
         * FindUsersInOrganizationRequest organizationId.
         * @type {number|undefined}
         */
        organizationId?: number;

        /**
         * FindUsersInOrganizationRequest pageNumber.
         * @type {number|undefined}
         */
        pageNumber?: number;

        /**
         * FindUsersInOrganizationRequest pageSize.
         * @type {number|undefined}
         */
        pageSize?: number;
    }

    /**
     * Constructs a new FindUsersInOrganizationResponse.
     * @exports notadd_module_user.FindUsersInOrganizationResponse
     * @interface
     */
    export interface FindUsersInOrganizationResponse {

        /**
         * FindUsersInOrganizationResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindUsersInOrganizationResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindUsersInOrganizationResponse data.
         * @type {Array.<notadd_module_user.UserData>|undefined}
         */
        data?: notadd_module_user.UserData[];

        /**
         * FindUsersInOrganizationResponse count.
         * @type {number|undefined}
         */
        count?: number;
    }

    /**
     * Constructs a new FindOneWithRolesAndPermissionsRequest.
     * @exports notadd_module_user.FindOneWithRolesAndPermissionsRequest
     * @interface
     */
    export interface FindOneWithRolesAndPermissionsRequest {

        /**
         * FindOneWithRolesAndPermissionsRequest username.
         * @type {string|undefined}
         */
        username?: string;
    }

    /**
     * Constructs a new FindOneWithRolesAndPermissionsResponse.
     * @exports notadd_module_user.FindOneWithRolesAndPermissionsResponse
     * @interface
     */
    export interface FindOneWithRolesAndPermissionsResponse {

        /**
         * FindOneWithRolesAndPermissionsResponse code.
         * @type {number|undefined}
         */
        code?: number;

        /**
         * FindOneWithRolesAndPermissionsResponse message.
         * @type {string|undefined}
         */
        message?: string;

        /**
         * FindOneWithRolesAndPermissionsResponse data.
         * @type {notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData|undefined}
         */
        data?: notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData;
    }

    export namespace FindOneWithRolesAndPermissionsResponse {

        /**
         * Constructs a new UserRoleAndPermissionData.
         * @exports notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData
         * @interface
         */
        export interface UserRoleAndPermissionData {

            /**
             * UserRoleAndPermissionData id.
             * @type {number|undefined}
             */
            id?: number;

            /**
             * UserRoleAndPermissionData username.
             * @type {string|undefined}
             */
            username?: string;

            /**
             * UserRoleAndPermissionData email.
             * @type {string|undefined}
             */
            email?: string;

            /**
             * UserRoleAndPermissionData mobile.
             * @type {string|undefined}
             */
            mobile?: string;

            /**
             * UserRoleAndPermissionData banned.
             * @type {boolean|undefined}
             */
            banned?: boolean;

            /**
             * UserRoleAndPermissionData recycle.
             * @type {boolean|undefined}
             */
            recycle?: boolean;

            /**
             * UserRoleAndPermissionData createdAt.
             * @type {string|undefined}
             */
            createdAt?: string;

            /**
             * UserRoleAndPermissionData updatedAt.
             * @type {string|undefined}
             */
            updatedAt?: string;

            /**
             * UserRoleAndPermissionData roles.
             * @type {Array.<notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData.UserRole>|undefined}
             */
            roles?: notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData.UserRole[];

            /**
             * UserRoleAndPermissionData personalPermissions.
             * @type {Array.<notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData.PersonalPermission>|undefined}
             */
            personalPermissions?: notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData.PersonalPermission[];
        }

        export namespace UserRoleAndPermissionData {

            /**
             * Constructs a new UserRole.
             * @exports notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData.UserRole
             * @interface
             */
            export interface UserRole {

                /**
                 * UserRole id.
                 * @type {number|undefined}
                 */
                id?: number;

                /**
                 * UserRole name.
                 * @type {string|undefined}
                 */
                name?: string;

                /**
                 * UserRole permissions.
                 * @type {Array.<notadd_module_user.Permission>|undefined}
                 */
                permissions?: notadd_module_user.Permission[];
            }

            /**
             * Constructs a new PersonalPermission.
             * @exports notadd_module_user.FindOneWithRolesAndPermissionsResponse.UserRoleAndPermissionData.PersonalPermission
             * @interface
             */
            export interface PersonalPermission {

                /**
                 * PersonalPermission id.
                 * @type {number|undefined}
                 */
                id?: number;

                /**
                 * PersonalPermission status.
                 * @type {string|undefined}
                 */
                status?: string;

                /**
                 * PersonalPermission permission.
                 * @type {notadd_module_user.Permission|undefined}
                 */
                permission?: notadd_module_user.Permission;
            }
        }
    }

    /**
     * Constructs a new AddOrDeleteUserPermRequest.
     * @exports notadd_module_user.AddOrDeleteUserPermRequest
     * @interface
     */
    export interface AddOrDeleteUserPermRequest {

        /**
         * AddOrDeleteUserPermRequest userId.
         * @type {number|undefined}
         */
        userId?: number;

        /**
         * AddOrDeleteUserPermRequest permissionId.
         * @type {number|undefined}
         */
        permissionId?: number;
    }
}
