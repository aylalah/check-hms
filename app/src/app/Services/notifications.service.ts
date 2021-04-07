import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';
import { JarwisService } from './jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private socket: Socket,
    private Jarwis:JarwisService
  ) { }
  
  viewallnotification(data){
    this.socket.emit('view all notifications', data)
  }
  receiveallnotification(){
    let observable = new Observable<{message, datas}>(observer=>{
      this.socket.on('all notifications sent',(data)=>{
        observer.next(data);
      })
      return ()=>{this.socket.disconnect()}
    })
    return observable;
  }

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
