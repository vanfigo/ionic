import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { IonicComponent } from 'src/app/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components: Observable<IonicComponent[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getComponents();
  }

}
