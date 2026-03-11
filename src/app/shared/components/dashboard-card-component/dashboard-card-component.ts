/* import { Component, Input, OnInit, } from '@angular/core';

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

} */

import { Component, Input } from "@angular/core";

@Component({
  standalone: false,
  selector: 'app-dashboard-card',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ titulo }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <div [style.color]="getColor()">
          <h2>{{ monto | currencyFormat }}</h2>
        </div>
        <ion-icon slot="start" [name]="icono"></ion-icon>
      </ion-card-content>
    </ion-card>
  `
})
export class DashboardCardComponent {
  @Input() titulo!: string;
  @Input() monto!: number;
  @Input() tipo!: 'ingreso' | 'gasto' | 'saldo';
  @Input() icono!: string;

  getColor() {
    if (this.tipo === 'ingreso') return 'var(--ion-color-success)';
    if (this.tipo === 'gasto') return 'var(--ion-color-danger)';
    return 'var(--ion-color-warning)';
  }
}

  /* ngOnInit() {
    this.transaccionService.transacciones$.subscribe(transacciones => {
      this.ingresos = this.analyticsService.calcularTotal(transacciones, 'Ingreso');
      this.gastos = this.analyticsService.calcularTotal(transacciones, 'Gasto');
      this.balance = this.ingresos - this.gastos;

      // Asumiendo que tu AnalyticsService devuelve { categoria, total, porcentaje, color }
      this.categoriasResumen = this.analyticsService.getResumenCategorias(transacciones);
    });
  } */


