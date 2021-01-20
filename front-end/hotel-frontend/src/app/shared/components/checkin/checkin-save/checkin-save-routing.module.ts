import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckinSaveComponent } from './checkin-save.component';

const routes: Routes = [{ path: '', component: CheckinSaveComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChekinCreateRoutingModule { }
