import {PhoneNumberDTO} from '../dtos/phone-number-dto';

export class PhoneNumber {
  id: string;
  person: string;
  phoneType: string;
  isReleasableOutsideCoC: boolean;
  isPreferred: boolean;
  number: string;

  constructor( dto: PhoneNumberDTO) {
    this.id = dto.id;
    this.person = dto.person;
    this.phoneType = dto.phoneType;
    this.isReleasableOutsideCoC = dto.isReleasableOutsideCoC;
    this.isPreferred = dto.isPreferred;
    this.number = dto.number;
  }
}
