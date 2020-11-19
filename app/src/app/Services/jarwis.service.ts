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
  lazyload= {load:'loading'};

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


  //DEPERTMENTS-CENTERS
  centerType() {
    return this.http.get(this.baseUrl + 'centerType', {headers:{
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }
  CenterTypes(data) {
    return this.http.post<any>(this.baseUrl + 'CenterTypes', data, {headers:{
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }
  updateCenterType(data){
    return this.http.post<any>( this.baseUrl + 'updateCenterType', data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  editCentertype(data){
    return this.http.post<any>(this.baseUrl + 'editCentertype', data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  deleteCenterType(data){
    return this.http.post<any>(this.baseUrl + 'deleteCenterType', data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayDepartments() {
    return this.http.get(`${this.baseUrl}/displayDepartments`,)
  }


  //CENTERS
  getDepertment() {
    return this.http.get(this.baseUrl + 'getDepertment',{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  displaysetBranch() {
    return this.http.get(this.baseUrl + 'displaysetBranch',{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  getAllUnits() {
    return this.http.get(this.baseUrl + 'getAllUnits',{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  updateBranch(data) {
    return this.http.post(`${this.baseUrl}updateBranch`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  onEditBranch(data){
    return this.http.post(`${this.baseUrl}onEditBranch`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }



  addCenter(data) {
    return this.http.post(`${this.baseUrl}/addCenter`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  createCenters(data) {
  return this.http.post(this.baseUrl + 'createCenters', data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
  }
  createBranchs(data) {
  return this.http.post(`${this.baseUrl}/addBranchs`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
  }
  edtBranch(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtBranch/${id}`)
  }

  
  deleteBranch(data) {
    return this.http.post(`${this.baseUrl}/deleteBranch`, data)
  }
  suspendBranch(data) {
    return this.http.post(`${this.baseUrl}/suspendBranch`, data)
  }
  activateBranch(data) {
    return this.http.post(`${this.baseUrl}/activateBranch`, data)
  }
  
  centerBranch() {
    return this.http.get(`${this.baseUrl}/centerBranch`,)
  }



  //POSSITIONS
  GETAllPosition() {
    return this.http.get(this.baseUrl + 'GETAllPosition')
  }

  getmodules(id) {
    return this.http.get(this.baseUrl + 'getmodules/' + id)
  }

  onEditPos(id) {
    return this.http.get<any>(this.baseUrl + 'onEditPos/' + id, {headers:{
      Authorization:`Bearer ${localStorage.token}`}}
    )
  }

   onPermit(data) {
    return this.http.post(this.baseUrl + 'permtes', data, {
      headers:{Authorization:`Bearer ${localStorage.token}`}})
  }

}
