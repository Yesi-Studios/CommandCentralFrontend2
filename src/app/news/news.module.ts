import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthenticationModule } from '../authentication/authentication.module';
import { NavigationModule } from '../navigation/navigation.module';

import { HomeViewComponent } from './home.view.component';
import { NewsItemComponent } from './news-item.component';

import { NewsService } from './news.service';

@NgModule({
  declarations: [
    HomeViewComponent,
    NewsItemComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    NavigationModule,
    AuthenticationModule
  ],
  providers: [NewsService],
  exports: [HomeViewComponent, NewsItemComponent]
})
export class NewsModule { }
