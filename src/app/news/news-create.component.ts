
import { Component, Input, OnInit } from '@angular/core'

import { NewsItem } from './news-item';

import { NewsService } from './news.service'

@Component({
  selector: 'news-create',
  templateUrl: './news-create.component.html'
})
export class NewsCreateComponent implements OnInit {
  newsItems: NewsItem[];

  constructor(private newsService: NewsService) { }

  getNewsItems(): void {
    this.newsService.getAllNews()
    .then(items => this.newsItems = items);
  }

  ngOnInit() {
    this.getNewsItems();
  }
}
