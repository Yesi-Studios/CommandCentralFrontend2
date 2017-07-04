import { Component, Input, OnInit } from '@angular/core'

import { NewsItem } from './news-item';
import { LinkItem } from '../navigation/link-item';

import { NewsService } from './news.service'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'news-view',
  templateUrl: './news.view.component.html'
})
export class NewsViewComponent {
  linkItems: LinkItem[] = [
    {
      text: 'View News',
      url: '/news/'
    },
    {
      text: 'Create news item',
      url: '/news/create'
    }
  ]

}
