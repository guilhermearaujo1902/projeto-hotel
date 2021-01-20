import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { CheckinSaveComponent } from './checkin-save.component';
import { ChekinCreateRoutingModule } from './checkin-save-routing.module';


@NgModule({
  declarations: [CheckinSaveComponent],
  imports: [
    ChekinCreateRoutingModule,
    SharedModule
  ]
})
export class ChekinSaveModule { }
