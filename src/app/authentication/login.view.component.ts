import { Component, Input } from '@angular/core'

import { AuthenticationService } from './authentication.service';

import { LoginDTO } from './login-dto'

@Component({
  selector: "login-component",
  templateUrl: './login.view.component.html'
})
export class LoginViewComponent {
  @Input() username: string;
  @Input() password: string;
  loginResult: string;
  errorMessage: any;

  constructor(private authenticationService: AuthenticationService) {}

  login(): void {
    this.authenticationService
    .login(this.username, this.password)
    .then(response => this.handleLogin(response));
  }

  handleLogin(dto: LoginDTO): void {
    console.log("******");
    console.log(dto);
    this.loginResult = dto["PersonId"];
  }

  userIsLoggedIn(): boolean {
    let client = this.authenticationService.client
    return client && client.loggedIn;
  }
}
