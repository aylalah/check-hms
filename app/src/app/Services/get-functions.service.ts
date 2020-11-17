import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Injectable({
  providedIn: 'root'
})

export class GetFunctionsService {
  token: string;
  permissionResponse: any;
  permission: any;
  

  public user = {
    position: null,
  }

  constructor(private Token: TokenService, private Jarwis: JarwisService) { }

  getUser() {

    this.Jarwis.getPermission().subscribe(
      datas =>{
          // this.permissionResponse = datas;
          // this.permission = JSON.parse(this.permissionResponse.data[0].permission);
          // this.user.position = this.permissionResponse.data[0].position_name;
          // console.log(this.permissionResponse);
      });
  }

  getPosition(){

    console.log(this.user.position);
    return this.user;
   
  }


}
