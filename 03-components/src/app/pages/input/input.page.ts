import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  name: string;
  user = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit = () => {
    console.log('user :', this.user);
  }
}
