import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PairsPipe } from './pairs.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagePipe,
    PairsPipe
  ],
  exports: [
    ImagePipe,
    PairsPipe
  ]
})
export class PipesModule { }
