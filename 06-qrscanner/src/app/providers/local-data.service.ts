import { Injectable } from '@angular/core';
import {Record} from '../models/record.interface';
import {BarcodeScanResult} from '@ionic-native/barcode-scanner';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  history: Record[] = [];

  constructor(private storage: Storage,
              private navController: NavController,
              private inAppBrowser: InAppBrowser) {
    storage.get('history')
      .then(records => {
        if (records) {
          this.history = records;
        }
      });
  }

  saveRecord = async (result: BarcodeScanResult) => {
    const record = new Record(result);
    this.history.unshift(record);
    await this.storage.set('history', this.history);
    this.openRecord(record);
  }

  openRecord = (record: Record) => {
    this.navController.navigateForward('/tabs/tab2');
    switch (record.type) {
      case 'http':
        const browser = this.inAppBrowser.create(record.text);
        break;
      case 'geo:':
        this.navController.navigateForward(`/tabs/tab2/map/${record.text}`);
        break;
    }
  }

}
