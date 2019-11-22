import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: Observable<any[]>;
  filterText = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.albums = this.dataService.getAlbums();
  }

  search = (event) => {
    this.filterText = event.detail.value;
  }

}
