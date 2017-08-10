import { ResolvedPermissionsDTO } from './resolved-permissions-dto';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';


import { ConfigService } from '../config.service';

import { Client } from './client';

@Injectable()
export class AuthenticationService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  client: Client = new Client();

  constructor(private http: Http, private configService: ConfigService) {
    this.headers.append('x-api-key', this.configService.config.apiKey);
  }

  getHeaders(): Headers {
    const headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'x-api-key': this.configService.config.apiKey
      });
    if (this.client.loggedIn) {
      headers.append('x-session-id', this.client.sessionId);
    }
    return headers;
  }

  login(username: string, password: string): Promise<any> {
    return this.http.post(this.configService.getFullUrl() + 'api/authentication',
      {
        'username': username,
        'password': password
      }, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.modifyClient({sessionId : response.headers.get('x-session-id')});
        this.headers.set('Access-Control-Expose-Headers', ['x-session-id']);
        this.headers.set('x-session-id', this.client.sessionId);
        this.http.get(this.configService.getFullUrl() + 'api/authorization/', { headers: this.headers })
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.modifyClient({loggedIn: true, resolvedPermissions: res.json() as ResolvedPermissionsDTO});
        })

      })
      .catch(AuthenticationService.handleError);
  }

  logout(): Promise<any> {
    return this.http.delete(this.configService.getFullUrl() + 'api/authentication',
     {headers: this.headers })
    .toPromise()
    .then(response => {
      this.deleteClient();
    })
    .catch(error => {
      this.deleteClient();
      return AuthenticationService.handleError(error);
    })
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

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
