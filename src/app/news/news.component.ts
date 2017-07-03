import { Component, Input, OnInit } from '@angular/core'

import { NewsItem } from './news-item';

import { NewsService } from './news.service'

@Component({
  selector: 'news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
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
