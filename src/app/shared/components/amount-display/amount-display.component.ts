import { Component, Input } from '@angular/core';

// amount-display.component.ts
@Component({
  standalone: false,
  selector: 'app-amount-display', template: `
  <ion-text [color]="getColor()">
    {{ (tipo === 'gasto' ? '-' : '+') }} {{ monto | currencyFormat }}
  </ion-text>
`})
export class AmountDisplayComponent {

  @Input() tamano: 'small' | 'medium' | 'large' = 'medium';
  @Input() monto: number = 0;
  @Input() tipo: 'ingreso' | 'gasto' | 'neutral' = 'neutral';

  getColor() {
    if (this.tipo === 'ingreso') return 'success';
    if (this.tipo === 'gasto') return 'danger';
    return 'medium';
  }

}
