import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Utility } from './utility';

import { Config } from './config';

@Injectable()
export class ConfigService {

  config: Config = {
    backendUrl: 'http://localhost',
    backendPort: '1113',
    apiKey:  '90fdb89f-282b-4bd6-840b-cef597615728',
    debugMode:  true
  };
  configLoaded = false;

  constructor(private http: Http) { }

  load() {
    this.http.get('config.json')
      .toPromise()
      .then(response => {
        this.config = response.json() as Config;
        this.configLoaded = true;
        console.log('config loaded');
      })
      .catch(response => {
        console.log('"config.json" not found. Using the following values:');
        console.log(this.config);
      });
  }

  getFullUrl(): string {
    return this.config.backendUrl + ':' + this.config.backendPort + '/';
  }
}
