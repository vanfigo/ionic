import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../environments/environment';

const url = environment.urlImageTMDB;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, size: string = 'w500'): string {
    if (!image) {
      return './assets/img/no-image-banner.jpg';
    }
    return `${url}${size}${image}`;
  }

}
