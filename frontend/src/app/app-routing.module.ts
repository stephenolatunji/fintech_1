import { EmailNotificationComponent } from './@auth/components/email-notification/email-notification.component';
import { ForgotPasswordComponent } from './@auth/components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './@auth/components/register/register.component';
import { LoginComponent } from './@auth/components/login/login.component';
import { OtpComponent } from './@auth/components/otp/otp.component';
import { ComingSoonComponent } from './@auth/components/coming-soon/coming-soon.component';
import { DocUploadComponent } from './@auth/components/doc-upload/doc-upload.component';
import { ListingComponent } from './@components/listing/listing.component';
import { ResponseComponent } from './@components/response/response.component';
import { DashboardComponent } from './@components/dashboard/dashboard.component';
import { PaymentSummaryComponent } from './@components/payment-summary/payment-summary.component';
import { ActivityComponent } from './@components/activity/activity.component';
import { ActivityTwoComponent } from './@components/activity-two/activity-two.component';
import {
  AuthGuardService as AuthGuard
} from './@auth/guard/auth-guard.service';

import { AuthGuardService as AdminAuthGuard } from "./@super-admin/@auth/guard/auth-guard.service";
import { } from "./@super-admin/@auth/guard/auth-guard.service";

import { PaymentPlatformComponent } from './@components/payment-platform/payment-platform.component';
import { SettingsComponent } from './@theme/components/settings/settings.component';
import { ProfileComponent } from './@theme/components/profile/profile.component';

import { LoginComponent as SuperLogin } from "./@super-admin/@auth/login/login.component";
import { UsersComponent } from './@super-admin/@components/users/users.component';
import { SuperDashboardComponent } from './@super-admin/@components/super-dashboard/super-dashboard.component';
import { ReportsComponent } from './@super-admin/@components/reports/reports.component';
import { SupportComponent } from './@super-admin/@components/support/support.component';
import { AddPaymentChannelComponent } from './@super-admin/@components/add-payment-channel/add-payment-channel.component';
import { PaymentChannelComponent } from './@super-admin/@components/payment-channel/payment-channel.component';
import { FaqComponent } from './@super-admin/@components/faq/faq.component';
import { UserRoleComponent } from './@super-admin/@components/user-role/user-role.component';
import { CustomerComponent } from './@super-admin/@components/customer/customer.component';
import { TransactionReportComponent } from './@super-admin/@components/transaction-report/transaction-report.component';
import { MarketRateComponent } from './@super-admin/@components/market-rate/market-rate.component';
import { TransactionConfigComponent } from './@super-admin/@components/transaction-config/transaction-config.component';

const routes: Routes = [
  { path: "", component: ComingSoonComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "otp", component: OtpComponent },
  { path: "listing", component: ListingComponent, canActivate: [AuthGuard]  },
  // { path: "summary", component: PaymentSummaryComponent, canActivate: [AuthGuard] },
  { path: "summary", component: ResponseComponent, canActivate: [AuthGuard]  },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'notify', component: EmailNotificationComponent, canActivate: [AuthGuard] },
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'transaction-summary', component: ActivityTwoComponent, canActivate: [AuthGuard] },
  { path: 'payment-gateway', component: PaymentPlatformComponent, canActivate: [AuthGuard] },

  // @super-admin
  // { path: '@super-admin', component: LoginComponent },
  { path: 'super-admin', component: SuperLogin },
  { path: 'super-admin/dashboard', component: SuperDashboardComponent, canActivate: [AdminAuthGuard] },
  { path: 'super-admin/user', component: UsersComponent, canActivate: [AdminAuthGuard] },
  { path: 'super-admin/reports', component: TransactionReportComponent, },
  { path: 'super-admin/support', component: FaqComponent, canActivate: [AdminAuthGuard] },
  { path: 'super-admin/user-role', component: UserRoleComponent, canActivate: [AdminAuthGuard] },
  { path: 'super-admin/customers', component: CustomerComponent, canActivate: [AdminAuthGuard] },
  { path: 'super-admin/transaction-reports', component: TransactionReportComponent, canActivate: [AdminAuthGuard] },

  { path: 'super-admin/market-rate', component: MarketRateComponent,  canActivate: [AdminAuthGuard]},
  { path: 'super-admin/payment-channel', component: PaymentChannelComponent, canActivate: [AdminAuthGuard] },
  { path: 'super-admin/transaction', component: TransactionConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
