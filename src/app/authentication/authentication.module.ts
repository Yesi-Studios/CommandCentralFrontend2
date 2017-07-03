import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LoginViewComponent } from './login.view.component';

import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
  ],
  providers: [AuthenticationService, AuthGuard],
  exports: [LoginViewComponent]
})
export class AuthenticationModule { }
