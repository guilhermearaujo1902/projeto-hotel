import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Guest } from 'src/app/shared/models/Guest';

import { GuestService } from 'src/app/core/services/guest/guest.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  public guests: Observable<Guest[]>;
  public guest: Guest;

  constructor(
    private guestService: GuestService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.findGuests();
  }

  private findGuests() {
    this.guestService.findAll()
      .subscribe(data => {
        this.guests = data;
      });
  }

  public delete(id: number) {
    this.guestService.delete(id).subscribe(
      data => {
        this.findGuests();
        this.msgDeleteSuccess();
      },
      error => console.log(error)
    );
  }

  public update(id: number) {
    this.router.navigate(['guest-save/' + id]);
  }

  public confirm(event: Event, guest: Guest) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Tem certeza que deseja excluir ' + guest.name + '?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(guest.id);
      },
      reject: () => {
        //reject action
      }
    });
  }

  public msgDeleteSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: 'Hóspede excluído com sucesso.' });
  }

  public newGuest() {
    this.router.navigate(['guest-save/ ']);
  }

}
