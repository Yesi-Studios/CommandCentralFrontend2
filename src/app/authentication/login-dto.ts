import { ResolvedPermissionsDTO } from './resolved-permissions-dto';
export class LoginDTO {
  AuthenticationToken: string;
  FriendlyName: string;
  PersonId: string;
  ResolvedPermissions: ResolvedPermissionsDTO;
}
