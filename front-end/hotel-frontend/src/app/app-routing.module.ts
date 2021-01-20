import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'guest-save/:id',
    loadChildren: () => import('./shared/components/guest/guest-save/guest-save.module').then(m => m.GuestSaveModule)
  },
  {
    path: 'guest-list',
    loadChildren: () => import('./shared/components/guest/guest-list/guest-list.module').then(m => m.GuestListModule)
  },
  {
    path: 'checkin-create',
    loadChildren: () => import('./shared/components/checkin/checkin-save/checkin-save.module').then(m => m.ChekinSaveModule)
  },
  {
    path: 'checkin-list',
    loadChildren: () => import('./shared/components/checkin/checkin-list/checkin-list.module').then(m => m.CheckinListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
