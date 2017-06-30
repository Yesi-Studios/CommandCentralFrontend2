import { Component } from '@angular/core';

import { AuthenticationService } from './authentication.service'

import { LoginDTO } from './login-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
