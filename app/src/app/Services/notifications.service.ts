import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';
import { JarwisService } from './jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private socket: Socket,
    private Jarwis:JarwisService
  ) { }
  
  viewloginnotification(data){
    this.socket.emit('view login notification', data)
  }
  receiveloginnotification(){
    let observable = new Observable<{message, identity}>(observer=>{
      this.socket.on('login notification sent',(data)=>{
        observer.next(data);
      })
      return ()=>{this.socket.disconnect()}
    })
    return observable;
  }

  viewcustomizenotification(data){
    this.socket.emit('view customize notification', data)
  }

  receivecustomizenotification(){
    let observable = new Observable<{message, identity}>(observer=>{
      this.socket.on('customize notification sent',(data)=>{
        observer.next(data);
      })
      return ()=>{this.socket.disconnect()}
    })
    return observable;
  }
 
}
