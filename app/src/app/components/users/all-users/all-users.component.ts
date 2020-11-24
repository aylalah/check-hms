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
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  appcheck: any;
  companyName: any;
  contactNumber: any;
  appEmail: any;
  for_email: any;
  icon: any;
  logo: any;
  short_name: any;
  app_url: any;
  web_url: any;

  permisions:Array<{component_id:Number,read:String,write:String}>=[]
  response: any;
  department: any;
  role: any;
  position: any;
  branch: any;
  givenDept: any;
  error: any;
  profile: any;
  givenRole: any;
  staff: any;
  thisStaff: any;
  imgLink: any;

  allstaff: any;

  disabled = false;
  roleID: any;
  sbranch: any;
  sResponse: Object;
  firstname: any;
  lastname: any;
  gender: any;
  email: any;
  staff_countAll: any;
  deptname: any;
   res:any
  modules: any;
  added = [];
  ranks: any;
  teams: any;
  deptId: any;

  constructor( public Jarwis: JarwisService,
    private Token: TokenService,
    private ngxService: NgxUiLoaderService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.ngxService.startLoader('loader-01');
    this.Jarwis.displayAllstaff().subscribe(
      data=>{
      this.response = data;
      this.staff = this.response
     this.staff_countAll = this.staff.countAll
      this.allstaff=this.staff.all
      this.ngxService.stopLoader('loader-01');
    })
    
    this.Jarwis.check().subscribe(
      data => {
        this.appcheck = data;
        this.companyName = this.appcheck.Data.company_name;
        this.contactNumber = this.appcheck.Data.contact_number;
        this.appEmail = this.appcheck.Data.email;
        this.for_email = this.appcheck.Data.for_email;
        this.icon = this.appcheck.Data.icon;
        this.logo = this.appcheck.Data.logo;
        this.short_name = this.appcheck.Data.short_name;
        this.app_url = this.appcheck.Data.app_url;
        this.web_url = this.appcheck.Data.web_url;
      });
    
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.profile = this.response.det[0];
      this.roleID = this.profile.role_id
    })

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;
      this.department = this.response
    })
    // this.Jarwis.displayAllposition().subscribe(
    //   data=>{
    //     let res:any = data
    //     this.position =res;
    //   }
    // )

    this.Jarwis.getDesignations().subscribe(
      data=>{
      this.response = data;
      this.position = this.response.positions;
      this.role = this.response.roles;
      this.ranks = this.response.ranks;
      this.teams = this.response.teams
    })

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.branch = this.response
      })
      $("#search_staff").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#staff_sea .card").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      $("#patient").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#search_branch span").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

       
      });
  }
  patient(){
    console.log("hello")
      
  }
  onChange1(b){
    this.givenDept = b.target.value;
    this.Jarwis.deptModules(this.givenDept).subscribe(
      data=>{
        this.res = data;
        this.sbranch = this.res.centers;
        this.modules = this.res.dept;
        this.deptname = this.res.department[0].name;
        this.deptId = this.res.department[0].id;
      }
    )
   
  
  }
  check(id,data){
      let index = this.permisions.find(i =>{
        return i.component_id === id;
      })
      if (index && data =='read') {
        if (index.read =="") {
          index.read=data
        } else if (index.read =="read" && index.write==""){
        let dele=  this.permisions.findIndex(i=>{return i.component_id===id})
            this.permisions.splice(dele,1)
          } 
          else{
            index.read = ""
          }
      }
      else if (index && data =='write') {
       if (index.write == "") {
         index.write = data;
       } else if (index.write =="write" && index.read==""){
        let dele=  this.permisions.findIndex(i=>{return i.component_id===id})
            this.permisions.splice(dele,1)
          } 
          else{
            index.write = ""
          }
      }
      else{
        if (data =='read') {
          this.permisions.push({component_id:id,read:data,write:""})
        } else if(data =='write') {
          this.permisions.push({component_id:id,read:"",write:data})
        }
  }
  }
  
  onSelectRole(r){
    this.givenRole = r.target.value;
    this.ngOnInit()
  }

  onSubmit(form: NgForm) {
    this.disabled = true;
    form.value.dept_id= this.deptId;
    console.log(form.value);
    this.Jarwis.signup(form.value).subscribe(
     data=>{
       this.Jarwis.permision({user_id:data,permites:this.permisions}).subscribe(
         data=>{
           this.handleResponse(data)
         }
       )
     }  
    );
  }

  uStatus(id){
    this.Jarwis.uStatus(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleError(error)
  );
   }

   c_uStatus(id){
     if(confirm('This will block the user from logging in')){
      this.Jarwis. c_uStatus(id).subscribe(
        data => this.handleResponse(data),
          error => this.handleError(error)
     );
     }
   }

   reStatus(id){
    if(confirm('This will re-activate the user')){
      this.Jarwis. reStatus(id).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
    );
    }
   }
   getId(id){
     this.thisStaff = id;
   }
  handleResponse(data) { 

    // this.router.navigateByUrl('/Admin/(side:catacturer');
    this.ngOnInit();
    this.disabled = false;
  }

  handleError(error) {
    this.error = error.error.errors;
    this.firstname= this.error.firstname;
    this.lastname=  this.error.lastname;
    this.gender=  this.error.gender;
    this.email=  this.error.email;
    this.disabled = false;
  }

}
