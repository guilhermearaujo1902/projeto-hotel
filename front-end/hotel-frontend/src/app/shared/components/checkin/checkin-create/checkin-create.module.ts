import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { CheckinCreateComponent } from './checkin-create.component';
import { ChekinCreateRoutingModule } from './checkin-create-routing.module';


@NgModule({
  declarations: [CheckinCreateComponent],
  imports: [
    ChekinCreateRoutingModule,
    SharedModule
  ]
})
export class ChekinCreateModule { }
