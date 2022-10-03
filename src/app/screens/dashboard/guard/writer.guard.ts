import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WriterGuard implements CanActivate {
  constructor(private atuhService:AuthService,
    private router:Router) {
      let token = localStorage.getItem("userInfo")
      if(atuhService.isLogin()) {
        atuhService.userProfile=JSON.parse(token)
      }
    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.atuhService.isLogin() && (this.atuhService.userProfile?.role?.type=='admin' || this.atuhService.userProfile?.role?.type=='supervisor' || this.atuhService.userProfile?.role?.type=='editor')) return true
    else {
      this.atuhService.logOut()
      this.router.navigate(['dashboard-page/main/login'])
      return false
    }
  }
  
}
