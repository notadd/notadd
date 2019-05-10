export abstract class UpmsUserOrganizationService {
    /**
     * 用户组织
     * @param organizationIds 组织ids
     * @param id 用户id
     * @return
     */
    abstract organization(organizationIds: string[], id: number): any;
}