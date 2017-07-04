import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const client = this.authenticationService.client;
    const permissionsDictionary = {
      'news/create' : 'Developers',
    }
    if (client && client.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }

  userHasPermissionsToAccess(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
}
