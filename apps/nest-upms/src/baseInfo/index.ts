
import { AddonService } from './core/addon.service'
import { OrganizationService } from './core/organization.service'
import { PermissionService } from './core/permission.service'
import { RoleService } from './core/role.service'
import { UserService } from './core/user.service'
import { AddonServiceImpl } from './services/addon.service.impl';
import { PermissionServiceImpl } from './services/permission.service.impl';
import { UserServiceImpl } from './services/user.service.impl';
import { RoleServiceIpml } from './services/role.service.impl';
import { OrganizationServiceImpl } from './services/organization.service.impl';
import { LoggerService } from './core/logger.service';
import { LoggerServiceImpl } from './services/logger.service.impl';


export default [{
    provide: AddonService,
    useClass: AddonServiceImpl
}, {
    provide: PermissionService,
    useClass: PermissionServiceImpl
}, {
    provide: UserService,
    useClass: UserServiceImpl
}, {
    provide: RoleService,
    useClass: RoleServiceIpml
},{
    provide: OrganizationService,
    useClass: OrganizationServiceImpl
},{
    provide: LoggerService,
    useClass: LoggerServiceImpl
}
];