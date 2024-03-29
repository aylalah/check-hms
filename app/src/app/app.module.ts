import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AdminhomeComponent } from './components/dashboard/admin/adminhome/adminhome.component';
import { ForgetPasswordComponent } from './components/password/forget-password/forget-password.component';
import { ActivationComponent } from './components/password/activation/activation.component';
import { SuspentionComponent } from './components/password/suspention/suspention.component';
import { RegistrationComponent } from './components/password/registration/registration.component';
import { MaintenanceComponent } from './components/password/maintenance/maintenance.component';
import { AppSettingsComponent } from './components/settings/app-settings/app-settings.component';
import { StaffNavbarComponent } from './components/navbar/staff-navbar/staff-navbar.component';
import { PossitionComponent } from './components/settings/possition/possition.component';
import { CentersComponent } from './components/settings/centers/centers.component';
import { UnitsComponent } from './components/settings/units/units.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import { TeamsComponent } from './components/users/teams/teams.component';
import { RanksComponent } from './components/users/ranks/ranks.component';


const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    AdminhomeComponent,
    ForgetPasswordComponent,
    ActivationComponent,
    SuspentionComponent,
    RegistrationComponent,
    MaintenanceComponent,
    AppSettingsComponent,
    StaffNavbarComponent,
    PossitionComponent,
    CentersComponent,
    UnitsComponent,
    AllUsersComponent,
    TeamsComponent,
    RanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxSkeletonLoaderModule,
    SocketIoModule.forRoot(config),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
