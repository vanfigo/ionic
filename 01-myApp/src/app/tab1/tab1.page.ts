import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {
    let number = 10;
    // tslint:disable-next-line: no-debugger
    debugger;
    number += 10;
    number *= 2;
    number -= 10;
    console.log({number});
  }

}
