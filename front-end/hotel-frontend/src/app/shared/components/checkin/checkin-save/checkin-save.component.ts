import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkin } from 'src/app/shared/models/Checkin';
import { Observable } from 'rxjs';

import { Guest } from 'src/app/shared/models/Guest';

import { CheckinService } from 'src/app/core/services/checkin/checkin.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { GuestService } from 'src/app/core/services/guest/guest.service';

@Component({
  selector: 'app-checkin-save',
  templateUrl: './checkin-save.component.html',
  styleUrls: ['./checkin-save.component.css']
})
export class CheckinSaveComponent implements OnInit {

  public checkin: Checkin = new Checkin();
  public guests: Observable<Guest[]>;

  constructor(
    private checkinService: CheckinService,
    private guestService: GuestService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

}
