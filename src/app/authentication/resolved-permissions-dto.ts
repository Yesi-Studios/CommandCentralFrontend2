export class ResolvedPermissionsDTO {
  accessibleSubmodules: Array<string>;
  fieldPermissions: {
    Person: Array<any>;
  };
  editablePermissionGroups: Array<string>;
  highestLevels: {
    Main: string;
    Muster: string;
    QuartdeckWatchbill: string;
  };
  isInChainOfCommand: {
    Main: boolean;
    Muster: boolean;
    QuartdeckWatchbill: boolean;
  };
  isSelf: boolean;
  permissionGroupNames: Array<string>;
  personId: string;
  personResolvedAgainstId: null;
  returnableFieldsAtLevel: {
    Command: { Person: Array<any>; };
    Department: { Person: Array<any>; };
    Division: { Person: Array<any>; };
    None: { Person: Array<any>; };
    Self: { Person: Array<any>; };
  }
}
