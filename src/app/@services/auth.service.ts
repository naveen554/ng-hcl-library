import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from './rest.service';
import * as _ from 'lodash';
import { PermissionsService } from './permissions.service';
import { ToasterService } from './toaster.service';

@Injectable()
export class AuthService {

  public isLoggedIn : boolean = true;
    constructor(private router: Router, public toasterService: ToasterService, private restService: RestService, private _permissionsService: PermissionsService) { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(this.fetchLoginInfo());
      }
    );
    return promise;
  }

  login(username, password) : boolean {
    this.isLoggedIn = true
    if (username && password) {
      const payLoad = {
        userName: username,
        password: password
      }
      this.restService.getData('../../assets/json/test-users.json').subscribe((data) => {
        if (!_.isEmpty(data)) {
          data.forEach(element => {
            if (element.userName === payLoad.userName && element.password === payLoad.password) {
              this.isLoggedIn = true;
              localStorage.setItem('login-info', JSON.stringify(element));
              this.router.navigate(['/dashboard']);
            } else {
              this.isLoggedIn = false;
            }
          });
        } else {
          this.isLoggedIn = false;
        }
      });
    } else {
      return false;
    }

  }

  logout() {
    localStorage.removeItem('login-info');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  fetchLoginInfo() {
    const loginData = JSON.parse(localStorage.getItem('login-info'));
    if (loginData && loginData.authenticated) {
      return true;
    }

  }

}
