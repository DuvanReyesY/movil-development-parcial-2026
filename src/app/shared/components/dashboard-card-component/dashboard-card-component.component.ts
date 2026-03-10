import { Component, Input, OnInit, } from '@angular/core';

type CardType = 'Ingresos'| 'Gastos' | 'Balance';

@Component({
  selector: 'app-dashboard-card-component',
  templateUrl: './dashboard-card-component.component.html',
  styleUrls: ['./dashboard-card-component.component.scss'],
  standalone: false
})
export class DashboardCardComponentComponent  implements OnInit {

  @Input() type!: CardType;
  @Input() monto: number = 0;

  titulo: string = '';
  icono: string= '';

  constructor() { }

  ngOnInit() {

    switch (this.type){

      case 'Ingresos':
        this.titulo = 'Ingresos';
        this.icono = 'trending-up';
        break;

      case 'Gastos':
        this.titulo = 'Gastos';
        this.icono = 'trending-down';
        break;

      case 'Balance':
        this.titulo = 'Balance'
        this.icono = 'wallet';
        break;

    }
  }

}
