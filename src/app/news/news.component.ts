import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core'

import { NewsItem } from './news-item';

import { NewsService } from './news.service'

@Component({
  selector: 'news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[];
  errorMessages: string[];

  constructor(
    private newsService: NewsService,
    private router: Router
    ) { }

  getNewsItems(): void {
    this.newsService.getAllNews()
    .then(items => this.newsItems = items)
    .catch(errs => this.errorMessages = this.errorMessages.concat(errs));
  }

  ngOnInit() {
    this.getNewsItems();
  }

}
