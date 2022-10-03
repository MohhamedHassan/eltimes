import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {
  constructor(private atuhService:AuthService,
    private router:Router) {

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.atuhService.isLogin()) return true
    else {
      this.atuhService.logOut()
      this.router.navigate(['dashboard-page/main/login'])
      return false
    }
  }
  
}
