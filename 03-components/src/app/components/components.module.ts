import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopoverInfoComponent
  ]
})
export class ComponentsModule { }
