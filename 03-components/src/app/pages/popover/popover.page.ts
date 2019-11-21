import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  showPopover = async (event: Event) => {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event
      // mode: 'ios',
      // backdropDismiss: false
    });

    popover.onDidDismiss().then(console.log);
    popover.onWillDismiss().then(console.log);

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    // console.log('data :', data);
  }

}
