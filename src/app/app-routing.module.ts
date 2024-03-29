import { NewsEditComponent } from './news/news-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard } from './authentication/auth-guard'

import { LoginViewComponent } from './authentication/login.view.component';
import { NewsViewComponent } from './news/news.view.component';

import { NewsComponent } from './news/news.component';
import { NewsCreateComponent } from './news/news-create.component';
import {ProfileViewComponent} from './profile/profile.view.component';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './profile/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: '', redirectTo: 'news', pathMatch: 'full'},
  { path: 'news', component: NewsViewComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: NewsComponent, canActivate: [AuthGuard] },
      { path: 'create', component: NewsCreateComponent, canActivate: [AuthGuard]},
      { path: 'edit/:id', component: NewsEditComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'sailors', component: ProfileViewComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: 'search', component: SearchComponent, canActivate: [AuthGuard]}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
