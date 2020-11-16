import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService\

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

  constructor(
    public Jarwis:JarwisService
  ) { }

  ngOnInit(): void {
    this.Jarwis.centerType().subscribe(
      data=>{
        let response:any =  data;
       this.center_type = response.centerType;
       this.departments = response.departments;
      }
    )
  }
  onSubmit(form:NgForm){
    this.Jarwis.CenterTypes(form.value).subscribe(
    data=>{
      if(data){
        this.ngOnInit()
      }
    }
    )

  }
  editcentertype(id){
    this.id = id
 this.Jarwis.editCentertype(id).subscribe(
   data=>{
     this.response = data[0];
     this.editName = this.response.name;
     this.editDescription = this.response.description;
     this.editDepartment = this.response.deptname;
     this.editDept_id = this.response.dept_id
     console.log(this.editDepartment)
     
   }
 )
  }

  Edit(form:NgForm){
    if(form.value.dept_id==''){
      form.value.dept_id = this.editDept_id
    }
    this.Jarwis.editCenterType({form:form.value,id:this.id}).subscribe(
      data=>{
        this.ngOnInit();
      }
    )
  }
  onDelete(id){
    this.delete_id = id;
  }
   delete(){
    this.Jarwis.deleteCenterType(this.delete_id).subscribe(
      data=>{
        this.ngOnInit()
      }
    )
  }

}
