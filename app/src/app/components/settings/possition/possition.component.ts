import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

declare let alert: any;
declare let $: any;
declare let swal: any;
declare let  toastr: any;

@Component({
  selector: 'app-possition',
  templateUrl: './possition.component.html',
  styleUrls: ['./possition.component.css']
})
export class PossitionComponent implements OnInit {
  disabled: boolean;
  possitionsResponds: any;
  possitions: any;
  editingPossition: boolean;
  positionEditRes: any;
  newData: any;
  newaddCompToPos: any;
  editPosName: any;
  editPosStatus: any;
  editPosdept: any;
  editPosdescription: any;
  editPosId: any;
  addedCompToPos: any;
  modules: any;
  message: any;
  added: any;
  appcheck: any;
  companyName: any;
  contactNumber: any;
  email: any;
  for_email: any;
  icon: any;
  logo: any;
  short_name: any;
  app_url: any;
  deptPesponse: any;
  depertm: any;
  permitR: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {

    this.ngxService.startLoader('loader-01'); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
   

    
    this.disabled= false;
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

        setTimeout(() => {
          this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        });

      }
      );

    //LIST ALL POSSITION
    this.Jarwis.GETAllPosition().subscribe(
      data=>{
          this.possitionsResponds = data;
          this.possitions = this.possitionsResponds.Data;

          setTimeout(() => {
            this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
          });
      });

  }

  oneditingPos(id: any){
    this.ngxService.startLoader('loader-01');
    this.editingPossition = true;
    this.Jarwis.onEditPos(id).subscribe(
      data=>{
        this.positionEditRes = data;
        this.newData = this.positionEditRes.deptCom;
        this.positionEditRes.positionCom.map(r => {
          let dele=  this.newData.findIndex(i=>{return i.id===r.id})
          this.newData.splice(dele,1)
        })
        this.newaddCompToPos = this.newData
        this.editPosName = this.positionEditRes.position[0].position_name;
        this.editPosStatus = this.positionEditRes.position[0].status;
        this.editPosdept = this.positionEditRes.position[0].name;
        this.editPosdescription = this.positionEditRes.position[0].description;
        this.editPosId = this.positionEditRes.position[0].id;
        this.addedCompToPos = this.positionEditRes.positionCom;

        setTimeout(() => {
          this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        });

      }
    )
  }

 Checkchanging(e){
  this.Jarwis.onPermit({id:this.editPosId,component_id:e}).subscribe(
    data=>{
        let permitRes: any = data;
        this.permitR = permitRes.success;

        if(this.permitR == true){
          $(function() {
            toastr.options.timeOut = "1000";
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-bottom-right';
            toastr['success'](permitRes.message);
        });
        }else{
          $(function() {
            toastr.options.timeOut = "1000";
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-bottom-right';
            toastr['error'](permitRes.message);
        });
        }
    }
  )
}


  toggle(val){
    $(function() {
      // (Optional) Active an item if it has the class "is-active"
      $(".accordion2 > .accordion-item.is-active").children(".accordion-panel").slideDown();
      $(".accordion2 > .accordion-item").click(function() {
          // Cancel the siblings
          $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
          // Toggle the item
          $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
      });
  });
  }

}
