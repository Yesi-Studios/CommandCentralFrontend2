import { NewsItemDTO } from './news-item-dto';
export class NewsItem {
  id: string;
  title: string;
  body: string;
  creationTime: Date;
  creator: any;

  constructor(dto: NewsItemDTO){
    this.id = dto.id;
    this.title = dto.title;
    this.body = dto.body;
    this.creator = dto.creator;
    this.creationTime = new Date(dto.creationTime);
  }
}
