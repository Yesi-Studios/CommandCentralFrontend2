import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import {Person} from './models/person';
import {ConfigService} from '../config.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {ErrorService} from '../errors/error.service';
import {LoadPersonDTO} from './dtos/load-person-dto';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class ProfileService {

  constructor(
    private http: Http,
    private configService: ConfigService,
    private authenticationService: AuthenticationService,
    private errorService: ErrorService
  ) { }

  getProfile(id: string): Promise<Person> {
    return this.http.get(
      this.configService.getFullUrl() + 'api/Person/' + id,
      { headers: this.authenticationService.getHeaders() })
      .toPromise()
      .then(response => {
        const dto = response.json() as LoadPersonDTO;
        return new Person(dto);
      })
      .catch( error => this.errorService.handleError(error));
  }

  getMyProfile(): Promise<Person> {
    return this.http.get(
      this.configService.getFullUrl() + 'api/Person/me',
      { headers: this.authenticationService.getHeaders() })
      .toPromise()
      .then(response => {
        const dto = response.json() as LoadPersonDTO;
        return new Person(dto);
      })
      .catch( error => this.errorService.handleError(error));
  }
}
