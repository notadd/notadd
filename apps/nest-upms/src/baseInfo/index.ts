
import { AddonService } from './core/addon.service'
import { OrganizationService } from './core/organization.service'
import { PermissionService } from './core/permission.service'
import { RoleService } from './core/role.service'
import { UserService } from './core/user.service'
import { AddonServiceImpl } from './services/addon.service.impl';
import { PermissionServiceImpl } from './services/permission.service.impl';
import { UserServiceImpl } from './services/user.service.impl';


export default [{
    provide: AddonService,
    useClass: AddonServiceImpl
}, {
    provide: PermissionService,
    useClass: PermissionServiceImpl
}, {
    provide: UserService,
    useClass: UserServiceImpl
}];