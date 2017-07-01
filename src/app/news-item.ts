import { NewsItemDTO } from './news-item-dto';
export class NewsItem {
  id: string;
  title: string;
  paragraphs: string[];
  creationTime: Date;
  creator: any;

  constructor(dto: NewsItemDTO){
    this.id = dto.Id;
    this.title = dto.Title;
    this.paragraphs = dto.Paragraphs;
    this.creator = dto.Creator;
    this.creationTime = new Date(dto.CreationTime);
  }
}
