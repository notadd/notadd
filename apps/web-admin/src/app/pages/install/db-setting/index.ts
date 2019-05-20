import { Component } from '@angular/core'
interface DbSettingData {
    host: string;
    port: number;
    username: string;
    password: string;
    dbname: string;
}
@Component({
    selector: 'db-setting',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class DbSetting {

    data: DbSettingData = {
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        dbname: 'test_ci'
    }
}