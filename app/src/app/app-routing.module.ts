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
import { AppSettingsComponent } from './components/settings/app-settings/app-settings.component';

//ACTIVATION KEY
import { ActivationComponent } from './components/password/activation/activation.component';
import { SuspentionComponent } from './components/password/suspention/suspention.component';

//Admin Home
import { AdminhomeComponent } from './components/dashboard/admin/adminhome/adminhome.component';
import { PossitionComponent } from './components/settings/possition/possition.component';
import { CentersComponent } from './components/settings/centers/centers.component';
import { UnitsComponent } from './components/settings/units/units.component';

//USER
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import { TeamsComponent } from './components/users/teams/teams.component';
import { RanksComponent } from './components/users/ranks/ranks.component';

const routes: Routes = [

  //AUTHORIZATION

  // {
  //   path : 'activation',
  //   component : ActivationComponent ,
  //   canActivate : [BeforeLoginService]
  // },

  {
    path : '',
    redirectTo : 'admin',
    pathMatch : 'full',
    canActivate : [AfterLoginService]
  },
  {
    path: '',
    component: AdminhomeComponent,
    canActivate : [AfterLoginService]
  },
  {
    path: 'admin',
    component: AdminhomeComponent,
    canActivate : [AfterLoginService]
  },

  {
    path : 'forget-password',
    component : ForgetPasswordComponent ,
    canActivate : [BeforeLoginService]
  },
 
  {
    path : 'signup',
    component : SignupComponent,
    canActivate : [BeforeLoginService]
  },

  //SETTINGS
  {
    path : 'appsettings',
    component : AppSettingsComponent,
    canActivate : [AfterLoginService],
    data: {role: 'Administrator'}
  },
  {
    path : 'Position',
    component : PossitionComponent,
    canActivate : [AfterLoginService],
    data: {role: 'Administrator'}
  },

  {
    path : 'Centers',
    component : CentersComponent,
    canActivate : [AfterLoginService],
    data: {role: 'Administrator'}
  },
  {
    path : 'Units',
    component : UnitsComponent,
    canActivate : [AfterLoginService],
    data: {role: 'Administrator'}
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

  //USER

  {
    path : 'all-users',
    component : AllUsersComponent,
    canActivate : [AfterLoginService]
  },
  {
    path : 'teams',
    component : TeamsComponent,
    canActivate : [AfterLoginService]
  },
  {
    path : 'ranks',
    component : RanksComponent,
    canActivate : [AfterLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
