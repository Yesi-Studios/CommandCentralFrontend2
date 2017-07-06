import { ErrorService } from './../error.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Utility } from '../utility'
import { ConfigService } from '../config.service'

import { NewsItemDTO } from './news-item-dto';
import { NewsItem } from './news-item';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class NewsService {
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(
    private http: Http,
    private configService: ConfigService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private errorService: ErrorService) { }

  getAllNews(): Promise<NewsItem[]> {
    const data = {
      'authenticationtoken': this.authenticationService.client.authToken,
      'apikey': this.configService.config.apiKey
    }
    return this.http.post(this.configService.getFullUrl() + 'LoadNewsItems', data)
      .toPromise()
      .then(response => {
        const dto = Utility.restoreJsonNetReferences(response.json().ReturnValue) as NewsItemDTO[];
        const newsItems: NewsItem[] = dto.map(d => new NewsItem(d));
        return newsItems;
      })
      .catch(error => this.errorService.handleError(error));
  }

  createNewsItem(dto: NewsItemDTO): Promise<string> {
    const data = {
      'title': dto.Title,
      'paragraphs': dto.Paragraphs,
      'authenticationtoken': this.authenticationService.client.authToken,
      'apikey': this.configService.config.apiKey
    }
    return this.http.post(this.configService.getFullUrl() + 'CreateNewsItem', data)
      .toPromise()
      .then(response => response.json().ReturnValue)
      .catch(error => this.errorService.handleError(error));
  }

}
