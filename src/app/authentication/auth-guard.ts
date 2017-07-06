import { Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  restrictedPaths: { [path: string]: string[] } = {
    '/news/create': ['Developers'],
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const client = this.authenticationService.client;
    if (client && client.loggedIn) {
      return this.userHasPermissionsToAccess(state.url);
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }

  userHasPermissionsToAccess(url: string): boolean {
    const permGroups = this.authenticationService.client.resolvedPermissions.PermissionGroupNames as Array<string>;
    const requiredPerms = this.restrictedPaths[url];
    if (requiredPerms) {
      const permsComp = requiredPerms.filter(item => permGroups.indexOf(item) !== -1)
      return permsComp.length !== 0
    }
    return true;
  }
}
