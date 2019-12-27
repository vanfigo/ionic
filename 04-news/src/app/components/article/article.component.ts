import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/models';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {ActionSheetController, Platform, ToastController} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {LocalDataService} from '../../providers/local-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() articleNumber: number;
  @Input() atFavorites = false;

  constructor(private iab: InAppBrowser,
              private actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing,
              private localData: LocalDataService,
              private platform: Platform) { }

  ngOnInit() {}

  openArticle = () => {
    this.iab.create(this.article.url, '_system');
  }

  showActionSheet = async () => {
    const favButton = this.atFavorites ? {
      text: 'Delete',
      icon: 'trash',
      role: '',
      cssClass: 'action-dark',
      handler: ()  => {
        this.localData.deleteArticle(this.article);
      }
    } : {
      text: 'Favorite',
      icon: 'star',
      cssClass: 'action-dark',
      handler: () => {
        this.localData.saveArticle(this.article);
      }
    };
    const sheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Share',
        icon: 'share',
        cssClass: 'action-dark',
        handler: this.shareNews
      }, favButton, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark'
      }]
    });
    await sheet.present();
  }

  shareNews = () => {
    if (this.platform.is('cordova')) {
      this.socialSharing.share(
        this.article.title,
        this.article.source.name,
        null,
        this.article.url
      );
    } else {
      if (navigator['share']) {
        navigator['share']({
          title: this.article.title,
          text: this.article.description,
          url: this.article.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('No sharing tool support');
      }
    }
  }

}
