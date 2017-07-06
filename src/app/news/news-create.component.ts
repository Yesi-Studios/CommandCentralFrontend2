import { ErrorService } from './../errors/error.service';

import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { NewsItem } from './news-item';
import { NewsItemDTO } from './news-item-dto';

import { NewsService } from './news.service'
import { Utility } from '../utility';
import { ErrorResponse } from '../errors/error-response';

@Component({
  selector: 'news-create',
  templateUrl: './news-create.component.html'
})
export class NewsCreateComponent {
  @Input() itemText: string;
  @Input() itemTitle: string;
  errorMessages: string[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router,
    private errorService: ErrorService
  ) { }

  createNews(): void {
    this.errorMessages = [];
    const dto = {
      Title: this.itemTitle,
      Paragraphs: this.itemText.match(/[^\r\n]+/g)
    } as NewsItemDTO;
    this.newsService.createNewsItem(dto)
      .then(response => this.router.navigate(['/news']))
      .catch(errs => this.errorMessages = this.errorMessages.concat(errs));
  }
}
