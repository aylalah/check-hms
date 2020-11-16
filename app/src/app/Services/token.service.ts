import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : 'http://localhost:8000/api/login',
    signup : 'http://localhost:8000/api/signup'

    // login : 'http://checkhms.com/testenv/checkhms/public/api/login',
    // signup : 'http://checkhms.com/testenv/checkhms/public/api/signup'
  }

  constructor() { }

  handle(token: any) {
    this.set(token);
    console.log(this.isValid());
  }

  dashboard(look: any, role: any, pos: any) {

    localStorage.setItem('role', role);
    localStorage.setItem('pos', pos);

    if (look == 1001) {
      localStorage.setItem('face', 'horizontal')
    } else {
      localStorage.setItem('face', 'vertical')
    }
  }

  set(token: string) {
    localStorage.setItem('token',token)
  }

  get() {
    return localStorage.getItem('token')
  }

  get2() {
    return localStorage.getItem('face')
  }

  getpos() {
    return localStorage.getItem('pos')
  }

  getrole() {
    return localStorage.getItem('role')
  }

  remove() {
    return localStorage.removeItem('token');
  }
  remove2() {
    return localStorage.removeItem('face');
  }
  remove3() {
    return localStorage.removeItem('role');
  }
  remove4() {
    return localStorage.removeItem('pos');
  }

  isValid() {
    const token = this.get();
    if(token) {
      const payload = this.payload(token);
      if(payload) {
      // return (payload.iss === 'http://localhost:8000/api/login') ? true : false; //easy hint
      return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false ;
      }
    }
    return false;
  }

  payload(token: string) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: string) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}

