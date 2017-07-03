import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Utility } from '../utility';
import { ConfigService } from '../config.service';

import { LoginDTO } from './login-dto';
import { Client } from './client';

@Injectable()
export class AuthenticationService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  client: Client;

  constructor(private http: Http, private config: ConfigService) { }

  login(username: string, password: string): Promise<any> {
    return this.http.post(this.config.getFullUrl() + 'Login',
      {
        'username': username,
        'password': password,
        'apikey': this.config.config.apiKey
      })
      .toPromise()
      .then(response => {
        let dto = Utility.restoreJsonNetReferences(response.json().ReturnValue) as LoginDTO;
        this.client = new Client(dto);
        return dto;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}