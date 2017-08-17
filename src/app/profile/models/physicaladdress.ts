import {PhysicalAddressDTO} from '../dtos/physical-address-dto';

export class PhysicalAddress {
  id: string;
  person: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isHomeAddress: boolean;
  isReleasableOutsideCoC: boolean;

  constructor(dto: PhysicalAddressDTO) {
    this.id = dto.id;
    this.person = dto.person;
    this.address = dto.address;
    this.city = dto.city;
    this.state = dto.state;
    this.zipCode = dto.zipCode;
    this.country = dto.country;
    this.isHomeAddress = dto.isHomeAddress;
    this.isReleasableOutsideCoC = dto.isReleasableOutsideCoC;
  }

}
