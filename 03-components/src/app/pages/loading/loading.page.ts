import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Loading...');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  presentLoading = async (message: string) => {
    this.loading = await this.loadingCtrl.create({ message });
    await this.loading.present();
  }

}
