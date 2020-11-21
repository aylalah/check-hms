import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

import { NotificationsService } from 'src/app/Services/notifications.service';

declare let alert: any;
declare let $: any;
declare let swal: any;
declare let  toastr: any;

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent implements OnInit {
  public submissionForm: FormGroup;
  control = new FormControl();
  appResponse: any;
  appInfo: any;
  possitions: any;
  possitionsResponds: any;
  imgLink: any;
  editingPossition: Boolean = false;
  error: any;
  image: string | ArrayBuffer;
  logo: string | ArrayBuffer;
  icon: string | ArrayBuffer;
  logo2: any;
  icon2: any;
  disabled= false;
  user_position: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private Notificate: NotificationsService,
  ) {
      this.Jarwis.profile().subscribe(
        data=>{
          this.appResponse = data
          this.user_position = this.appResponse.position_id
          this.Notificate.viewcustomizenotification(data)
        }
      )

      this.Notificate.receivecustomizenotification().subscribe(
        data=>{
          if(this.user_position == data.identity[0].position_id){
            $(function() {
              toastr.options.timeOut = "1000";
              toastr.options.closeButton = true;
              toastr.options.positionClass = 'toast-bottom-right';
              toastr['success'](data.message + ' ' + 'Accessed by ' + data.identity[0].position_name);
            });
          }
        }
      )
   }

  ngOnInit(): void {
    this.ngxService.startLoader('loader-01'); 
    this.disabled= false;
    this.submissionForm = this.formBuilder.group(
      {
        id : [''],
        company_name : [''],
        short_name : [''],
        address : [''],
        logo : [''],
        icon : [''],
        logo2 : [''],
        icon2 : [''],
        contact_number : [''],
        email : [''],
        web_url : [''],
        for_email : [''],
        module : [''],
        status : [''],
        license_key : [''],
        owner_name : [''],
        owner_mobile : [''],
        country : [''],
        state : [''],
        city : [''],
        phone2 : [''],
        time_zone : [''],
        date_formate : [''],
        language : [''],
        currency : [''],
        currency_symbol : [''],
        invoice_prefix : [''],
        expiring_date : [''],
        app : [''],
      });

        //APP INFO
    this.Jarwis.app_info().subscribe(
        data=>{
          this.appResponse=data;
          this.appInfo = this.appResponse.Data;
          this.imgLink = this.appInfo.app_url;
          this.logo = this.appInfo.logo;
          this.icon = this.appInfo.icon;
          this.logo2 = this.appInfo.logo;
          this.icon2 = this.appInfo.icon;

          setTimeout(() => {
            this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
          });

          this.submissionForm = this.formBuilder.group(
            {
              id : [this.appInfo.id],
              company_name : [this.appInfo.company_name],
              short_name : [this.appInfo.short_name],
              address : [this.appInfo.address],
              logo : [this.appInfo.logo],
              icon : [this.appInfo.icon],
              logo2 : [this.appInfo.logo],
              icon2 : [this.appInfo.icon],
              contact_number : [this.appInfo.contact],
              email : [this.appInfo.email],
              web_url : [this.appInfo.web_url],
              for_email : [this.appInfo.for_email],
              module : [this.appInfo.module],
              license_key : [this.appInfo.license_key],
              owner_name : [this.appInfo.owner_name],
              owner_mobile : [this.appInfo.owner_mobile],
              country : [this.appInfo.country],
              state : [this.appInfo.state],
              city : [this.appInfo.city],
              phone2 : [this.appInfo.phone2],
              time_zone : [this.appInfo.time_zone],
              date_formate : [this.appInfo.date_formate],
              language : [this.appInfo.language],
              currency : [this.appInfo.currency],
              currency_symbol : [this.appInfo.currency_symbol],
              invoice_prefix : [this.appInfo.invoice_prefix],
              expiring_date : [this.appInfo.expiring_date],
              app : [this.appInfo.app],
            });

           

        });
  }

  uploadlogo(event){
    let files =event.target.files[0];
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {

      this.logo = reader.result;
      console.log(this.logo);
      this.submissionForm.value.logo = this.logo;

    }
    reader.readAsDataURL(files);
  }

  uploadicon(event){
    let files2 =event.target.files[0];
    let reader2 = new FileReader();
    let vm = this;
    reader2.onloadend =()=> {

      this.icon = reader2.result;
      console.log(this.logo);
      this.submissionForm.value.icon = this.icon;

    }
    reader2.readAsDataURL(files2);
  }

  onSubmitsetting() {
      this.disabled= true;
      console.log(this.submissionForm.value);
      this.Jarwis.updateGeneralSet(this.submissionForm.value).subscribe(
        data => this.handleResponse(data, ),
        error => this.handleError(error)
        );
  }

  onSubmitImage() {

    this.Jarwis.updateAppImage(this.image).subscribe(
      data => this.handleResponse(data, ),
      error => this.handleError(error)
      );
}

  oneditingPos(id){
    this.editingPossition = true;

  }

  closeEdit(){
    this.editingPossition = false;

  }

  AddNew(){
    this.editingPossition = false;
  }

  handleError(error) {

    this.error = error.error.errors;
    // console.log(error);

    this.disabled= false;

  }
  handleResponse(data) {


    $(function() {
      toastr.options.timeOut = "2000";
      toastr.options.closeButton = true;
      toastr.options.positionClass = 'toast-top-center';
      if (data.success == false) {
        toastr['error'](data.message);
        this.disabled= false;
      } else {
        toastr['success'](data.message);
        this.disabled= false;
      }
  });

    if (data.success == false) {
      this.disabled= false;
    } else {
      this.disabled= false;
    }

  }

}
