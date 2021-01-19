import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';


@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    ButtonModule,
    PanelModule,
    MenuModule,
    CardModule,
    TableModule,
    InputTextModule,
    InputMaskModule,
  ]
})
export class SharedModule { }