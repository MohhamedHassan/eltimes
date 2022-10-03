import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import {catchError} from "rxjs/operators";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err:any) => {
      console.log(err)
      if ([401, 403].indexOf(err.status) !== -1) {
        this.router.navigate(["/main/home"]);
        localStorage.removeItem("timesToken");
      }
      return throwError(err)
    }))
  }
}
