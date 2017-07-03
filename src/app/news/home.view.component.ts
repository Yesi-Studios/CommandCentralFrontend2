import { Component, Input, OnInit } from '@angular/core'

import { NewsItem } from './news-item';
import { LinkItem } from '../navigation/link-item';

import { NewsService } from './news.service'

@Component({
  selector: 'home-view',
  templateUrl: './home.view.component.html'
})
export class HomeViewComponent implements OnInit {
  newsItems: NewsItem[];
  linkItems: LinkItem[] = [
    {
      text: "Create news item",
      url: "/news/create"
    }
  ]

  constructor(private newsService: NewsService) { }

  getNewsItems(): void {
    this.newsService.getAllNews()
    .then(items => this.newsItems = items);
  }

  ngOnInit() {
    this.getNewsItems();
  }
}
