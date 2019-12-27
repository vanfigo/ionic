import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlideshowBackdropComponent} from './slideshow-backdrop/slideshow-backdrop.component';
import {IonicModule} from '@ionic/angular';
import {PipesModule} from '../pipes/pipes.module';
import {SlideshowPosterComponent} from './slideshow-poster/slideshow-poster.component';
import {SlideshowPairComponent} from './slideshow-pair/slideshow-pair.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent,
    MovieDetailComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent
  ],
  entryComponents: [
    MovieDetailComponent
  ]
})
export class ComponentsModule { }
