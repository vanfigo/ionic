import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopHeadline } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadlines = () =>
    this.http.get<TopHeadline>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=48eb3045a3944e14baa7c4270e1e1e94`);

}
