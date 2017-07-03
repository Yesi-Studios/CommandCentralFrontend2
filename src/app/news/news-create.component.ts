
import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { NewsItem } from './news-item';
import { NewsItemDTO } from './news-item-dto';

import { NewsService } from './news.service'
import { Utility } from '../utility';
import { ErrorResponse } from '../error-response';

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
    private router: Router
    ) { }

  createNews(): void {
    let dto = {
      Title: this.itemTitle,
      Paragraphs: this.itemText.match(/[^\r\n]+/g)
    } as NewsItemDTO;
    this.newsService.createNewsItem(dto)
    .then(() => this.router.navigate(['/news']))
    .catch(response => this.errorMessages = this.handleErrors(response.json()))
  }

  handleErrors(res: any): Array<string> {
    let response = Utility.restoreJsonNetReferences(res) as ErrorResponse;
    let errorMessages: string[] = [];
    for (let errorMessage of response.ErrorMessages) {
      errorMessages.push(errorMessage);
    }
    return errorMessages;
  }
}
