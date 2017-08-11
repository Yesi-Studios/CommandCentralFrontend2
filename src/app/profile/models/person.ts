import {LoadPersonDTO} from '../dtos/load-person-dto';

export class Person {
  id: string;
  middleName: string;
  suffix: string;
  age: number;
  ethnicity: string;
  religiousPreference: string;
  department: string;
  command: string;
  gtcTrainingDate: Date;
  adamsTrainingDate: Date;
  hasCompletedAWARE: boolean;
  supervisor: string;
  workCenter: string;
  workRoom: string;
  shift: string;
  jobTitle: string;
  eaos: Date;
  prd: Date;
  dateOfDeparture: Date;
  billetAssignment: string;
  paygrade: string;
  designation: string;
  uic: string;
  dutyStatus: string;
  sex: string;
  lastName: string;
  firstName: string;
  ssn: string;
  doDId: string;
  dateOfBirth: Date;
  dateOfArrival: Date;
  division: string;
  constructor(dto: LoadPersonDTO) {
    this.id = dto.id;
    this.middleName = dto.middleName;
    this.suffix = dto.suffix;
    this.age = dto.age;
    this.ethnicity = dto.ethnicity;
    this.religiousPreference = dto.religiousPreference;
    this.department = dto.department;
    this.command = dto.command;
    this.gtcTrainingDate = dto.gtcTrainingDate;
    this.adamsTrainingDate = dto.adamsTrainingDate;
    this.hasCompletedAWARE = dto.hasCompletedAWARE;
    this.supervisor = dto.supervisor;
    this.workCenter = dto.workCenter;
    this.workRoom = dto.workRoom;
    this.shift = dto.shift;
    this.jobTitle = dto.jobTitle;
    this.eaos = dto.eaos;
    this.prd = dto.prd;
    this.dateOfDeparture = dto.dateOfDeparture
    this.billetAssignment = dto.billetAssignment;
    this.paygrade = dto.paygrade;
    this.designation = dto.designation;
    this.uic = dto.uic;
    this.dutyStatus = dto.dutyStatus;
    this.sex = dto.sex;
    this.lastName = dto.lastName;
    this.firstName = dto.firstName;
    this.ssn = dto.ssn;
    this.doDId = dto.doDId;
    this.dateOfBirth = dto.dateOfBirth;
    this.dateOfArrival = dto.dateOfArrival;
    this.division = dto.division;
  }

}
