import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userProfile
  constructor(private http:HttpClient,
    private router:Router) { }
  addUser(value) {
    return this.http.post(`${environment.apiUrl}user`,value)
  }
  deleteUser(id) {
    return this.http.delete(`${environment.apiUrl}user/${id}`)
  }
  updateUser(id,value) {
    return this.http.put(`${environment.apiUrl}user/${id}`,value)
  }
  getAllUsers() {
    return this.http.get(`${environment.apiUrl}user?limit=${10000}`)
  }
  login(value) {
    return this.http.post(`${environment.apiUrl}user/auth/login`,value)
  } 
  logOut() {
    localStorage.removeItem("timesToken")
    this.userProfile={}
    this.router.navigate(['/dashboard-page/main/login'])
  }
 
  isLogin() {
    return !!localStorage.getItem("timesToken")
  }
  getToken() {
    return localStorage.getItem('timesToken')
  }
}
