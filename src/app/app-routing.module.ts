import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './login.view.component';
import { HomeViewComponent } from './home.view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: '', component: HomeViewComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
