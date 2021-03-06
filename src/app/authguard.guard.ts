import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './services/authservice.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

constructor(private _authserviceService: AuthserviceService,
            private _router: Router) {}

            
canActivate(): boolean {
   if (this._authserviceService.loggedIn()) {
     return true
   }else{
     this._router.navigate(['/'])
     return false
   }
 }
  }
  

