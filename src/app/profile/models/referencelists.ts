import {ReferenceListDTO} from '../dtos/reference-list-dto';

export class ReferenceListItem {
  id: string;
  type: string;
  value: string;
  description: string;
}

export class ReferenceList {
  type: string;
  isEditable: boolean;
  values: ReferenceListItem[];

  constructor(dto: ReferenceListDTO) {
    this.type = dto.type;
    this.isEditable = dto.isEditable;
    this.values = dto.values.map(v => v as ReferenceListItem)
  }
}

export class ReferenceLists {
  allLists: ReferenceList[];
  AccountabilityType: ReferenceList;
  Designation: ReferenceList;
  DutyStatus: ReferenceList;
  Paygrade: ReferenceList;
  PhoneNumberType: ReferenceList;
  Sex: ReferenceList;
  UIC: ReferenceList;
  WatchQualification: ReferenceList;

  constructor(dto: ReferenceListDTO[]) {
    this.allLists = dto.map(d => new ReferenceList(d));
    this.allLists.forEach(x => this[x.type] = x);

  }
}
