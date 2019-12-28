import {BarcodeScanResult} from '@ionic-native/barcode-scanner';

export class Record {
  public format: string;
  public text: string;
  public type: string;
  public icon: string;
  public created: Date;

  constructor(result: BarcodeScanResult) {
    this.format = result.format;
    this.text = result.text;
    this.type = this.text.substr(0, 4);
    this.created = new Date();
    this.getType();
  }

  private getType() {
    switch (this.type) {
      case 'http':
        this.icon = 'globe';
        break;
      case 'geo:':
        this.icon = 'pin';
        break;
      default:
        this.type = 'unknown';
        this.icon = 'create';
    }
  }
}
