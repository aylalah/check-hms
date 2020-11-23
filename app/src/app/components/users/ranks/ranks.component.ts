import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { GetFunctionsService } from 'src/app/Services/get-functions.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

declare let alert: any;
declare let $: any;
declare let swal: any;
declare let  toastr: any;

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {

  center_type: any;
  departments: any;
  id: any;
  response: any;
  editName: any;
  editDescription: any;
  editDepartment: any;
  editDept_id: any;
  delete_id: any;
  ranks:any;
  responseMsg: any;
  error: any;
  disabled= false;

  constructor(public Jarwis:JarwisService,
            private ngxService: NgxUiLoaderService
    ) { }

  ngOnInit(): void {
    this.ngxService.startLoader('loader-01');
    this.Jarwis.Ranks().subscribe(
      data=>{
        let response:any =  data;
       this.ranks = response.ranks;
       this.departments = response.departments;
       this.ngxService.stopLoader('loader-01');
      }
    )
    // this.Jarwis.displayDepartments().subscribe(
    //   data=>{
    //     console.log(data)
    //   }
    // )
  }
  onSubmit(form:NgForm){
    this.disabled = true;
    this.ngxService.startLoader('loader-01');
      this.Jarwis.AddRank(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error), 
      )
    }
  editranck(id){
    this.id = id
    this.ngxService.startLoader('loader-02');
 this.Jarwis.editingRank(id).subscribe(
   data=>{
     this.response = data[0];
     this.editName = this.response.rank_name;
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
    this.Jarwis.editRank({form:form.value,id:this.id}).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error), 
      )
    }
  onDelete(id){
    this.delete_id = id;
  }
   delete(){
    this.disabled = true;
    this.ngxService.startLoader('loader-01');
    this.Jarwis.deleteRank(this.delete_id).subscribe(    
        data => this.handleResponse(data),
        error => this.handleError(error), 
      )
    }
 
  handleResponse(data) {   
   
    this.ngOnInit()
    this.disabled= false;
    this.ngxService.stopLoader('loader-01');  
    document.getElementById('close').click()
    document.getElementById('close2').click()
    document.getElementById('close3').click()

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
  }

  handleError(error) {

    document.getElementById('close').click()
    document.getElementById('close2').click()
    document.getElementById('close3').click()
    this.error = error.error.errors;
   
    this.disabled = false;
  }

  onClose(){
    document.getElementById('close').click();
    document.getElementById('close2').click();
    document.getElementById('close3').click();
  }

}
