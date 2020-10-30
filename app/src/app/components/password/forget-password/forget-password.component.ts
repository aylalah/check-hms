import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { IfStmt } from '@angular/compiler';

declare let $ : any;
declare let  toastr : any;

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  error: any;
  public form = {
    email : null,
    password : null
  }

  constructor(
    private Jarwis: JarwisService,
    private Token:TokenService,
    private router  : Router,
    private Auth : AuthService
              ) { }

  disabled= false;
 

  ngOnInit(): void {
  }

  onSubmit(){
    this.disabled= true;
    // this.Jarwis.login(this.form).subscribe(
    //  data => this.handleResponse(data, ),
    //  error => this.handleError(error)
    //  );     
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin');

    this.disabled= false;

    $(function() {
      toastr.options.timeOut = "true";
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
        toastr.options.timeOut = "true";
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-bottom-right';
        toastr['error']('Oops, There is an error, you may check your connection');
    });      
    }
  }

  notifications(){

    $(function() {
      toastr.options.timeOut = "true";
      toastr.options.closeButton = true;
      toastr.options.positionClass = 'toast-bottom-right';
      toastr['error']('Hi there, this is notification demo with HTML support. So, you can add HTML elements like <a href="javascript:void(0);">this link</a>');
  });

  }

}
