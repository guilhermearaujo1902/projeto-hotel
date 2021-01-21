import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

import { GuestService } from 'src/app/core/services/guest/guest.service';
import { Guest } from 'src/app/shared/models/Guest';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.css']
})
export class GuestCardComponent implements OnInit {

  public guests: Observable<Guest>;

  constructor(
    private guestService: GuestService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
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

  selectProduct(guest: Guest) {
    this.ref.close(guest);
  }

}
