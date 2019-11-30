import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/providers/news.service';
import { Article } from 'src/app/models/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe( resp => {
      this.articles.push(...resp.articles);
    });
  }

}
