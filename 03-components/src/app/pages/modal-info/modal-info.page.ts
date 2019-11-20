import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name;
  @Input() country;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  noArguments = () => this.modalController.dismiss();

  arguments = () => this.modalController.dismiss({
    name: 'Bruno Loyola',
    country: 'Mexico'
  })

}
