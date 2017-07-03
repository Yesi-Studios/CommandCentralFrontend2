import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LoginViewComponent } from './login.view.component';

import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    HttpModule,
    FormsModule
  ],
  providers: [AuthenticationService],
  exports: [LoginViewComponent]
})
export class AuthenticationModule { }
