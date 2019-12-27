import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopHeadline } from 'src/app/models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  headlinesPage = 1;
  categoriesPage = 0;
  currentCategory: string;
  private apiKey = environment.apiKey;
  private endpoint = environment.endpoint;
  private headers = new HttpHeaders({
    'X-Api-key': this.apiKey
  });

  private query = <T>(query: string) => {
    const url = this.endpoint + query;
    return this.http.get<T>(url, { headers: this.headers });
  }

  constructor(private http: HttpClient) { }

  getTopHeadlines = () =>
    this.query<TopHeadline>(`/top-headlines?country=us&page=${this.headlinesPage++}`)

  getTopHeadlinesByCategory = (category: string) => {
    if (this.currentCategory === category) {
      this.categoriesPage++;
    } else {
      this.categoriesPage = 1;
      this.currentCategory = category;
    }
    return this.query<TopHeadline>(`/top-headlines?country=us&category=${category}&page=${this.categoriesPage}`);
  }

}
