import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {CardModule} from 'primeng/card';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';


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
    ConfirmPopupModule,
    ToastModule,
    ConfirmDialogModule,
    CalendarModule,
    AutoCompleteModule,
    CheckboxModule,
    ListboxModule,
    DynamicDialogModule,
    CardModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    DialogService
  ]
})
export class SharedModule { }
