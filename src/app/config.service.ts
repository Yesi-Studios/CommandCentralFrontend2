import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  private config: Object = null;
  private defaultValues = {
    backendUrl: 'http://localhost',
    backendPort: '1113',
    apiKey:  '90fdb89f-282b-4bd6-840b-cef597615728',
    debugMode:  true
  };

  public getConfig(key: any) {
    return this.config[key];
  }

  constructor(private http: Http) { }

  load() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/config.json')
        .map(res => res.json())
        .catch( (error) => {
          console.log('"config.json" not found. Using the following values:');
          console.log(this.config);
          return Observable.throw(error.json().error || 'Server error');
        })
        .subscribe(responseData => {
          this.config = responseData;
          console.log('config loaded:');
          console.log(this.config);
          resolve(true);
        });
    });
  }

  getFullUrl(): string {
    return this.getConfig('backendUrl') + ':' + this.getConfig('backendPort') + '/';
  }
}
