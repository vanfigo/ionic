import { Component } from '@angular/core';
import {LocalDataService} from '../../providers/local-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public localDataService: LocalDataService) {
  }

}
