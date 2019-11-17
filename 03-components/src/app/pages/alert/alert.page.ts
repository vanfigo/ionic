import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title = 'alert';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  showAlert = async () => {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      // backdropDismiss: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: (text) => {
          console.log('Confirm Okay', text);
        }
      }]
    });
    await alert.present();
  }

  showAlertPrompt = async () => {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      subHeader: 'Subtitle',
      message: 'This is a prompt message.',
      inputs: [{
        name: 'txtNombre',
        type: 'text',
        placeholder: 'Title'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data) => {
          this.title = data.txtNombre;
        }
      }]
    });

    await alert.present();
  }

}
