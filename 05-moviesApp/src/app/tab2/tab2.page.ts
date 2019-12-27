import { Component } from '@angular/core';
import {MoviesService} from '../providers/movies.service';
import {Movie} from '../models/models.interface';
import {MovieDetailComponent} from '../components/movie-detail/movie-detail.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchText: string;
  ideas: string[] = ['Batman', 'Avengers', 'Star Wars'];
  movies: Movie[] = [];
  loading = false;

  constructor(private moviesService: MoviesService,
              private modalController: ModalController) {}

  search = (event: CustomEvent) => {
    const searchText = event.detail.value;
    if (searchText.length > 0) {
      this.loading = true;
      this.moviesService.searchMovies(searchText)
        .subscribe(response => {
          this.loading = false;
          this.movies = response.results;
        });
    } else {
      this.movies = [];
    }
  }

  viewDetail = async (id: number) => {
    const modal = await this.modalController.create({
      component: MovieDetailComponent,
      componentProps: { id }
    });
    await modal.present();
  }

}
