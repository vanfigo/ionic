import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/models.interface';
import {ModalController} from '@ionic/angular';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  slideOptions = {
    slidesPerView: 1.1,
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
