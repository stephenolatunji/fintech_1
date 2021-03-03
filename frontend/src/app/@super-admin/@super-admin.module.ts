import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './@components/users/users.component';
import { SideNavComponent } from './@theme/side-nav/side-nav.component';
import { AdminHeaderComponent } from './@theme/admin-header/admin-header.component';

import { ReportsComponent } from './@components/reports/reports.component';
import { ConfigurationComponent } from './@components/configuration/configuration.component';
import { SupportComponent } from './@components/support/support.component';
import { SuperDashboardComponent } from './@components/super-dashboard/super-dashboard.component';
import { AddUserComponent } from './@components/add-user/add-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    SideNavComponent,
    AdminHeaderComponent,
    ReportsComponent,
    ConfigurationComponent,
    SupportComponent,
    SuperDashboardComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class @superAdminModule { }
