import { Component } from '@angular/core'
import { Addon, InstallStore } from '../install.store'
@Component({
    selector: 'addon-setting',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class AddonSetting {
    addons: Addon[] = [];
    constructor(public install: InstallStore) {
        this.addons = this.install.data.addons;
    }
}
