import { NgModule } from '@angular/core';

import { GuestSaveComponent } from './guest-save.component';
import { GuestSaveRoutingModule } from './guest-save-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [GuestSaveComponent],
  imports: [
    GuestSaveRoutingModule,
    SharedModule
  ]
})
export class GuestSaveModule { }
