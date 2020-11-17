import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService\

declare let alert: any;
declare let $: any;
declare let swal: any;
declare let  toastr: any;

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  center_type:any;
  departments:any;
  id: any;
  response: any;
  editName: any;
  editDescription: any;
  editDepartment: any;
  editDept_id: any;
  delete_id: any;
  responseMsg: any;
  disabled= false;

  constructor(
    public Jarwis:JarwisService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.ngxService.startLoader('loader-01'); 

    this.Jarwis.centerType().subscribe(
      data=>{
        let response:any =  data;
       this.center_type = response.centerType;
       this.departments = response.departments;

       
        setTimeout(() => {
          this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        });
      }
    )
  }
  onSubmit(form:NgForm){
    this.disabled = true;
    this.Jarwis.CenterTypes(form.value).subscribe(
    data=>{
 
      let permitRes: any = data;
      this.responseMsg = permitRes.success;

      if(this.responseMsg == true){
        $(function() {
          toastr.options.timeOut = "1000";
          toastr.options.closeButton = true;
          toastr.options.positionClass = 'toast-bottom-right';
          toastr['success']( permitRes.message);         
      });
      }else{
        $(function() {
          toastr.options.timeOut = "1000";
          toastr.options.closeButton = true;
          toastr.options.positionClass = 'toast-bottom-right';
          toastr['error']( permitRes.message);
      });
      }
      this.ngOnInit()
      this.disabled= false;
      document.getElementById('close').click()
    });

  }
  editcentertype(id){
    this.id = id
    this.ngxService.startLoader('loader-02');
 this.Jarwis.editCentertype(id).subscribe(
   data=>{
     this.response = data[0];
     this.editName = this.response.name;
     this.editDescription = this.response.description;
     this.editDepartment = this.response.deptname;
     this.editDept_id = this.response.dept_id
     this.ngxService.stopLoader('loader-02');
   }
 )
  }

  Edit(form:NgForm){
    this.disabled = true;
    if(form.value.dept_id==''){
      form.value.dept_id = this.editDept_id
    }
    this.Jarwis.updateCenterType({form:form.value,id:this.id}).subscribe(
      data=>{
              let permitRes: any = data;
              this.responseMsg = permitRes.success;
        
              if(this.responseMsg == true){
                $(function() {
                  toastr.options.timeOut = "1000";
                  toastr.options.closeButton = true;
                  toastr.options.positionClass = 'toast-bottom-right';
                  toastr['success']( permitRes.message);         
              });
              }else{
                $(function() {
                  toastr.options.timeOut = "1000";
                  toastr.options.closeButton = true;
                  toastr.options.positionClass = 'toast-bottom-right';
                  toastr['error']( permitRes.message);
              });
              }
              this.ngOnInit();
              document.getElementById('editclose').click()
              this.disabled= false;
            }
          )
        }
  onDelete(id){
    this.delete_id = id;
  }
   delete(){
    this.Jarwis.deleteCenterType(this.delete_id).subscribe(
      data=>{
        let permitRes: any = data;
        this.responseMsg = permitRes.success;
  
        if(this.responseMsg == true){
          $(function() {
            toastr.options.timeOut = "1000";
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-bottom-right';
            toastr['success']( permitRes.message);         
        });
        }else{
          $(function() {
            toastr.options.timeOut = "1000";
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-bottom-right';
            toastr['error']( permitRes.message);
        });
        }
        this.ngOnInit()
      }
    )
  }

}
