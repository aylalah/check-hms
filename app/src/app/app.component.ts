import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { JarwisService } from 'src/app/Services/jarwis.service';

declare let $ : any;
declare let  toastr : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public error = null;
  disabled= false;
  title = 'app';
  public loggedIn : boolean;
  status: any;

  constructor(
    private Auth : AuthService,
    private router  : Router,
    private Jarwis: JarwisService,
    private Token : TokenService
  ) { }
  
  ngOnInit(): void {

    this.Jarwis.check().subscribe(
      data => this.handleResponse(data, ),
      error => this.handleError(error)
      );

    
    this.Auth.authStatus.subscribe(Value => this.loggedIn = Value);
  }

  handleResponse(data){
   
    this.status= data.Data.status;

    if (this.status == 'activated') {

      this.router.navigateByUrl('/admin');

    } else if (this.status == 'license') {

      this.router.navigateByUrl('/activation');

    } else if (this.status == 'suspended') {

      this.router.navigateByUrl('/404');

    }

    this.disabled= false;

  //   $(function() {
  //     toastr.options.timeOut = "true";
  //     toastr.options.closeButton = true;
  //     toastr.options.positionClass = 'toast-bottom-right';
  //     toastr['success']('Login Successfull');
  // });
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


}
