export class PhysicalAddressDTO {
  id: string;
  person: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isHomeAddress: boolean;
  isReleasableOutsideCoC: boolean;
}
