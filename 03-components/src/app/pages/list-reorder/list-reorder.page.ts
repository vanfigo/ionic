import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters = ['Batman', 'Flash', 'Superman', 'Green Lanthern'];

  constructor() { }

  ngOnInit() { }

  doReorder = (event) => {
    console.log('event :', event);
    event.detail.complete();
    console.log('characters :', this.characters);
  }

}
