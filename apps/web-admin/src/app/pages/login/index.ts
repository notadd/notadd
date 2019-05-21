import { Component, OnInit } from '@angular/core'
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

@Component({
    selector: 'admin-login-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class AdminLoginPage implements OnInit {
    constructor(private _apollo: Apollo) { }

    ngOnInit() {}

    login() {
        this._apollo.watchQuery({
            query: GET_DOGS
        });
    }

}