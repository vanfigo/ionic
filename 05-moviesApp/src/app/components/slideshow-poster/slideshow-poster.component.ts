import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/models.interface';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true
  };
  @Input() movies: Movie[] = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  viewDetail = async (id: number) => {
    const modal = await this.modalController.create({
      component: MovieDetailComponent,
      componentProps: { id }
    });
    await modal.present();
  }

}
