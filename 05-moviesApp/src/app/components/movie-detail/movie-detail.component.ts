import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../../providers/movies.service';
import {Cast, MovieDetails} from '../../models/models.interface';
import {ModalController} from '@ionic/angular';
import {LocalDataService} from '../../providers/local-data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() id: number; // passed by componentProps
  movieDetail: MovieDetails;
  cast: Cast[];

  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private moviesService: MoviesService,
              private modalController: ModalController,
              public localDataService: LocalDataService) {}

  async ngOnInit() {
    await this.localDataService.loadFavorites();
    this.moviesService.getMovieDetails(this.id)
      .subscribe(response => this.movieDetail = response);
    this.moviesService.getCredits(this.id)
      .subscribe(response => this.cast = response.cast);
  }

  goBack = () => this.modalController.dismiss();

  favorite = () => {
    this.localDataService.saveFavorite(this.movieDetail);
  }

}
