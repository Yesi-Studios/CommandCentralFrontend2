import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication/authentication.service';
import { LoginDTO } from './authentication/login-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  title = 'app';

  ngOnInit() {
    let dto = JSON.parse(localStorage.getItem('currentClient')) as LoginDTO;
    if(dto) {
      this.authService.setClient(dto);
    }
  }
}
