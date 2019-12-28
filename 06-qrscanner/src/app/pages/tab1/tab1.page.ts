import { Component } from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {LocalDataService} from '../../providers/local-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private barcodeScanner: BarcodeScanner,
              private localDataService: LocalDataService) {}

  ionViewWillEnter() {
    // console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    this.scan();
  }

  ionViewWillLeave() {
    // console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    // console.log('ionViewDidLeave');
  }

  scan = () => {
    this.barcodeScanner.scan().then(barcodeData => {
      if (!barcodeData.cancelled) {
        this.localDataService.saveRecord(barcodeData);
      }
    }).catch(err => {
      console.log('Error', err);
      this.localDataService.saveRecord({text: 'geo:-101.22037425478823,20.5704376953005', format: 'QR_CODE', cancelled: false});
    });
  }

}
