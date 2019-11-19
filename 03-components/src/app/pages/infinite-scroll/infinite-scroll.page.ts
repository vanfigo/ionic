import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  loadData = (event) => {
    console.log('cargando');
    setTimeout(() => {
      if (this.data.length < 50) {
        this.data.push(...Array(20));
      } else {
        this.infiniteScroll.disabled = true;
      }
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
  }

}
