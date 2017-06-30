import { Component, Input } from '@angular/core'

import { AuthenticationService } from './authentication.service';

import { LoginDTO } from './login-dto'

@Component({
  selector: "login-component",
  templateUrl: './login.component.html'
})
export class LoginComponent {
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
}
