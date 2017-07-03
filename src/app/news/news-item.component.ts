import { Component, Input } from '@angular/core'

import { NewsItem } from './news-item'

import { NewsService } from './news.service'

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html'
})
export class NewsItemComponent {
  @Input() newsItem: NewsItem;
}
