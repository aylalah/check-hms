import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;

  constructor(
    private Auth : AuthService,
    private router  : Router,
    private Token : TokenService
  ) { 

  }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(Value => this.loggedIn = Value);
  }

  logout( Event : MouseEvent) {
    Event.preventDefault();
    this.Auth.changeAuthStatus(false);
    this.Token.remove();
    this.router.navigateByUrl('/login');

    // window.location.reload();
  }

}
