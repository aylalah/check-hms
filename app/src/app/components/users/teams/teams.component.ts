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
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    teams: any;
    centers: any;
    id: any;
    response: any;
    editName: any;
    editDescription: any;
    editDepartment: any;
    editDept_id: any;
    delete_id: any;
    editCenter: any;
    editCenter_id: any;
    disabled= false;
    responseMsg: any;
    error: any;

  
    constructor(
      public Jarwis:JarwisService,
      private ngxService: NgxUiLoaderService
    ) { }
  
    ngOnInit(): void {
      this.ngxService.startLoader('loader-01');
      this.Jarwis.Teams().subscribe(
        data=>{
          let response:any =  data;
         this.teams = response.teams;
         this.centers = response.centers;

         this.ngxService.stopLoader('loader-01');
       }
      )
    }
    onSubmit(form:NgForm){
      this.disabled = true;
      this.ngxService.startLoader('loader-01');
      this.Jarwis.AddTeam(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error), 
      )}

    onClose(){
      document.getElementById('close').click();
      document.getElementById('close2').click();
      document.getElementById('close3').click();
    }
    editTeam(id){
      this.id = id
      this.ngxService.startLoader('loader-02');    
      this.Jarwis.editingTeam(id).subscribe(
        data=>{
          this.response = data[0];
          this.editName = this.response.team_name;
          this.editDescription = this.response.description;
          this.editCenter = this.response.centerName;
          this.editCenter_id = this.response.center_id

          this.ngxService.stopLoader('loader-02');          
        }
      )
    }
  
    Edit(form:NgForm){
      this.disabled = true;
      if(form.value.center_tb_id==''){
        form.value.center_tb_id = this.editCenter_id
      }
      this.Jarwis.editTeam({form:form.value,id:this.id}).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error), 
      )
    }
    onDelete(id){
      this.delete_id = id;
    }
     delete(){
      this.disabled = true;
      this.Jarwis.deleteTeam(this.delete_id).subscribe(
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
  

}
