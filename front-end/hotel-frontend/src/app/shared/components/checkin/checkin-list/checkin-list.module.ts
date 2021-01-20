import { NgModule } from '@angular/core';

import { CheckinListComponent } from './checkin-list.component';
import { CheckinListRoutingModule } from './checkin-list-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [CheckinListComponent],
  imports: [
    CheckinListRoutingModule,
    SharedModule
  ]
})
export class CheckinListModule { }
