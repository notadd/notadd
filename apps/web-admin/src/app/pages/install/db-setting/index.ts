import { Component } from '@angular/core'
import { Db, InstallStore } from '../install.store'
@Component({
    selector: 'db-setting',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class DbSetting {
    data: Db = {
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        dbname: 'test_ci'
    }
    constructor(public install: InstallStore) {
        this.data = this.install.data.db;
    }
}