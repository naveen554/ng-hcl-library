import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    RouterModule
  ],
})

export class LoginModule { }
