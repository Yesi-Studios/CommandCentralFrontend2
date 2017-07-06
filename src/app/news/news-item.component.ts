import { AuthGuard } from './../authentication/auth-guard';
import { Component, Input, OnInit } from '@angular/core'

import { NewsItem } from './news-item'

import { NewsService } from './news.service'

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html'
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: NewsItem;
  canEditNews: boolean;

  constructor(private authGuard: AuthGuard) { }

  ngOnInit() {
    this.canEditNews = this.authGuard.userHasPermissionsToAccess('/news/edit');
  }
}
