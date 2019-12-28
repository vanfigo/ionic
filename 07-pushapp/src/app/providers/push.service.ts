import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  initSetup = () => {
    this.oneSignal.startInit('d9508bbe-c139-443e-874d-d706cc7480f1', '606968829823');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((notification) => {
      // do something when notification is received
      console.log('notification received', notification);
    });

    this.oneSignal.handleNotificationOpened().subscribe((notification) => {
      // do something when a notification is opened
      console.log('notification opened', notification);
    });

    this.oneSignal.endInit();
  }

}
