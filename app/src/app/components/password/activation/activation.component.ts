import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { IfStmt } from '@angular/compiler';

declare let $: any;
declare let  toastr: any;

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  public form = {
    value : null
  }
  disabled= false;
  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Token:TokenService,
    private router  : Router,
    private Auth : AuthService
    ) { }

  ngOnInit(): void {
    this.disabled= true;
    this.disabled= false;
    this.disabled= false;
  }

  onSubmit(){
    this.disabled= true;
    console.log(this.form);
    this.Jarwis.activation(this.form).subscribe(
     data => this.handleResponse(data, ),
     error => this.handleError(error)
     );

  }

  handleResponse(data){

    // this.router.navigateByUrl('/login');

    this.disabled= false;

    if (data.ErrorResponse == 'success') {

        $(function() {
          toastr.options.timeOut = "1000";
          toastr.options.closeButton = true;
          toastr.options.positionClass = 'toast-bottom-right';
          toastr['success'](data.Message);
      });

      window.location.reload();

    } else if (data.ErrorResponse =='error') {

        $(function() {
          toastr.options.timeOut = "1000";
          toastr.options.closeButton = true;
          toastr.options.positionClass = 'toast-bottom-right';
        //   toastr.options.onclick = function() {
        //     alert('onclick callback');
        // },

        toastr['error'](data.Message);
      });

    }
  }

  handleError(error){
    this.error = error.error.error;

    this.disabled= false;

    if (this.error) {

    } else {
      $(function() {
        toastr.options.timeOut = "100";
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options = {
          "onCloseClick": function() {
              alert('onCloseClick callback');
          }
      };
        toastr['error']('Oops, There is an error, you may check your connection');
    });
    }
  }

}
