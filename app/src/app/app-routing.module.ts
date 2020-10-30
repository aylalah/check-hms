import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { ForgetPasswordComponent } from './components/password/forget-password/forget-password.component';

//ACTIVATION KEY
import { ActivationComponent } from './components/password/activation/activation.component';
import { SuspentionComponent } from './components/password/suspention/suspention.component';

//Admin Home
import { AdminhomeComponent } from './components/dashboard/admin/adminhome/adminhome.component';

const routes: Routes = [

  //AUTHORIZATION
  // {
  //   path : 'activation',
  //   component : ActivationComponent ,
  //   canActivate : [BeforeLoginService]
  // },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full',
    // component : LoginComponent ,
    // canActivate : [BeforeLoginService]
  },
  {
    path : 'forget-password',
    component : ForgetPasswordComponent ,
    canActivate : [BeforeLoginService]
  },
  {
    path : 'login',
    component : LoginComponent ,
    canActivate : [BeforeLoginService]
  },
  {
    path : 'signup',
    component : SignupComponent,
    canActivate : [BeforeLoginService]
  },

  //ADMIN

  // {
  //   path : '',
  //   redirectTo : 'admin',
  //   component : AdminhomeComponent,
  //   canActivate : [AfterLoginService]
  // },

  {
    path : 'admin',
    component : AdminhomeComponent,
    canActivate : [AfterLoginService]
  },
  {
    path : 'profile',
    component : ProfileComponent,
    canActivate : [AfterLoginService]
  },
  {
    path : 'request-password-reset',
    component : RequestResetComponent,
    canActivate : [AfterLoginService]
  },
  {
    path : 'response-password-reset',
    component : ResponseResetComponent,
    canActivate : [AfterLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
