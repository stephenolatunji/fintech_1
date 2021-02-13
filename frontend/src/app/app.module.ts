import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './@auth/components/register/register.component';
import { LoginComponent } from './@auth/components/login/login.component';
import { FrameComponent } from './@theme/components/frame/frame.component';
import { OtpComponent } from './@auth/components/otp/otp.component';
import { ForgotPasswordFrameComponent } from './@theme/components/forgot-password-frame/forgot-password-frame.component';
import { ForgotPasswordComponent } from './@auth/components/forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FrameComponent,
    OtpComponent,
    ForgotPasswordFrameComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
