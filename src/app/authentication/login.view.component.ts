import { ErrorService } from '../errors/error.service';
import { Component, Input, AfterContentInit} from '@angular/core'

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cc-login-component',
  templateUrl: './login.view.component.html'
})
export class LoginViewComponent implements AfterContentInit {
  @Input() username: string;
  @Input() password: string;
  errorMessages: string[] = [];

  private static handleErrors(res: any): Array<string> {
    if (res.status === 0) {
      return ['The service appears to be down. Please contact the developers.'];
    }
    if (res.status === 401) {
      return ['Username or password is incorrect.'];
    }
    const errorMessages: string[] = [];
    for (const errorMessage of res.json().ErrorMessages) {
      errorMessages.push(errorMessage);
    }
    return errorMessages;
  }

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
    .catch(response => this.errorMessages = LoginViewComponent.handleErrors(response));
  }

  logout(): void {
    this.errorMessages = [];
    this.authenticationService
    .logout()
    .catch(response => this.errorMessages = LoginViewComponent.handleErrors(response));
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

  userIsLoggedIn(): boolean {
    const client = this.authenticationService.client;
    return client && client.loggedIn;
  }
}
