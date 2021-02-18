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

const routes: Routes = [
  { path: "", component: ComingSoonComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "otp-auth", component: OtpComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "listing", component: ListingComponent },
  { path: "response", component: ResponseComponent },
  { path: "summary", component: PaymentSummaryComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: 'notify', component: EmailNotificationComponent },
  { path: 'upload', component: DocUploadComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'transaction-summary', component: ActivityTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  