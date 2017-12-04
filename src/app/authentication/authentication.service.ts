import { ResolvedPermissionsDTO } from './resolved-permissions-dto';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import { ConfigService } from '../config.service';

import { Client } from './client';

@Injectable()
export class AuthenticationService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  impersonateID = '';
  client: Client = new Client();

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http, private configService: ConfigService) {
    this.headers.append('x-api-key', this.configService.getConfig('apiKey'));
  }

  getHeaders(): Headers {
    const headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'x-api-key': this.configService.getConfig('apiKey')
      });
    if (this.client.loggedIn) {
      headers.append('x-session-id', this.client.sessionId);
    }
    if (this.impersonateID !== '') {
      headers.append('x-impersonate-person-id', this.impersonateID)
    }
    return headers;
  }

  login(): Promise<any> {
    return this.http.get(this.configService.getFullUrl() + 'api/Permissions/', { headers: this.getHeaders() })
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.modifyClient({loggedIn: true, resolvedPermissions: res.json() as ResolvedPermissionsDTO});
        })
      .catch(AuthenticationService.handleError);
  }

  logout(): Promise<any> {
    this.impersonateID = '';
    this.deleteClient();
    return new Promise((resolve, reject) => {console.log('Logged out')});
    // return this.http.delete(this.configService.getFullUrl() + 'api/authentication',
    //  {headers: this.headers })
    // .toPromise()
    // .then(response => {
    //   this.deleteClient();
    // })
    // .catch(error => {
    //   this.deleteClient();
    //   return AuthenticationService.handleError(error);
    // })
  }

  saveClient() {
    localStorage.setItem('currentClient', JSON.stringify(this.client));
    // if (this.client.sessionId) {
      // this.headers.delete('sessionid');
      // this.headers.append('sessionid', this.client.sessionId);
    // }
  }

  modifyClient(mods: any) {
    Object.keys(mods).forEach(k => this.client[k] = mods[k]);
    this.saveClient();
  }

  deleteClient() {
    this.client = new Client();
    this.headers.delete('sessionid');
    localStorage.removeItem('currentClient');
  }

}
