import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthday: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked save!', event);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not dismiss');
          return false;
        }
      }]
    };
  }

  dateChanged = (event) => {
    console.log('event :', event.detail.value, this.birthday);
  }

}
