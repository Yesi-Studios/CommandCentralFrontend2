import { ErrorService } from '../errors/error.service';
import {Component, AfterContentInit, Input} from '@angular/core'

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import {ConfigService} from '../config.service';

@Component({
  selector: 'cc-login-component',
  templateUrl: './login.view.component.html'
})
export class LoginViewComponent implements AfterContentInit {
  @Input() impersonateMode: boolean;
  @Input() impersonateID: string;
  debugMode: string;
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
    private errorService: ErrorService,
    private configService: ConfigService
  ) {}

  ngAfterContentInit() {
    const newErrors = this.errorService.popAllErrors();
    this.errorMessages = this.errorMessages.concat(newErrors);
    this.debugMode = this.configService.getConfig('debugMode')
  }

  login(): void {
    if (this.debugMode && this.impersonateMode) {
      this.authenticationService.impersonateID = this.impersonateID;
    }
    this.errorMessages = [];
    this.authenticationService
    .login()
    .then(response => this.handleLogin())
    .catch(response => this.errorMessages = LoginViewComponent.handleErrors(response));
  }

  logout(): void {
    this.errorMessages = [];
    this.authenticationService
    .logout()
    .catch(response => this.errorMessages = LoginViewComponent.handleErrors(response));
  }

  handleLogin(): void {
    this.router.navigate(['/']);
  }

  userIsLoggedIn(): boolean {
    const client = this.authenticationService.client;
    return client && client.loggedIn;
  }
}
