import { Component, OnInit } from '@angular/core'
interface UserSettingData {
    username: string;
    password: string;
}
@Component({
    selector: 'user-setting',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class UserSetting implements OnInit {
    data: UserSettingData = {
        username: 'admin',
        password: '123456'
    }
    ngOnInit() { }
}