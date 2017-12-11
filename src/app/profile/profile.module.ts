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
import { EmailComponent } from './components/emails/email.component';
import { EmailListComponent } from './components/emails/email-list.component';
import { PhonenumberComponent } from './components/phonenumber/phonenumber.component';
import { PhonenumberListComponent } from './components/phonenumber/phonenumber-list.component';
import { PhysicaladdressComponent } from './components/physicaladdress/physicaladdress.component';
import { PhysicaladdressListComponent } from './components/physicaladdress/physicaladdress-list.component';
import { SearchComponent } from './search/search.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileComponent,
    EmailComponent,
    EmailListComponent,
    PhonenumberComponent,
    PhonenumberListComponent,
    PhysicaladdressComponent,
    PhysicaladdressListComponent,
    SearchComponent,
    SearchFieldComponent
  ],
  providers: [ProfileService],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    MultiselectDropdownModule,
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
