import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {MovieDetails} from '../models/models.interface';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  movies: MovieDetails[] = [];

  constructor(private storage: Storage,
              private toastController: ToastController) { }

  saveFavorite = async (movie: MovieDetails) => {
    const movieId = this.movies.find(storedMovie => movie.id === storedMovie.id);
    if (!movieId) {
      this.movies.push(movie);
      await this.storage.set('movies', this.movies);
      this.showToast(`${movie.title} was added to favorites`);
    } else {
      this.movies = this.movies.filter(storedMovie => storedMovie.id !== movie.id);
      await this.storage.set('movies', this.movies);
      this.showToast(`${movie.title} was removed from favorites`);
    }
  }

  loadFavorites = async () => this.storage.get('movies')
      .then((resp: MovieDetails[]) => this.movies = resp !== null ? resp : [])

  showToast = async (message: string) => {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }

  isFavorite = ( id: number ): boolean => !!this.movies.find(storedMovie => storedMovie.id === id);

}
