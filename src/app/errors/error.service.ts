import { Utility } from '../utility';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { ErrorResponse } from './error-response';
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
    const errors = Utility.restoreJsonNetReferences(error.json().ErrorMessages);
    if (error.statusText === 'Forbidden') {
      this.addErrors(errors);
      this.authenticationService.deleteClient();
      this.router.navigate(['/login']);
    }
    return Promise.reject(errors);
  }
}
