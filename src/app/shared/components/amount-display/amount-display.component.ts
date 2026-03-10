import { Component, Input, OnInit } from '@angular/core';

// amount-display.component.ts
@Component({ selector: 'app-amount-display', template: `
  <ion-text [color]="getColor()">
    {{ (tipo === 'gasto' ? '-' : '+') }} {{ monto | currencyFormat }}
  </ion-text>
`})
export class AmountDisplayComponent {
  @Input() monto: number = 0;
  @Input() tipo: 'ingreso'|'gasto'|'neutral' = 'neutral';

  getColor() {
    if (this.tipo === 'ingreso') return 'success';
    if (this.tipo === 'gasto') return 'danger';
    return 'medium';
  }
  
}
