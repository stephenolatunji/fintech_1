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
import { PaymentChannelComponent } from './@components/payment-channel/payment-channel.component';
import { AddPaymentChannelComponent } from './@components/add-payment-channel/add-payment-channel.component';
import { FaqComponent } from './@components/faq/faq.component';
import { UserRoleComponent } from './@components/user-role/user-role.component';
import { AddUserRoleComponent } from './@components/add-user-role/add-user-role.component';
import { CustomerComponent } from './@components/customer/customer.component';
import { TransactionReportComponent } from './@components/transaction-report/transaction-report.component';
import { ViewReportComponent } from './@components/view-report/view-report.component';
// import { LoginComponent } from './@theme/login/login.component';
// import { AuthComponent } from './@theme/@auth/guard/auth/auth.component';
import { CustomerProfileComponent } from './@components/customer-profile/customer-profile.component';
import { MarketRateComponent } from './@components/market-rate/market-rate.component';
import { TransactionConfigComponent } from './@components/transaction-config/transaction-config.component';
import { EditPaymentChannelComponent } from './@components/edit-payment-channel/edit-payment-channel.component';
import { EditUserComponent } from './@components/edit-user/edit-user.component';
import { EditUserRoleComponent } from './@components/edit-user-role/edit-user-role.component';


@NgModule({
  declarations: [
    UsersComponent,
    SideNavComponent,
    AdminHeaderComponent,
    ReportsComponent,
    ConfigurationComponent,
    SupportComponent,
    SuperDashboardComponent,
    AddUserComponent,
    PaymentChannelComponent,
    AddPaymentChannelComponent,
    FaqComponent,
    UserRoleComponent,
    AddUserRoleComponent,
    CustomerComponent,
    TransactionReportComponent,
    ViewReportComponent,
    // LoginComponent,
    // AuthComponent,
    CustomerProfileComponent,
    MarketRateComponent,
    TransactionConfigComponent,
    EditPaymentChannelComponent,
    EditUserComponent,
    EditUserRoleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class @superAdminModule { }
