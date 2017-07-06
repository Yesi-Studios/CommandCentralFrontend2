import { ErrorsComponent } from './errors.component';
import { AuthenticationService } from './authentication/authentication.service';
import { ErrorService } from './error.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthenticationModule } from './authentication/authentication.module';
import { NewsModule } from './news/news.module';
import { NavigationModule } from './navigation/navigation.module';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ConfigService } from './config.service';

export function configFactory (config: ConfigService) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AuthenticationModule,
    NewsModule,
    NavigationModule
  ],
  providers: [
    ErrorService,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
