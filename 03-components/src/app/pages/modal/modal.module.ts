import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalInfoPageModule } from 'src/app/pages/modal-info/modal-info.module';

import { ModalPage } from './modal.page';
import { ModalInfoPage } from 'src/app/pages/modal-info/modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    ComponentsModule,
    ModalInfoPageModule
  ],
  declarations: [ModalPage],
  entryComponents: [ModalInfoPage]
})
export class ModalPageModule {}
