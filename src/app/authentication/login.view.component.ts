import { Component, Input } from '@angular/core'

import { AuthenticationService } from './authentication.service';
import { Router } from  '@angular/router';

import { LoginDTO } from './login-dto'
import { Utility } from '../utility';
import { ErrorResponse } from '../error-response';

@Component({
  selector: "login-component",
  templateUrl: './login.view.component.html'
})
export class LoginViewComponent {
  @Input() username: string;
  @Input() password: string;
  loginResult: string;
  errorMessages: string[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

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
    if(event.key === "Enter") {
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
    let response = Utility.restoreJsonNetReferences(res) as ErrorResponse;
    let errorMessages: string[] = [];
    for (let errorMessage of response.ErrorMessages) {
      errorMessages.push(errorMessage);
    }
    return errorMessages;
  }

  userIsLoggedIn(): boolean {
    let client = this.authenticationService.client
    return client && client.loggedIn;
  }
}
