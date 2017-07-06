import { NewsEditComponent } from './news-edit.component';
import { ErrorsModule } from './../errors/errors.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthenticationModule } from '../authentication/authentication.module';
import { NavigationModule } from '../navigation/navigation.module';

import { NewsViewComponent } from './news.view.component';
import { NewsComponent } from './news.component';
import { NewsCreateComponent } from './news-create.component';
import { NewsItemComponent } from './news-item.component';

import { NewsService } from './news.service';

@NgModule({
  declarations: [
    NewsViewComponent,
    NewsComponent,
    NewsCreateComponent,
    NewsEditComponent,
    NewsItemComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NavigationModule,
    ErrorsModule,
    AuthenticationModule
  ],
  providers: [NewsService],
  exports: [NewsViewComponent, NewsItemComponent]
})
export class NewsModule { }
