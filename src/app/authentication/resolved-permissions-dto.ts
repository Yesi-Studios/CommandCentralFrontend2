export class ResolvedPermissionsDTO {
  ClientId: string;
  AccessibleSubmodules: Array<string>;
  EditabledFields: {
    Person: Array<string>;
  };
  EditablePermissionGroups: Array<string>;
  HighestLevels: {
    Main: string;
    Muster: string;
    QuartdeckWatchbill: string;
  }
  IsInChainOfCommand: {
    Main: boolean;
    Muster: boolean;
    QuartdeckWatchbill: boolean;
  }
  PermissionGroupNames: Array<string>;
  PersonId: string;
  PrivelegedReturnableFields: {
    Command: { Person: Array<string>; };
    Department: { Person: Array<string>; };
    Division: { Person: Array<string>; };
    None: { Person: Array<string>; };
    Self: { Person: Array<string>; };
  }
  ReturnableFields: {
    Person: Array<string>;
    TimeResolved: string;
  }
}
