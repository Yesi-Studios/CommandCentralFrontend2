import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  canActivate() {
    let client = this.authenticationService.client;
    if (client && client.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
