import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../providers/movies.service';
import {Movie, ResponseTMDB} from '../models/models.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getRecentMovies()
      .subscribe(response => this.recentMovies = response.results);
    this.getPopulars();
  }

  loadMore = () => {
    this.getPopulars();
  }

  getPopulars = () =>
    this.moviesService.getPopulars()
      .subscribe(response => this.popularMovies.push(...response.results) )

}
