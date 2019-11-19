import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList, { static: false }) list: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite = () => {
    console.log('favorite');
    this.list.closeSlidingItems();
  }

  share = () => {
    console.log('share');
    this.list.closeSlidingItems();
  }
  unread = () => console.log('unread');

}
