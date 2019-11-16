import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcionSheetPage } from './acion-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: AcionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcionSheetPageRoutingModule {}
