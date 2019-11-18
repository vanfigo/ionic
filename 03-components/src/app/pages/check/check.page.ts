import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  checks: any [] = [{
    name: 'primary',
    selected: true
  }, {
    name: 'secondary',
    selected: false
  }, {
    name: 'tertiary',
    selected: true
  }];

  constructor() { }

  ngOnInit() {
  }

  clicked = (checkbox) => {
    console.log('checkbox :', checkbox);
  }

}
