import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: AngularComponent[] = [
    { icon: 'appstore', name: 'Alert', redirectTo: '/alert' },
    { icon: 'american-football', name: 'Action Sheet', redirectTo: '/action-sheet' },
    { icon: 'beaker', name: 'Avatar', redirectTo: '/avatar' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface AngularComponent {
  icon: string;
  name: string;
  redirectTo: string;
}
