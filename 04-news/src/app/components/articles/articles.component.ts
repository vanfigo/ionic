import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/models';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  @Input() atFavorites = false;

  constructor() { }

  ngOnInit() {}

}
