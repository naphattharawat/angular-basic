import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  public token!: string;
  public helper = new JwtHelperService();

  constructor(private router: Router) { }

  canActivate() {
    const token: any = sessionStorage.getItem('token');
    if (token) {
      if (this.helper.isTokenExpired(token)) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
