import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
  errors: string[] = [];

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  addError(err: string) {
    this.errors.push(err);
  }

  addErrors(errs: string[]) {
    this.errors = this.errors.concat(errs);
  }

  popAllErrors() {
    const errs = this.errors;
    this.errors = [];
    return errs;
  }

  handleError(error: any): Promise<string[]> {
    console.error('An error occurred', error);
    if (error.status === 0) {
      this.addError('The service appears to be down. Please contact the developers.');
      this.authenticationService.deleteClient();
      this.router.navigate(['/login']);
      return Promise.reject('The service appears to be down. Please contact the developers.');
    }
    const errors = error.json();
    if (error && error.statusText === 'Forbidden') {
      this.addErrors(errors);
      this.authenticationService.deleteClient();
      this.router.navigate(['/login']);
    }
    return Promise.reject(errors);
  }
}
