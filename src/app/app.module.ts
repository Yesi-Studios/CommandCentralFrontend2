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
import {ProfileModule} from './profile/profile.module';
import {MusterModule} from "./muster/muster.module";

export function configFactory (config: ConfigService) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AuthenticationModule,
    NewsModule,
    NavigationModule,
    ProfileModule,
    MusterModule
  ],
  providers: [
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
