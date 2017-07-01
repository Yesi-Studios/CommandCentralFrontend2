import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './login.view.component';
import { HomeViewComponent } from './home.view.component';
import { NewsItemComponent } from './news-item.component';

import { AuthenticationService } from './authentication.service';
import { NewsService } from './news.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeViewComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
