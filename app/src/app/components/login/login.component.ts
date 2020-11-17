import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { IfStmt } from '@angular/compiler';

// import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

declare let c3 : any;
declare let jQuery: any;
declare let $ : any;
declare let  $message : any;
declare let  toastr : any;
declare let  $context : any;
declare let  $position : any;
declare let  $positionClass : any;

declare let particle: any;
declare let particles2: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email : null,
    password : null
  }

  public error = null;
  disabled= false;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    // private _pushNotificationService: PushNotificationService,
    ) { }

  ngOnInit(): void {
    // const isGranted = this._pushNotificationService.isPermissionGranted;
    // if(isGranted){
    //   this.myFunction()
    // } else{ 
    //   this._pushNotificationService.requestPermission();
    // }
    // this.notifications()
  }


  // public PushNotificationOptions = {
  //   icon: '../assets/images/checklogo_3.png',
  //   sound: 'default',
  //   data:  'any',
  //   tag: 'string',
  //   dir: 'NotificationDirection',
  //   lang: 'string',
  //   renotify: 'boolean',
  //   sticky: 'boolean',
  //   vibrate: [100, 50, 10, 20, 20],
  //   noscreen: 'boolean',
  //   silent: false,
  // };

  // myFunction() {
  //   const title = 'Check Inventory';
  //   const options = new PushNotificationOptions();
  //   options.body = 'Native Push Notification';
 
  //   this._pushNotificationService.create(title, options).subscribe((notif) => {
  //     if (notif.event.type === 'show') {
  //       setTimeout(() => {
  //         notif.notification.close();
  //       }, 10000);
  //     }
  //     if (notif.event.type === 'click') {
  //       console.log('click');
  //       notif.notification.close();
  //     }
  //     if (notif.event.type === 'close') {
  //       console.log('close');
  //     }
  //   },
  //   (err) => {
  //        console.log(err);
  //   });
  // }


  onSubmit(){
    this.disabled = true;
    this.Jarwis.login(this.form).subscribe(
     data => this.handleResponse(data, ),
     error => this.handleError(error)
     );

  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Token.dashboard(data.role_id, data.role_name, data.pos_name);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin');

    this.disabled= false;

    // window.location.reload();

    $(function() {
      toastr.options.timeOut = "1000";
      toastr.options.closeButton = true;
      toastr.options.positionClass = 'toast-bottom-right';
      toastr['success']('Login Successfull');
  });
  }

  handleError(error){
    this.error = error.error.error;

    this.disabled= false;

    if (this.error) {

    } else {
      $(function() {
        toastr.options.timeOut = "1000";
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-bottom-right';
        toastr['error']('Oops, There is an error, you may check your connection');
    });
    }
  }

  notifications(){

    $(function() {
      toastr.options.timeOut = "1000";
      toastr.options.closeButton = true;
      toastr.options.positionClass = 'toast-bottom-right';
      toastr['error']('Hi there, this is notification demo with HTML support. So, you can add HTML elements like <a href="javascript:void(0);">this link</a>');
  });

  }

}
