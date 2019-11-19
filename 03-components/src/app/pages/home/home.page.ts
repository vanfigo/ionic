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
    { icon: 'beaker', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'radio-button-on', name: 'Button and Routes', redirectTo: '/buttons' },
    { icon: 'card', name: 'Card', redirectTo: '/card' },
    { icon: 'checkmark-circle-outline', name: 'Check', redirectTo: '/check' },
    { icon: 'calendar', name: 'Date Time', redirectTo: '/date-time' }
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
