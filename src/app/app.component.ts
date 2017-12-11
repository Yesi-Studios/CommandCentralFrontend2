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
    // This is no longer necessary because we want the user to have to re login if the page is reloaded.
    // const savedClient = JSON.parse(localStorage.getItem('currentClient'));
    // if (savedClient) {
    //  this.authService.modifyClient(savedClient);
    // }
  }
}
