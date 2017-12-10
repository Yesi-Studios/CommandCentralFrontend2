import { Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  restrictedPaths: { [path: string]: string } = {
    '/news/create': 'EditNews',
    '/news/edit': 'EditNews'
  };

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
    const accessibleSubmodules = this.authenticationService.client.resolvedPermissions.accessibleSubmodules as Array<string>;
    const restrictedSubmodule = this.restrictedPaths[url];
    return !restrictedSubmodule || accessibleSubmodules.indexOf(restrictedSubmodule) !== -1
  }
}
