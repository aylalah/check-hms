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
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {

  public submissionForm: FormGroup;
  response: any;
  error: any;
  catName:any;
  manufid:any;
  onUpdate:any;
  disabled = false;
  dept_name;
  deptlists:any;
   pharmacy:any;
   record:any;
   radio:any;
   revenue:any;
   theater:any;
   ward:any;
   nurse:any;
   lab:any;
   clinic:any
   role:any;
   res:any;
   department:any;
   depts:any;
   clinic_dept=[];
   oppration_dept=[];
   center_dept:any;
   suspend_id:any;
   activate_id:any;
   branch_details:any;
   staffs:any;
   branch_name:any;
   branch_adress:any;
   branch_hod:any;
   branch_status:any;
  deptli: any;
  apppoint_type: any;
  dd: any;
  staff: any;
  app_type: any;
  depart: any;
  center: any;
  branch_rep_id: any;
  branches: any;
  departments: any;
  branche_id: any;
  department_id: any;
  depart_name: any;
  center_name: any;
  depart_id: any;
  center_id: any;
  branch_id: any;
  clinic_type: any;
  clinic_tpes: any;
  clinic_types: any;
  br_search: string;
  deptName:any;
  deptid:any;
  deptDescrip:any;
  admin: any;
  center_type: any;
  responseMsg:any;
  permissionResponse: any
  userPermission: any
  public permission = {
    actions: null,
    approve: null,
    delete: null,
    edit: null,
    read: null,
    write: null,
  };

  readpermission: boolean;
  position: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.ngxService.startLoader('loader-01'); 
    this.submissionForm = this.formBuilder.group(      
      {
        name: [''],
        branch_name  : [''],
        branch_adress : [''],
        branch_hod    : [''],
        branch_status : [''],
        branch_rep_id : [''],
        branche_id    : [''],
        department_id : [''],
        depart_name  : [''],
        depart_id  : [''],
        center_name  : [''],
        center_id  : [''],
        branch_id : [''],
        clinic_type : [''],
        depart : [''],
        staffs: [''],
          })

    this.Jarwis.getPermission().subscribe(
      datas =>{
          this.permissionResponse = datas;
          this.userPermission = JSON.parse(this.permissionResponse.data.permission);
          this.permission.read = this.userPermission[0].read;
          this.permission.actions = this.userPermission[0].actions;
          this.permission.delete = this.userPermission[0].delete;
          this.permission.approve = this.userPermission[0].approve;
          this.permission.write = this.userPermission[0].write;
          this.position = this.permissionResponse.data.position_name;
   
      });



    this.Jarwis.getDepertment().subscribe(
      data=>{ 
        this.depts=data;
        this.depts.map(d=>{

            this.clinic_dept.push(d);
        

            this.oppration_dept.push(d);
    
        })
        // console.log(this.clinic_dept)
        // console.log(this.oppration_dept)
        
        setTimeout(() => {
          let de = this.department
          let index = this.depts.filter(function(card) {
            return card.name == de;
            //  console.log(this.department)
          })
          this.center_dept=index;
        },5000);
        
       }
    )


    this.Jarwis.displaysetBranch().subscribe(
      data=>{
      this.response = data; 
      // console.log(this.response)        
      this.pharmacy = this.response.pharm
      this.clinic = this.response.clinic; 
      this.radio = this.response.radio;
      this.record = this.response.record;
      this.revenue=this.response.revenue;
      this.admin=this.response.admin
      this.radio=this.response.radio
      this.lab=this.response.lab
      this.theater=this.response.theater
      this.nurse=this.response.nurse
      this.ward=this.response.ward

      setTimeout(() => {
        this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
      });
    })
    this.Jarwis.getAllUnits().subscribe(data=>{
      this.deptlists = data;
      this.app_type = this.deptlists.modules ;
    },
    err=>{console.log(err)}
    )
    $("#branch_search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#branches tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    this.Jarwis.centerType().subscribe(
      data=>{
        let response:any =  data;
      this.clinic_types = response.centerType;

      }
    );

  }
  branch(e){
    this.ngOnInit
    // $("#branch_search");
    // this.br_search = ""
   }
   



  onSubmit(form: NgForm) {
   this.disabled = true;
   if (form) {
     this.Jarwis.createCenters(form.value).subscribe(
       data => this.handleResponse(data),
       error => this.handleError(error),             
     ); 
  }
  }

  onSuspend(id: string) {
    this.suspend_id=id;
  }
  suspend(){
    this.Jarwis.suspendBranch(this.suspend_id).subscribe(  
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }

  onActivate(id: string) {
  this.activate_id=id
  }
  activate(){
    this.Jarwis.activateBranch(this.activate_id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }

  
  onEdit (id:any){
    this.ngxService.startLoader('loader-02');

    this.Jarwis.onEditBranch({id:id}).subscribe(
      data=>{
        this.branch_details = data;
        this.branch_name   = this.branch_details.branch[0].name;
        this.branch_adress = this.branch_details.branch[0].address;
        this.branch_hod    = this.branch_details.branch[0].firstname;
        this.branch_status = this.branch_details.branch[0].status;
        this.branch_rep_id = this.branch_details.branch[0].sales_rep;
        this.branche_id    = this.branch_details.branch[0].branch_id;
        this.department_id = this.branch_details.branch[0].dept_id;
        this.depart_name   =  this.branch_details.branch[0].dept_name;
        this.depart_id   =  this.branch_details.branch[0].dept_id;
        this.center_name   =  this.branch_details.branch[0].branch_name;
        this.center_id   =  this.branch_details.branch[0].branch_id;
        this.branch_id =this.branch_details.branch[0].id;
        this.clinic_type = this.branch_details.branch[0].clinic_type;
        this.depart= this.branch_details.department;
        this.staffs = this.branch_details.staffs;  
        
        this.ngxService.stopLoader('loader-02');
        
        this.submissionForm = this.formBuilder.group(      
          {
            name: [''],
            branch_name  : [this.branch_details.branch[0].name],
            branch_adress : [this.branch_details.branch[0].address],
            branch_hod    : [this.branch_details.branch[0].firstname],
            branch_status : [this.branch_details.branch[0].status],
            branch_rep_id : [this.branch_details.branch[0].sales_rep],
            branche_id    : [this.branch_details.branch[0].branch_id],
            department_id : [this.branch_details.branch[0].dept_id],
            depart_name  : [this.branch_details.branch[0].dept_name],
            depart_id  : [this.branch_details.branch[0].dept_id],
            center_name  : [this.branch_details.branch[0].branch_name],
            center_id  : [this.branch_details.branch[0].branch_id],
            branch_id : [this.branch_details.branch[0].id],
            clinic_type : [this.branch_details.branch[0].clinic_type],
            depart : [''],
            staffs: [''],
              })
      });

      
  }
  branche(){
  this.Jarwis.centerBranch().subscribe(
    data=>{
      let res:any = data
      this.branches = res.center
    }
  )
  }
  onUpdateBranch(){
    this.disabled = true;
    this.Jarwis.updateBranch(this.submissionForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error), 
    )
  }
  handleResponse(data) {   
   
    document.getElementById('closemodal').click()
    document.getElementById('closemodal2').click()
    this.ngOnInit();
    // form=null;
    this.disabled = false;

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
    this.error = error.error.errors;
   
    this.disabled = false;
  }
 
  dept(e){
    this.dept_name=e.target.value;
    this.Jarwis.getAllUnits().subscribe(data=>{
      this.deptlists = data;
       this.app_type = this.deptlists.modules ;
    },
    err=>{console.log(err)}
    )

    $(function() {
      toastr.options.timeOut = "1000";
      toastr.options.closeButton = true;
      toastr.options.positionClass = 'toast-bottom-right';
      toastr['error']( 'failed');
  });
  }

  close(){
    document.getElementById('closemodal').click()
  }

}
