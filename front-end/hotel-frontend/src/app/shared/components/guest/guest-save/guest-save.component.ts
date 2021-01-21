import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Guest } from 'src/app/shared/models/Guest';

import { GuestService } from 'src/app/core/services/guest/guest.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-guest-save',
  templateUrl: './guest-save.component.html',
  styleUrls: ['./guest-save.component.css']
})
export class GuestSaveComponent implements OnInit {

  public guest: Guest = new Guest();

  constructor(
    private guestService: GuestService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if ((param['id']) && (param['id'] != " ")) {
        this.findById(param['id']);
      }
    });
  }

  public onSubmit() {
    this.guestService.create(this.guest)
      .subscribe(data => {
        this.msgSaveSuccess();
        this.guest = new Guest();
      },
        error => console.log(error)
      );
  }

  private findById(id: number) {
    this.guestService.findById(id)
      .subscribe(data => {
        this.guest = data;
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
    this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: 'Hóspede salvo com sucesso.' });
  }

}
