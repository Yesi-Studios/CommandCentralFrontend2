import { ErrorResponse } from './error-response';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
  errors: ErrorResponse[] = [];

  addError(err: ErrorResponse) {
    this.errors.push(err);
  }

  addErrors(errs: ErrorResponse[]) {
    this.errors = this.errors.concat(errs);
  }

  popAllErrors() {
    const errs = this.errors;
    this.errors = [];
    return errs;
  }

}
