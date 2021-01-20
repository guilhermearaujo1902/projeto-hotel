import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'guest-create',
    loadChildren: () => import('./shared/components/guest/guest-create/guest-create.module').then(m => m.GuestCreateModule)
  },
  {
    path: 'guest-list',
    loadChildren: () => import('./shared/components/guest/guest-list/guest-list.module').then(m => m.GuestListModule)
  },
  {
    path: 'checkin-create',
    loadChildren: () => import('./shared/components/checkin/checkin-create/checkin-create.module').then(m => m.ChekinCreateModule)
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
