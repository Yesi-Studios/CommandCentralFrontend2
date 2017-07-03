import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard } from './authentication/auth-guard'

import { LoginViewComponent } from './authentication/login.view.component';
import { HomeViewComponent } from './news/home.view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: '', component: HomeViewComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
