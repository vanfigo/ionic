import { Component } from '@angular/core';
import { LocalDataService } from '../providers/local-data.service';
import { MoviesGenre } from '../models/models.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  moviesByGenre: MoviesGenre[]  = [];

  constructor(public localDataService: LocalDataService) { }

  async ionViewWillEnter() {
    await this.localDataService.loadFavorites();
    this.localDataService.movies.forEach(movie => {
      movie.genres.forEach(genre => {
        const foundGenre = this.moviesByGenre.find(moviesByGenre => moviesByGenre.genre.id === genre.id);
        if (foundGenre === undefined) {
          this.moviesByGenre.push({
            genre,
            movies: [movie]
          });
        } else {
          foundGenre.movies.push(movie);
        }
      });
    });
  }

}
