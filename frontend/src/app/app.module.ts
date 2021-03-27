import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterComponent } from './@auth/components/register/register.component';
import { LoginComponent } from './@auth/components/login/login.component';
import { FrameComponent } from './@theme/components/frame/frame.component';
import { OtpComponent } from './@auth/components/otp/otp.component';
import { ForgotPasswordFrameComponent } from './@theme/components/forgot-password-frame/forgot-password-frame.component';
import { ForgotPasswordComponent } from './@auth/components/forgot-password/forgot-password.component';
import { EmailNotificationComponent } from './@auth/components/email-notification/email-notification.component';
import { FooterComponent } from './@theme/components/footer/footer.component';
import { HeaderComponent } from './@theme/components/header/header.component';
import { DocUploadComponent } from './@auth/components/doc-upload/doc-upload.component';
import { ComingSoonComponent } from './@auth/components/coming-soon/coming-soon.component';
import { DndDirective } from './@auth/directives/dnd.directive';
import { ListingComponent } from './@components/listing/listing.component';
import { ResponseComponent } from './@components/response/response.component';
import { DashboardComponent } from './@components/dashboard/dashboard.component';
import { PaymentSummaryComponent } from './@components/payment-summary/payment-summary.component';
import { ActivityComponent } from './@components/activity/activity.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ActivityTwoComponent } from './@components/activity-two/activity-two.component';
import { PaymentPlatformComponent } from './@components/payment-platform/payment-platform.component';
import { VerificationSuccessComponent } from './@theme/components/verification-success/verification-success.component';
import { SettingsComponent } from './@theme/components/settings/settings.component';
import { ProfileComponent } from './@theme/components/profile/profile.component';
import { ChangePasswordComponent } from './@theme/components/change-password/change-password.component';
import { ChangeDocumentComponent } from './@theme/components/change-document/change-document.component';
import { EditProfileComponent } from './@theme/components/edit-profile/edit-profile.component';
import { UsersComponent } from './@super-admin/@components/users/users.component';
import { SideNavComponent } from './@super-admin/@theme/side-nav/side-nav.component';
import { AdminHeaderComponent } from './@super-admin/@theme/admin-header/admin-header.component';

import { ReportsComponent } from './@super-admin/@components/reports/reports.component';
import { LoginComponent as SuperLogin } from './@super-admin/@auth/login/login.component';
import { ConfigurationComponent } from './@super-admin/@components/configuration/configuration.component';
import { SupportComponent } from './@super-admin/@components/support/support.component';
import { SuperDashboardComponent } from './@super-admin/@components/super-dashboard/super-dashboard.component';
import { AddUserComponent } from './@super-admin/@components/add-user/add-user.component';

import { AddPaymentChannelComponent } from './@super-admin/@components/add-payment-channel/add-payment-channel.component';
import { FaqComponent } from './@super-admin/@components/faq/faq.component';
import { UserRoleComponent } from './@super-admin/@components/user-role/user-role.component';
import { AddUserRoleComponent } from './@super-admin/@components/add-user-role/add-user-role.component';
import { EditUserRoleComponent } from './@super-admin/@components/edit-user-role/edit-user-role.component';
import { EditUserComponent } from './@super-admin/@components/edit-user/edit-user.component';
import { CustomerComponent } from './@super-admin/@components/customer/customer.component';
import { CustomerProfileComponent } from './@super-admin/@components/customer-profile/customer-profile.component';
import { TransactionReportComponent } from './@super-admin/@components/transaction-report/transaction-report.component';
import { ViewReportComponent } from './@super-admin/@components/view-report/view-report.component';

import { MarketRateComponent } from './@super-admin/@components/market-rate/market-rate.component';
import { PaymentChannelComponent } from './@super-admin/@components/payment-channel/payment-channel.component';
import { TransactionConfigComponent } from './@super-admin/@components/transaction-config/transaction-config.component';
import { EditPaymentChannelComponent } from './@super-admin/@components/edit-payment-channel/edit-payment-channel.component';

import { NgxStripeModule } from "ngx-stripe";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FrameComponent,
    OtpComponent,
    ForgotPasswordFrameComponent,
    ForgotPasswordComponent,
    PaymentSummaryComponent,
    EmailNotificationComponent,
    FooterComponent,
    DocUploadComponent,
    ComingSoonComponent,
    HeaderComponent,
    DndDirective,
    ListingComponent,
    ResponseComponent,
    DashboardComponent,
    PaymentSummaryComponent,
    ActivityComponent,
    ActivityTwoComponent,
    PaymentPlatformComponent,
    VerificationSuccessComponent,
    SettingsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ChangeDocumentComponent,
    EditProfileComponent,
    UsersComponent,
    EditUserRoleComponent,
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
    SuperLogin,
    CustomerProfileComponent,
    MarketRateComponent,
    TransactionConfigComponent,
    EditPaymentChannelComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatButtonModule, MatRadioModule, MatSnackBarModule,
    NgxStripeModule.forRoot('pk_test_51IAFmIEHcxMTVy8njPaKBkcPepezj949SZsi15fo8JEe5S4Kt7dR7DlOKZJtncNDZXs8If7SeE63fAXzrblrSGhz00sJSnHAqB'),
    ToastrModule.forRoot(),
  ],
  providers: [NgxImageCompressService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }