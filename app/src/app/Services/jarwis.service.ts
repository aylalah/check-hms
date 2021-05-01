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

  //USER & AUTHENTICATION;

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

  changePassword(data) {
    return this.http.post<any>(`${this.baseUrl}/changePassword`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  resetPassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

  //GENERAL SETINGS

  check() {
    return this.http.get(this.baseUrl + 'check' )
  }
  updateGeneralSet(data) {
    return this.http.post(this.baseUrl + 'updateGeneralset', data, {headers: {
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }

  activation(data) {
    return this.http.post(this.baseUrl + 'activation', data );
  }
  updateAppImage(data) {
    return this.http.post(this.baseUrl + 'updateAppImage', data, {headers: {
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }


  //NOTIFICATIOS
  getNotifications(){
    return this.http.get(this.baseUrl + 'getNotifications', {headers: {
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }

  seeNotification(id:string){
    return this.http.get(this.baseUrl + 'seeNotification/' + id, {headers: {
      Authorization:`Bearer ${localStorage.token}`
    }}
    );
  }

  // USERS
  displayAllstaff() {
    return this.http.get(`${this.baseUrl}displayAllstaff`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  getDesignations() {
    return this.http.get(`${this.baseUrl}getDesignations`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  deptModules(id:string) {
    return this.http.get<any>(`${this.baseUrl}deptModules/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  dashDeptModules(id:string) {
    return this.http.get<any>(`${this.baseUrl}/dashDeptModules/${id}`)
  }
  permision(data) {
    return this.http.post(`${this.baseUrl}/permision`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  uStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/uStatus`, data)
  }
  c_uStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/c_uStatus`, data)
  }
  reStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/reStatus`, data)
  }
  deleteUser(data) {
    return this.http.post<any>(`${this.baseUrl}/deleteUser`, data)
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

  displayBranch() {
    return this.http.get(`${this.baseUrl}/displayBranch`,)
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
  suspendBranch(data) {
    return this.http.post(`${this.baseUrl}suspendBranch`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  activateBranch(data) {
    return this.http.post(`${this.baseUrl}activateBranch`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }
  trashBranch(data) {
    return this.http.post(`${this.baseUrl}trashBranch`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }});
  }

  createCenters(data) {
  return this.http.post(this.baseUrl + 'createCenters', data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
  }


  //POSSITIONS
  GETAllPosition() {
    return this.http.get(this.baseUrl + 'GETAllPosition')
  }

  displayAllposition() {
    return this.http.get(`${this.baseUrl}/displayAllposition`,)
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

  centerBranch() {
    return this.http.get(`${this.baseUrl}/centerBranch`)
  }


  //TEAMS
  Teams() {
    return this.http.get(this.baseUrl + 'Teams', {
      headers:{Authorization:`Bearer ${localStorage.token}`}});
  }
  AddTeam(data) {
    return this.http.post<any>(`${this.baseUrl}AddTeam`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  editingTeam(data){
    return this.http.post<any>(`${this.baseUrl}editingTeam`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  editTeam(data){
    return this.http.post<any>(`${this.baseUrl}editTeam`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  deleteTeam(data){
    return this.http.post<any>(`${this.baseUrl}deleteTeam`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  // RANKS

  Ranks() {
    return this.http.get(`${this.baseUrl}Ranks`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  AddRank(data) {
    return this.http.post<any>(`${this.baseUrl}AddRank`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  editingRank(data){
    return this.http.post<any>(`${this.baseUrl}editingRank`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  editRank(data){
    return this.http.post<any>(`${this.baseUrl}editRank`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  deleteRank(data){
    return this.http.post<any>(`${this.baseUrl}deleteRank`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

}




