import { ErrorService } from './../errors/error.service';
import { Component, Input, AfterContentInit} from '@angular/core'

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

import { LoginDTO } from './login-dto'
import { Utility } from '../utility';
import { ErrorResponse } from '../errors/error-response';

@Component({
  selector: 'login-component',
  templateUrl: './login.view.component.html'
})
export class LoginViewComponent implements AfterContentInit {
  @Input() username: string;
  @Input() password: string;
  loginResult: string;
  errorMessages: string[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  ngAfterContentInit() {
    const newErrors = this.errorService.popAllErrors();

    this.errorMessages = this.errorMessages.concat(newErrors);
  }

  login(): void {
    this.errorMessages = [];
    this.authenticationService
    .login(this.username, this.password)
    .then(response => this.handleLogin())
    .catch(response => this.errorMessages = this.handleErrors(response.json()));
  }

  logout(): void {
    this.errorMessages = [];
    this.authenticationService
    .logout()
    .catch(response => this.errorMessages = this.handleErrors(response.json()));
  }

  enterKeyCheck(event: any): void {
    if (event.key === 'Enter') {
      this.login();
    }
  }

  readyToLogin(): boolean {
    return !this.username || !this.password;
  }

  handleLogin(): void {
    this.router.navigate(['/']);
  }

  handleErrors(res: any): Array<string> {
    const response = Utility.restoreJsonNetReferences(res) as ErrorResponse;
    const errorMessages: string[] = [];
    for (const errorMessage of response.ErrorMessages) {
      errorMessages.push(errorMessage);
    }
    return errorMessages;
  }

  userIsLoggedIn(): boolean {
    const client = this.authenticationService.client
    return client && client.loggedIn;
  }
}
