import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { GetFunctionsService } from 'src/app/Services/get-functions.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  token: string;
  resp: any;
  profile: any;
  public pos: any;

  constructor(private Token: TokenService, private Jarwis: JarwisService, private getFunction: GetFunctionsService ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      this.pos = this.Token.getpos();

      console.log(this.pos +' '+ route.data.role)

      if ( this.pos == route.data.role) {
          return this.Token.loggedIn();
        } else if(route.data.role == undefined){
          return this.Token.loggedIn();
        }

  }
}
