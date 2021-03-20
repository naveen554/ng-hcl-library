import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { AuthService } from '../@services/auth.service';
import { RestService } from '../@services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error;
  public login :boolean = true;
  public displayError: boolean;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  forgotPwdForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private _authService: AuthService, private restService: RestService) { }

  ngOnInit(): void {
  }

  submit() {
    this.displayError = false
    if (this.loginForm.valid) {
      let result = this._authService.login(this.loginForm.value.username, this.loginForm.value.password);
      if (!result || !this._authService.isLoggedIn) {
        this.error = 'Invalid username or password';
        this.displayError = true
        setTimeout(() => {
          this.error = '';
          this.displayError = false
        }, 6000)
      }
    }

  }

  forgotPwd() {
    this.login = false;
    this.forgotPwdForm.reset();
  }

  changePwd() {}

  cancel() {
    this.login = true;
    this.loginForm.reset();
    this.forgotPwdForm.reset();
  }

}
