import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';


import { Utility } from '../utility';
import { ConfigService } from '../config.service';

import { Client } from './client';

@Injectable()
export class AuthenticationService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  client: Client = new Client();

  constructor(private http: Http, private configService: ConfigService) {
    this.headers.append('apikey', this.configService.config.apiKey);
  }

  login(username: string, password: string): Promise<any> {
    return this.http.post(this.configService.getFullUrl() + 'api/authenticate',
      {
        'username': username,
        'password': password
      }, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.modifyClient({sessionId : response.headers.get('sessionid')});
        this.http.get(this.configService.getFullUrl() + 'api/permissions/1', this.headers)
        .toPromise()
        .then(res => {
          this.modifyClient({loggedIn: true});
          console.log(res);
        })

      })
      .catch(this.handleError);
  }

  logout(): Promise<any> {
    return this.http.delete(this.configService.getFullUrl() + 'api/authenticate',
     {headers: this.headers })
    .toPromise()
    .then(response => {
      this.deleteClient();
    })
    .catch(error => {
      this.deleteClient();
      return this.handleError(error);
    })
  }

  saveClient() {
    localStorage.setItem('currentClient', JSON.stringify(this.client));
    if (this.client.sessionId) {
      this.headers.append('sessionid', this.client.sessionId);
    }
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
