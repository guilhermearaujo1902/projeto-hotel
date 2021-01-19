import { NgModule } from '@angular/core';

import { GuestCreateComponent } from './guest-create.component';
import { GuestCreateRoutingModule } from './guest-create-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [GuestCreateComponent],
  imports: [
    GuestCreateRoutingModule,
    SharedModule
  ]
})
export class GuestCreateModule { }
