import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public submissionForm: FormGroup;
  control = new FormControl();
  appResponse: any;
  appInfo: any;
  possitions: Object;
  possitionsResponds: any;
  imgLink: any;
  editingPossition:Boolean = false;
  
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private formBuilder: FormBuilder,                                                                                                  
  ) { }

  ngOnInit(): void {

    alert(this.editingPossition);
    this.submissionForm = this.formBuilder.group(
      {          
        company_name : [''],
        short_name : [''],
        address : [''],
        logo : [''],
        icon : [''],
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

          this.submissionForm = this.formBuilder.group(
            {
                
              company_name : [this.appInfo.company_name],
              short_name : [this.appInfo.short_name],
              address : [this.appInfo.address],
              logo : [this.appInfo.logo],
              icon : [this.appInfo.icon],
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

        //LIST ALL POSSITION

        this.Jarwis.GETAllPosition().subscribe(
          data=>{
              this.possitionsResponds = data;
              this.possitions = this.possitionsResponds.Data;
          });
  }

  onSubmitPos(){
    
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

}
