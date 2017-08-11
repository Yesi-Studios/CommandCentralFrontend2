import { Component } from '@angular/core'

import { LinkItem } from '../navigation/link-item';

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
