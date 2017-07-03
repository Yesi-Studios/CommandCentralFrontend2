import { LoginDTO } from './login-dto';
export class Client {
  profilePopulated: boolean;

  authToken: string;
  friendlyName: string;
  id: string;

  constructor( dto: LoginDTO ) {
    this.authToken = dto.AuthenticationToken;
    this.friendlyName = dto.FriendlyName;
    this.id = dto.PersonId;
  }
}
