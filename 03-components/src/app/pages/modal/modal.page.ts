import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from 'src/app/pages/modal-info/modal-info.page';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  showModal = async () => {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: 'Rodrigo Loyola',
        country: 'Mexico'
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('data :', data);
  }

}
