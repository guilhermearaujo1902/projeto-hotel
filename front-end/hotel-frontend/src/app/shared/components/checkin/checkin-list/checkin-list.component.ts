import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Checkin } from 'src/app/shared/models/Checkin';

import { CheckinService } from 'src/app/core/services/checkin/checkin.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin-list',
  templateUrl: './checkin-list.component.html',
  styleUrls: ['./checkin-list.component.css']
})
export class CheckinListComponent implements OnInit {

  public checkins: Observable<Checkin[]>;

  constructor(
    private checkinService: CheckinService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findCheckins();
  }

  private findCheckins() {
    this.checkinService.findAll()
      .subscribe(data => {
        this.checkins = data;
      });
  }

  public delete(id: number) {
    this.checkinService.delete(id).subscribe(
      data => {
        this.findCheckins();
        this.msgDeleteSuccess();
      },
      error => console.log(error)
    );
  }

  public confirm(event: Event, checkin: Checkin) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Tem certeza que deseja cancelar o check-in de ' + checkin.guest.name + '?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(checkin.id);
      },
      reject: () => {
        //reject action
      }
    });
  }

  public msgDeleteSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: 'Check-in cancelado com sucesso.' });
  }

  public newCheckin() {
    this.router.navigate(['checkin-save']);
  }

}
