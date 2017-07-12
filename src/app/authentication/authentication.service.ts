import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';


import { Utility } from '../utility';
import { ConfigService } from '../config.service';

import { LoginDTO } from './login-dto';
import { Client } from './client';

@Injectable()
export class AuthenticationService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  client: Client;

  constructor(private http: Http, private configService: ConfigService) {
    // this.headers.append('apikey', this.configService.config.apiKey);
  }

  login(username: string, password: string): Promise<any> {
    return this.http.post(this.configService.getFullUrl() + 'Login',
      {
        'username': username,
        'password': password,
        'apikey': this.configService.config.apiKey
      }, { headers: this.headers })
      .toPromise()
      .then(response => {
        const dto = Utility.restoreJsonNetReferences(response.json().ReturnValue) as LoginDTO;
        this.setClient(dto);
        return dto;
      })
      .catch(this.handleError);
  }

  logout(): Promise<any> {
    return this.http.post(this.configService.getFullUrl() + 'Logout',
    {
      'apikey': this.configService.config.apiKey,
      'authenticationtoken': this.client.authToken
    })
    .toPromise()
    .then(response => {
      this.deleteClient();
    })
    .catch(error => {
      this.deleteClient();
      return this.handleError(error);
    })
  }

  setClient(dto: LoginDTO) {
    this.client = new Client(dto);
    // this.headers.append('sessionid', this.client.authToken);
    localStorage.setItem('currentClient', JSON.stringify(dto));
  }

  deleteClient() {
    this.client = null;
    // this.headers.delete('sessionid');
    localStorage.removeItem('currentClient');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
