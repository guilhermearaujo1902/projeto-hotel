import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [{
      label: 'Guest',
      items: [{
        label: 'New guest',
        icon: 'pi pi-plus',
        command: () => {
          this.router.navigate(['/guest-create']);
        }
      },
      {
        label: 'List of guests',
        icon: 'pi pi-list',
        command: () => {
          this.router.navigate(['/guest-list']);
        }
      }
      ]
    },
    {
      label: 'Checkin',
      items: [{
        label: 'New check-in',
        icon: 'pi pi-plus',
      },
      {
        label: 'List of check-ins',
        icon: 'pi pi-list',
        routerLink: ''
      }
      ]
    }
    ];
  }
}

