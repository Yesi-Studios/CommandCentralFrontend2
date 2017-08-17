import {EmailAddressDTO} from '../dtos/email-address-dto';

export class EmailAddress {
  id: string;
  person: string;
  isReleasableOutsideCoC: boolean;
  address: string;
  isPreferred: boolean;

  constructor(dto: EmailAddressDTO) {
    this.id = dto.id;
    this.person = dto.person;
    this.isReleasableOutsideCoC = dto.isReleasableOutsideCoC;
    this.isPreferred = dto.isPreferred;
    this.address = dto.address;
  }
}
