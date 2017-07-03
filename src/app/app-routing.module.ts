import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard } from './authentication/auth-guard'

import { LoginViewComponent } from './authentication/login.view.component';
import { NewsViewComponent } from './news/news.view.component';

import { NewsComponent } from './news/news.component';
import { NewsCreateComponent } from './news/news-create.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: '', redirectTo: 'news', pathMatch: 'full'},
  { path: 'news', component: NewsViewComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: NewsComponent },
      { path: 'create', component: NewsCreateComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
