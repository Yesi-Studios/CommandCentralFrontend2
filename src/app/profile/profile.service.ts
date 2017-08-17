import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Person} from './models/person';
import {ConfigService} from '../config.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {ErrorService} from '../errors/error.service';
import {LoadPersonDTO} from './dtos/load-person-dto';
import {ReferenceLists} from './models/referencelists';
import {ReferenceListDTO} from './dtos/reference-list-dto';

@Injectable()
export class ProfileService {
  referenceLists: ReferenceLists;
  constructor(
    private http: Http,
    private configService: ConfigService,
    private authenticationService: AuthenticationService,
    private errorService: ErrorService
  ) { }

  getProfile(id: string): Promise<Person> {
    return this.getReferenceLists().then(_ => {
      return this.http.get(
      this.configService.getFullUrl() + 'api/Persons/' + id,
      { headers: this.authenticationService.getHeaders() })
      .toPromise()
      .then(response => {
        const dto = response.json() as LoadPersonDTO;
        return new Person(dto);
      })
      .catch( error => this.errorService.handleError(error));})
  }

  getMyProfile(): Promise<Person> {
    return this.getProfile('me');
  }

  getReferenceLists(): Promise<ReferenceLists> {
    if (this.referenceLists) {
      return new Promise<ReferenceLists>((resolve, reject) => resolve(this.referenceLists))
    } else {
      return this.updateReferenceLists();
    }
  }

  private updateReferenceLists(): Promise<ReferenceLists> {
    return this.http.get(
      this.configService.getFullUrl() + 'api/ReferenceLists/',
      {headers: this.authenticationService.getHeaders()})
      .toPromise()
      .then(response => {
        const dto = response.json() as ReferenceListDTO[];
        this.referenceLists = new ReferenceLists(dto);
        return this.referenceLists;
      })
      .catch(error => this.errorService.handleError(error));
  }

  /*getPhoneNumbersForPerson(id: string): Promise<PhoneNumber[]> {

  }*/
}
