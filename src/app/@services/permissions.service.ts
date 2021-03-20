import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  userData: any;
  permissions: any = [];

  constructor() {
    this.userData = JSON.parse(localStorage.getItem('login-info'));
    this.permissions = this.userData && this.userData.permissions;
  }

  hasAcccess(code) {
    let idIndex, permissionIndex;
    idIndex = this.permissions && this.permissions.indexOf(code);
    if (idIndex === -1) {
      return false;
    }
    return true;
  };

}
