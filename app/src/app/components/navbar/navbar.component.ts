import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { GetFunctionsService } from 'src/app/Services/get-functions.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;
  face: any;
  permissionResponse: any;
  menus: any;
  position: any;
  appcheck: any;
  companyName: any;
  contactNumber: any;
  email: any;
  for_email: any;
  icon: any;
  logo: any;
  short_name: any;
  app_url: any;
  pos: any;
  notifyResponse: any;
  notifications: any;
  countNotifications: any
  web_url: any;

  loggedinUsers: any;
  allNotifications: any;
  response: any;
  arr = [];


  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor(( new Date).getTime() / 1000)) >= expiry;
  }

  constructor(
    private Auth : AuthService,
    private router  : Router,
    private Token : TokenService,
    private Jarwis: JarwisService,
    private Notificate: NotificationsService,

  ) {

  }

  ngOnInit(): void {

    this.Notificate.receiveloginnotification().subscribe(
      data=>{
       this.loggedinUsers = data.identity
      }
    )
    this.Notificate.receiveallnotification().subscribe(
      data=>{
       this.allNotifications = data.datas
      }
    )

    // this.Jarwis.getNotifications().subscribe(
    //   datas =>{
    //       this.notifyResponse = datas;
    //       this.notifications = this.notifyResponse.notifications;
    //       this.countNotifications = this.notifyResponse.countNotifications
    //   });




    this.Auth.authStatus.subscribe(Value => this.loggedIn = Value);

    let token= localStorage.getItem("token");

    if (this.tokenExpired(token)){
      this.Token.remove();
      this.Auth.changeAuthStatus(false);
      this.router.navigateByUrl('/login');
    }

    this.Jarwis.check().subscribe(
      data => {
        this.appcheck = data;
        this.companyName = this.appcheck.Data.company_name;
        this.contactNumber = this.appcheck.Data.contact_number;
        this.email = this.appcheck.Data.email;
        this.for_email = this.appcheck.Data.for_email;
        this.icon = this.appcheck.Data.icon;
        this.logo = this.appcheck.Data.logo;
        this.short_name = this.appcheck.Data.short_name;
        this.app_url = this.appcheck.Data.app_url;
        this.web_url = this.appcheck.Data.web_url;

      }
      );

    this. getPermission();
  }

  // alertt(){
  //   alert()
  // }
  getPermission(){
    this.Jarwis.getPermission().subscribe(
      datas =>{
          this.permissionResponse = datas;
          // this.menus = JSON.parse(this.permissionResponse.data[0].permission);
          this.position = this.permissionResponse.data.position_name;
      });
  }

  logout( Event : MouseEvent) {
    Event.preventDefault();
    this.Auth.changeAuthStatus(false);
    this.Token.remove();
    this.Token.remove2();
    this.Token.remove3();
    this.Token.remove4();
    this.router.navigateByUrl('/login');

    // window.location.reload();
  }

  checkNotification(val){

      this.Jarwis.seeNotification(val).subscribe(
        datas =>{

        });
  }

}
