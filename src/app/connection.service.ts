import { ConfigService } from './config.service';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceNameService {

  constructor(
    private http: HttpModule,
    private authenticationService: AuthenticationService,
    private configService: ConfigService) { }

}
