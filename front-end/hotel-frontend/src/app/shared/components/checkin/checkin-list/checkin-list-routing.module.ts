import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckinListComponent } from './checkin-list.component';

const routes: Routes = [{ path: '', component: CheckinListComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckinListRoutingModule { }
