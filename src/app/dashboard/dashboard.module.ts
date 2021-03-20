import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';

const BASE_MODULES = [
  CommonModule,
  DashboardRoutingModule,
  SharedModule,
];
const COMPONENTS = [
  DashboardComponent, DashboardViewComponent
];
const SERVICES = [];
const ENTRY_COMPONENTS = [];
const PIPES = [];
@NgModule({
  imports: [...BASE_MODULES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [...SERVICES],
})
export class DashboardModule {

}
