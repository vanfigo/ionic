import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/providers/news.service';
import { Article } from 'src/app/models/models';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles = (event?) => {
    this.newsService.getTopHeadlines().subscribe( resp => {
      this.articles.push(...resp.articles);
      if ( event ) {
        event.target.complete();
        if (resp.articles.length === 0) {
          this.infiniteScroll.disabled = true;
        }
      }
    });
  }



}
