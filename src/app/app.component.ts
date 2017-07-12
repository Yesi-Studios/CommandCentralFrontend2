import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    const savedClient = JSON.parse(localStorage.getItem('currentClient'));
    if (savedClient) {
      this.authService.modifyClient(savedClient);
    }
  }
}
