import { Injectable }from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NewsItemDTO } from './news-item-dto';
import { NewsItem } from './news-item';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class NewsService {
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:1113/';

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { }

  getAllNews(): Promise<NewsItem[]> {
    let data = {
      'authenticationtoken': this.authenticationService.client.authToken,
      'apikey': '90fdb89f-282b-4bd6-840b-cef597615728'
    }
    return this.http.post(this.baseUrl + 'LoadNewsItems', data)
      .toPromise()
      .then(response => {
        let dto = this.authenticationService.restoreJsonNetReferences(response.json().ReturnValue) as NewsItemDTO[];
        let newsItems: NewsItem[] = dto.map(d => new NewsItem(d));
        return newsItems;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
