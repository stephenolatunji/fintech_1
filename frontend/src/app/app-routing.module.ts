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
import { PaymentPlatformComponent } from './@components/payment-platform/payment-platform.component';
import { SettingsComponent } from './@theme/components/settings/settings.component';
import { ProfileComponent } from './@theme/components/profile/profile.component';
import { UsersComponent } from './super-admin/@components/users/users.component';

import { SuperDashboardComponent } from './super-admin/@components/super-dashboard/super-dashboard.component';
import { ReportsComponent } from './super-admin/@components/reports/reports.component';
import { ConfigurationComponent } from './super-admin/@components/configuration/configuration.component';
import { SupportComponent } from './super-admin/@components/support/support.component';

const routes: Routes = [
  { path: "", component: ComingSoonComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "otp-auth", component: OtpComponent, canActivate: [AuthGuard]  },
  { path: "listing", component: ListingComponent, canActivate: [AuthGuard] },
  { path: "summary", component: PaymentSummaryComponent, canActivate: [AuthGuard]  },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'notify', component: EmailNotificationComponent, canActivate: [AuthGuard]  },
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard]  },
  { path: 'transaction-summary', component: ActivityTwoComponent, canActivate: [AuthGuard]  },
  { path: 'payment-gateway', component: PaymentPlatformComponent,  canActivate: [AuthGuard] },

  // super-admin
  // { path: 'super-admin', component: LoginComponent },
  { path: 'super-admin/dashboard', component: SuperDashboardComponent },
  { path: 'super-admin/user', component: UsersComponent },
  { path: 'super-admin/reports', component: ReportsComponent },
  { path: 'super-admin/configuration', component: ConfigurationComponent },
  { path: 'super-admin/support', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  