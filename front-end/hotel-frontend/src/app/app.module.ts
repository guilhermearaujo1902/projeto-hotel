import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/modules/shared/shared.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { GuestCardComponent } from './shared/components/guest/guest-card/guest-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GuestCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GuestCardComponent]
})
export class AppModule { }
