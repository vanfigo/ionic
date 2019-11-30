import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() articleNumber: number;

  constructor() { }

  ngOnInit() {}

}
