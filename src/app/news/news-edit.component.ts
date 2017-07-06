import { NewsItemDTO } from './news-item-dto';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from './news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-edit',
  templateUrl: 'news-edit.component.html'
})
export class NewsEditComponent implements OnInit {
  itemTitle: string;
  itemText: string;
  itemId: string;
  errorMessages: string[];

  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.newsService.getNewsItem(id)
      .then(item => {
        this.itemTitle = item.title;
        this.itemText = item.paragraphs.join('\n');
        this.itemId = item.id;
      })
      .catch(errs => this.errorMessages = this.errorMessages.concat(errs));
  }

  updateNews() {
    this.errorMessages = [];
    const dto = {
      Title: this.itemTitle,
      Paragraphs: this.itemText.match(/[^\r\n]+/g),
      Id: this.itemId
    } as NewsItemDTO;
    this.newsService.updateNewsItem(dto)
      .then(response => this.router.navigate(['/news']))
      .catch(errs => this.errorMessages = this.errorMessages.concat(errs));
  }
}
