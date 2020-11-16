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
  resp: any;
  profile: any;
  public role: any;

  constructor(private Token: TokenService, private Jarwis: JarwisService) { }

  getUser() {
   this.Jarwis.getPermission().subscribe(
          datas =>{
              this.resp = datas;
              this.profile = this.resp.data[0];
              this.role= this.profile.position_name;

              return this.role;
          });
  }


}
