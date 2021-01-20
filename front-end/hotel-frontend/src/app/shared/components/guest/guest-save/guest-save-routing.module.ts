import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestSaveComponent } from './guest-save.component';

const routes: Routes = [{ path: '', component: GuestSaveComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestSaveRoutingModule { }
