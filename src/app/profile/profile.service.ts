import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Person} from './models/person';
import {ConfigService} from '../config.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {ErrorService} from '../errors/error.service';
import {LoadPersonDTO} from './dtos/load-person-dto';
import {ReferenceLists} from './models/referencelists';
import {ReferenceListDTO} from './dtos/reference-list-dto';
import {PhoneNumber} from './models/phonenumber';
import {PhoneNumberDTO} from './dtos/phone-number-dto';
import {EmailAddress} from './models/emailaddress';
import {EmailAddressDTO} from './dtos/email-address-dto';
import {PhysicalAddressDTO} from './dtos/physical-address-dto';
import {PhysicalAddress} from './models/physicaladdress';

@Injectable()
export class ProfileService {
  private referenceLists: ReferenceLists;
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
      .catch( error => this.errorService.handleError(error));
    })
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

  getPhoneNumbersForPerson(id: string): Promise<PhoneNumber[]> {
    return this.http.get(
      this.configService.getFullUrl() + 'api/Persons/' + id + '/PhoneNumbers',
      {headers: this.authenticationService.getHeaders()})
      .toPromise()
      .then(response => {
        const dto = response.json() as PhoneNumberDTO[];
        return dto.map(d => new PhoneNumber(d));
      })
      .catch(error => this.errorService.handleError(error));
  }

  getEmailsForPerson(id: string): Promise<EmailAddress[]> {
    return this.http.get(
      this.configService.getFullUrl() + 'api/Persons/' + id + '/EmailAddresses',
      {headers: this.authenticationService.getHeaders()})
      .toPromise()
      .then(response => {
        const dto = response.json() as EmailAddressDTO[];
        return dto.map(d => new EmailAddress(d));
      })
      .catch(error => this.errorService.handleError(error));
  }

  getAddressesForPerson(id: string): Promise<PhysicalAddress[]> {
    return this.http.get(
      this.configService.getFullUrl() + 'api/Persons/' + id + '/PhysicalAddresses',
      {headers: this.authenticationService.getHeaders()})
      .toPromise()
      .then(response => {
        const dto = response.json() as PhysicalAddressDTO[];
        return dto.map(d => new PhysicalAddress(d));
      })
      .catch(error => this.errorService.handleError(error));
  }

  simpleSearch(text): Promise<Person[]> {
    const params = new URLSearchParams();
    params.set('searchValue', text);
    // params.set('limit', '10');
    const url = this.configService.getFullUrl() + 'api/Persons/simple?' + params.toString();
    return this.http.get(
      url,
      {headers: this.authenticationService.getHeaders()})
      .toPromise()
      .then(response => {
        const dto = response.json() as LoadPersonDTO[];
        return dto.map(d => new Person(d));
      })
      .catch(error => this.errorService.handleError(error));
  }
}
