import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    ActivityTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,MatRadioModule, MatSnackBarModule
  ],
  providers: [NgxImageCompressService,  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
