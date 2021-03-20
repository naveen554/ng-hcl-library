import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../@services/auth-guard.service';
import { AuthService } from '../@services/auth.service';
import { PermissionsService } from '../@services/permissions.service';
import { RestService } from '../@services/rest.service';
import { ToasterService } from '../@services/toaster.service';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
  RouterModule,
];
const COMPONENTS = [];
const SERVICES = [RestService,AuthGuard,AuthService,PermissionsService,ToasterService];
const ENTRY_COMPONENTS = [];
const PIPES = [];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [...SERVICES],
})
export class SharedModule { }
