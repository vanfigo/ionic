import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalInfoPageRoutingModule } from './modal-info-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { ModalInfoPage } from './modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
