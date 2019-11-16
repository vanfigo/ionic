import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcionSheetPageRoutingModule } from './acion-sheet-routing.module';

import { AcionSheetPage } from './acion-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcionSheetPageRoutingModule
  ],
  declarations: [AcionSheetPage]
})
export class AcionSheetPageModule {}
