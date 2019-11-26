import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'contact' },
  { path: '', component: TabsPage, children: [
    { path: 'account', loadChildren: () => import('src/app/pages/avatar/avatar.module').then( m => m.AvatarPageModule) },
    { path: 'contact', loadChildren: () => import('src/app/pages/list/list.module').then( m => m.ListPageModule) },
    {
      path: 'settings',
      loadChildren: () => import('src/app/pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
