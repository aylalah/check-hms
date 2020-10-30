import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http : HttpClient) { }

  check() {
    return this.http.get(this.baseUrl + 'check' )
  }

  app_info() {
    return this.http.get(this.baseUrl + 'app_info' )
  }

  signup(data) {
    return this.http.post(this.baseUrl + 'signup' ,data)
  }

  login(data) {
    return this.http.post(this.baseUrl + 'login' ,data)
  }

  activation(data) {
    return this.http.post(this.baseUrl + 'activation' ,data)
  }

  //POSSITIONS
  GETAllPosition() {
    return this.http.get(this.baseUrl + 'GETAllPosition')
  }
  
}
