import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private route: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   const token = window.localStorage.getItem("userToken")
    if(token) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + token)
      })

     return next.handle(cloned)
    }
    else {
      this.route.navigate(['/'])
      return next.handle(request)
    }
  }
}
