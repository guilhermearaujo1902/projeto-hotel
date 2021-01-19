import { NgModule } from '@angular/core';

import { GuestListComponent } from './guest-list.component';
import { GuestListRoutingModule } from './guest-list-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [GuestListComponent],
  imports: [
    GuestListRoutingModule,
    SharedModule
  ]
})
export class GuestListModule { }
