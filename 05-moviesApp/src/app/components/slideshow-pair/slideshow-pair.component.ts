import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../models/models.interface';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pair',
  templateUrl: './slideshow-pair.component.html',
  styleUrls: ['./slideshow-pair.component.scss'],
})
export class SlideshowPairComponent implements OnInit {

  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };
  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClick = () => {
    this.loadMore.emit();
  }

  viewDetail = async (id: number) => {
    const modal = await this.modalController.create({
      component: MovieDetailComponent,
      componentProps: { id }
    });
    await modal.present();
  }

}
