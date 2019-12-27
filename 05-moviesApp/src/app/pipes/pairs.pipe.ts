import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../models/models.interface';

@Pipe({
  name: 'pairs',
  pure: false
})
export class PairsPipe implements PipeTransform {

  transform(arr: Movie[]): any {
    return arr.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);
  }

}
