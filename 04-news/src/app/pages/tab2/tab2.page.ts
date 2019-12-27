import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { NewsService } from 'src/app/providers/news.service';
import { Observable } from 'rxjs';
import { Article, TopHeadline } from 'src/app/models/models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  articles: Article[] = [];

  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.segment.value = this.categories[0];
    this.getArticles(this.segment.value);
  }

  segmentChanged = (event) => {
    this.articles = [];
    this.infiniteScroll.disabled = false;
    this.getArticles(event.detail.value);
  }

  loadArticles = (event) => this.getArticles(this.segment.value, event);

  getArticles = (category: string, event?) =>
    this.newsService.getTopHeadlinesByCategory(category)
      .subscribe((headlines: TopHeadline) => {
        this.articles.push(...headlines.articles);
        if ( event ) {
          event.target.complete();
          if (headlines.articles.length === 0) {
            this.infiniteScroll.disabled = true;
          }
        }
      })

}
