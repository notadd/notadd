import { Component, OnInit } from '@angular/core'
import { Admin, InstallStore } from '../install.store'
@Component({
    selector: 'user-setting',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class UserSetting implements OnInit {
    data: Admin;
    constructor(public install: InstallStore) {
        this.data = this.install.data.admin;
    }
    ngOnInit() { }
}
