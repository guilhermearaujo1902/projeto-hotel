import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GuestService } from 'src/app/core/services/guest/guest.service';
import { Guest } from 'src/app/shared/models/Guest';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  public guests: Observable<Guest[]>;

  constructor(
    private guestService: GuestService,
    private router: Router,
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
      },
      error => console.log(error)
    );
  }

}
