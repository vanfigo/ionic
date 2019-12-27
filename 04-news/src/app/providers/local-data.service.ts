import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models/models';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  articles: Article[];

  constructor(private storage: Storage,
              private toastController: ToastController) { this.loadArticles(); }

  showToast = async (message: string) => {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

  saveArticle = (article: Article) => {
    if (!this.articles.find((savedArticle: Article) => article.title === savedArticle.title)) {
      this.articles.unshift(article);
      this.storage.set('favorites', this.articles);
      this.showToast('Favorite saved');
    }
  }

  loadArticles = async () => {
    this.articles = await this.storage.get('favorites');
    this.articles = this.articles || [];
  }

  deleteArticle = (article: Article) => {
    this.articles = this.articles.filter((savedArticle: Article) => article.title !== savedArticle.title);
    this.storage.set('favorites', this.articles);
    this.showToast('Favorite deleted');
  }

}
