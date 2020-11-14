import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-staff-navbar',
  templateUrl: './staff-navbar.component.html',
  styleUrls: ['./staff-navbar.component.css']
})
export class StaffNavbarComponent implements OnInit {
    public loggedIn : boolean;
    face: any;
    permissionResponse: any;
    menus: any;
    position: any;


    private tokenExpired(token: string) {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor(( new Date).getTime() / 1000)) >= expiry;
    }

  constructor(
      private Auth : AuthService,
      private router  : Router,
      private Token : TokenService,
      private Jarwis: JarwisService,
    ) {

    }

    ngOnInit(): void {
      this.Auth.authStatus.subscribe(Value => this.loggedIn = Value);

      let token= localStorage.getItem("token");

      if (this.tokenExpired(token)){
        this.Token.remove();
    this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
      }

      this. getPermission();
    }

    getPermission(){
      this.Jarwis.getPermission().subscribe(
        datas =>{
            this.permissionResponse = datas;
            this.menus = JSON.parse(this.permissionResponse.data[0].permission);
            this.position = this.permissionResponse.data[0].position_name;
        });
    }

    logout( Event: MouseEvent) {
      Event.preventDefault();
      this.Auth.changeAuthStatus(false);
      this.Token.remove();
      this.Token.remove2();
      this.router.navigateByUrl('/login');

      // window.location.reload();
    }
}
