import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieDetails, ResponseTMDB, ResponseTMDBCredits} from '../models/models.interface';
import {environment} from '../../environments/environment';

const url = environment.urlTMDB;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  popularsPage = 1;

  constructor(private http: HttpClient) { }

  private executeQuery = <T>(path: string, ...keys: string[]) => {
    const query = `${url}${path}?api_key=${apiKey}&${keys.join('&')}`;
    return this.http.get<T>(query);
  }

  getRecentMovies = () => {
    const today = new Date();
    const lastDay = new Date(today.getDay(), today.getMonth() + 1, 0).getDate();
    const mes = today.getMonth() + 1;
    const mesString = mes < 10 ? '0' + mes : mes;
    return this.executeQuery<ResponseTMDB>('/discover/movie',
      `primary_release_date.gte=${today.getFullYear()}-${ mesString }-01`,
      `primary_release_date.lte=${today.getFullYear()}-${ mesString }-${lastDay}`);
  }

  getPopulars = () => this.executeQuery<ResponseTMDB>('/discover/movie', 'sort_by=popularity.desc', `page=${this.popularsPage++}`);

  getMovieDetails = (id: number) => this.executeQuery<MovieDetails>(`/movie/${id}`);

  getCredits = (id: number) => this.executeQuery<ResponseTMDBCredits>(`/movie/${id}/credits`);

  searchMovies = (searchText: string) => this.executeQuery<ResponseTMDB>('/search/movie', `query=${searchText}`);

}
