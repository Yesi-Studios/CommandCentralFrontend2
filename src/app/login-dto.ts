export class LoginDTO {
  AuthenticationToken: string;
  FriendlyName: string;
  PersonId: string;
  ResolvedPermissions: {
    ClientId: string;
    AccessibleSubmodules: string[];
    EditabledFields: any;
    EditablePermissionGroups: string[];
    HighestLevels: {
      Main: string;
      Muster: string;
      QuartdeckWatchbill: string;
    };
    IsInChainOfCommand: {
      Main: boolean;
      Muster: boolean;
      QuartdeckWatchbill: boolean;
    };
    PermissionGroupNames: string[];
    PersonId: string;
    PrivelegedReturnableFields: {
      Command: any;
      Department: any;
      Division: any;
      None: any;
      Self: any;
    };
    ReturnableFields: any;
    TimeResolved: string;
  }
}
