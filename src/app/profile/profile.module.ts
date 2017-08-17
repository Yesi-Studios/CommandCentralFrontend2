import {NgModule} from '@angular/core';

import {ProfileViewComponent} from './profile.view.component';
import {ProfileService} from './profile.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavigationModule} from '../navigation/navigation.module';
import {ErrorsModule} from '../errors/errors.module';
import {AuthenticationModule} from '../authentication/authentication.module';
import {ProfileComponent} from './profile.component';
import { EmailComponent } from './components/email.component';
import { EmailListComponent } from './components/email-list.component';

@NgModule({
  declarations: [ProfileViewComponent, ProfileComponent, EmailComponent, EmailListComponent],
  providers: [ProfileService],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NavigationModule,
    ErrorsModule,
    AuthenticationModule
  ],
  exports: [
    ProfileViewComponent
  ],
})
export class ProfileModule { }
