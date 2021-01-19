import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/modules/shared/shared.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CheckinListComponent } from './shared/components/checkin/checkin-list/checkin-list.component';
import { CheckinCreateComponent } from './shared/components/checkin/checkin-create/checkin-create.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CheckinListComponent,
    CheckinCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
