import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList, { static: false }) list: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  presentToast = async (message: string) => {
    const toast = await this.toastController.create({ message, duration: 2000 });
    await toast.present();
  }

  favorite = () => {
    this.presentToast('You have clicke Favorite');
    this.list.closeSlidingItems();
  }

  share = () => {
    this.presentToast('You have clicke Share');
    this.list.closeSlidingItems();
  }
  unread = () => {
    this.presentToast('You have clicke Delete');
    this.list.closeSlidingItems();
  }

}
