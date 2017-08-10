import { ErrorService } from './../errors/error.service';
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
    console.log(this.authenticationService.getHeaders());
    return this.http.get(this.configService.getFullUrl() + 'api/newsitem', { headers: this.authenticationService.getHeaders() })
      .toPromise()
      .then(response => {
        const dto = response.json() as NewsItemDTO[];
        return dto.map(d => new NewsItem(d));
      })
      .catch(error => this.errorService.handleError(error));
  }

  getNewsItem(id: string): Promise<NewsItem> {
    const data = {
      'newsitemid': id
    };
    return this.http.get(this.configService.getFullUrl() + 'api/newsitem/' + id, { headers: this.authenticationService.getHeaders() })
      .toPromise()
      .then(response => {
        const dto = response.json() as NewsItemDTO;
        return new NewsItem(dto);
      })
      .catch(error => this.errorService.handleError(error));
  }

  updateNewsItem(dto: NewsItemDTO) {
    const data = {
      'body': dto.body,
      'title': dto.title
    };
    return this.http.patch(this.configService.getFullUrl() + 'api/newsitem/' + dto.id, data,
      { headers: this.authenticationService.getHeaders() })
      .toPromise()
      .then(response => response.json().ReturnValue)
      .catch(error => this.errorService.handleError(error));
  }

  createNewsItem(dto: NewsItemDTO): Promise<any> {
    const data = {
      'title': dto.title,
      'body': dto.body,
    };
    return this.http.post(this.configService.getFullUrl() + 'api/newsitem', data, { headers: this.authenticationService.getHeaders() })
      .toPromise()
      .then(response => response.json().ReturnValue)
      .catch(error => this.errorService.handleError(error));
  }

}
