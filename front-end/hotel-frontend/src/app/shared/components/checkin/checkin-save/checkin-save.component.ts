import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkin } from 'src/app/shared/models/Checkin';
import { Observable } from 'rxjs';

import { Guest } from 'src/app/shared/models/Guest';

import { CheckinService } from 'src/app/core/services/checkin/checkin.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { GuestService } from 'src/app/core/services/guest/guest.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { GuestCardComponent } from '../../guest/guest-card/guest-card.component';

@Component({
  selector: 'app-checkin-save',
  templateUrl: './checkin-save.component.html',
  styleUrls: ['./checkin-save.component.css'],
  providers: [DialogService]
})
export class CheckinSaveComponent implements OnInit {

  public checkin: Checkin = new Checkin();
  public guests: Observable<Guest[]>;
  public selectedGuest: String;

  constructor(
    private checkinService: CheckinService,
    private guestService: GuestService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.findGuests();
  }

  public onSubmit() {
    this.checkinService.create(this.checkin)
      .subscribe(data => {
        this.checkin = new Checkin();
        this.msgSaveSuccess();
      },
        error => console.log(error)
      );
  }

  public findGuests() {
    this.guestService.findAll()
      .subscribe(data => {
        this.guests = data;
      });
  }

  public confirm() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja salvar os dados?',
      accept: () => {
        this.onSubmit();
      }
    });
  }

  public msgSaveSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: 'Check-in realizado com sucesso!' });
  }

  public ref: DynamicDialogRef;

  public show() {
    this.ref = this.dialogService.open(GuestCardComponent, {
      header: 'Selecione o hóspede',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((guest: Guest) => {
      if (guest) {
        this.messageService.add({ severity: 'info', summary: 'Hóspede selecionado', detail: "" });
        this.checkin.guest = guest;
        this.selectedGuest = guest.name;
      }
    });
  }

  public ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
