import { Component } from '@angular/core'
interface Addon {
    title: string;
    logo: string;
    desc: string;
}
@Component({
    selector: 'addon-setting',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class AddonSetting {
    addons: Addon[] = [{
        title: '服务中心',
        logo: '',
        desc: '用于服务的安装卸载更新等管理'
    }, {
        title: '单点登录',
        logo: '',
        desc: '用于多系统统一登录'
    }, {
        title: '授权管理',
        logo: '',
        desc: '角色、组织、会员等权限配置及修改'
    }, {
        title: '基础信息',
        logo: '',
        desc: '基础信息'
    }, {
        title: '公众服务',
        logo: '',
        desc: '用于对外提供便民类服务'
    }];
}