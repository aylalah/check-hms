import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'src/app/Services/notifications.service';
import { JarwisService } from 'src/app/Services/jarwis.service';

declare let  toastr : any;
declare let $ : any;

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  public users = []
  
  constructor(
    private Notificate: NotificationsService,
    private Jarwis: JarwisService,
  ) {
      this.Jarwis.profile().subscribe(
        data=>{
          this.Notificate.viewloginnotification(data)
        }
      )

      this.Notificate.receiveloginnotification().subscribe(
        data=>{
          $(function() {
            toastr.options.timeOut = "2000";
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-bottom-right';
            toastr['success'](data.message);
          });
        }
      )

   }

  ngOnInit(): void {
  }

  // addMember(id){
  //   this.Notificate.addmember({user:id,group:this.group_id,admin:this.sender_id})
  //   }
}
