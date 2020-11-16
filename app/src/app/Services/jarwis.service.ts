import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  // private baseUrl = 'http://localhost:8000/api/';

  // private baseUrl = 'http://checkhms.com/testenv/checkhms/public/api/';

  private baseUrl = environment.baseUrl;
  public imageUrl = environment.imageUrl;
  lazyload={load:'loading'};

  constructor(private http : HttpClient) { }

  check() {
    return this.http.get(this.baseUrl + 'check' )
  }

  profile() {
    return this.http.get(this.baseUrl + 'me',{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  getPermission() {
    return this.http.get(this.baseUrl + 'getPermission',{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  app_info() {
    return this.http.get(this.baseUrl + 'app_info' );
  }

  signup(data) {
    return this.http.post(this.baseUrl + 'signup', data);
  }

  login(data) {
    return this.http.post(this.baseUrl + 'login', data);
  }

  activation(data) {
    return this.http.post(this.baseUrl + 'activation', data );
  }

  //GENERAL SETINGS
  updateGeneralSet(data) {
    return this.http.post(this.baseUrl + 'updateGeneralset', data, {headers: {
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }

  updateAppImage(data) {
    return this.http.post(this.baseUrl + 'updateAppImage', data, {headers: {
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }

  //POSSITIONS
  GETAllPosition() {
    return this.http.get(this.baseUrl + 'GETAllPosition')
  }

}
