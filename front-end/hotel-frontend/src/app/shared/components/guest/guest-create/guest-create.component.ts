import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/shared/models/Guest';

import { GuestService } from 'src/app/core/services/guest/guest.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})
export class GuestCreateComponent implements OnInit {

  public guest: Guest = new Guest();

  constructor(
    private guestService: GuestService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

  }

  public onSubmit() {
    this.guestService.create(this.guest)
      .subscribe(data => {
        this.msgSaveSuccess();
        this.guest = new Guest();

        //this.goToList();
      },
        error => console.log(error)
      );
  }

  public goToList() {
    this.router.navigate(['/guest-list']);
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
    this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: 'Hóspede salvo com sucesso.' });
  }
}
