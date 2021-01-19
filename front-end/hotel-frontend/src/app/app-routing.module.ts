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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
