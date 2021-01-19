import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from 'src/app/core/services/guest/guest.service';
import { Guest } from 'src/app/shared/models/Guest';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})
export class GuestCreateComponent implements OnInit {

  public guest: Guest = new Guest();

  constructor(
    private guestService: GuestService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public onSubmit(){
    this.guestService.create(this.guest)
      .subscribe(data => {
        this.guest = new Guest();
        this.goToList();
      },
        error => console.log(error)
      );
  }

  public goToList() {
    this.router.navigate(['/guest-list']);
  }

}
