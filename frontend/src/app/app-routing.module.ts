import { EmailNotificationComponent } from './@auth/components/email-notification/email-notification.component';
import { ForgotPasswordComponent } from './@auth/components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './@auth/components/register/register.component';
import { LoginComponent } from './@auth/components/login/login.component';
import { OtpComponent } from './@auth/components/otp/otp.component';
import { ListingComponent } from './@components/listing/listing.component';
import { ListingTwoComponent } from './@components/listing-component/listing-two/listing-two.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "otp-auth", component: OtpComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "listing", component: ListingComponent },
  { path: "listing-two", component: ListingTwoComponent },
  { path: 'notify', component: EmailNotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
