import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonicComponent } from 'src/app/models/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<IonicComponent[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getComponents();
  }

  onClick = () => {
    this.menuCtrl.toggle();
  }

}
