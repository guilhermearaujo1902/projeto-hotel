import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckinCreateComponent } from './checkin-create.component';


const routes: Routes = [{ path: '', component: CheckinCreateComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChekinCreateRoutingModule { }
