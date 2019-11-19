import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicComponent } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsers = () =>
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')

  getComponents = () =>
    this.httpClient.get<IonicComponent[]>('/assets/data/menu.json')

}
