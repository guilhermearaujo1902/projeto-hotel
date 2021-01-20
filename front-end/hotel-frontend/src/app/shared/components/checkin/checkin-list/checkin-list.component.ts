import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CheckinService } from 'src/app/core/services/checkin/checkin.service';
import { Checkin } from 'src/app/shared/models/Checkin';

@Component({
  selector: 'app-checkin-list',
  templateUrl: './checkin-list.component.html',
  styleUrls: ['./checkin-list.component.css']
})
export class CheckinListComponent implements OnInit {

  public checkins: Observable<Checkin[]>;

  constructor(
    private checkinService: CheckinService
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

}
