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
      label: 'Hóspede',
      items: [{
        label: 'Novo hóspede',
        icon: 'pi pi-plus',
        command: () => {
          this.router.navigate(['/guest-create']);
        }
      },
      {
        label: 'Lista de hóspedes',
        icon: 'pi pi-list',
        command: () => {
          this.router.navigate(['/guest-list']);
        }
      }
      ]
    },
    {
      label: 'Check-in',
      items: [{
        label: 'Novo check-in',
        icon: 'pi pi-plus',
        command: () => {
          this.router.navigate(['/checkin-create']);
        }
      },
      {
        label: 'Registro de check-in',
        icon: 'pi pi-list',
        command: () => {
          this.router.navigate(['/checkin-list']);
        }
      }
      ]
    }
    ];
  }
}

