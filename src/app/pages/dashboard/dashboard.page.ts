import { Component, Input } from "@angular/core";
import { TransaccionService } from "src/app/services/transaccion.service";

// dashboard-card.component.ts
@Component({
  selector: 'app-dashboard-card',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ titulo }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <div [style.color]="getColor()">
          <h3>{{ monto | currency:'COP':'symbol':'1.0-0' }}</h3>
        </div>
        <ion-icon [name]="icono"></ion-icon>
      </ion-card-content>
    </ion-card>
  `
})
export class DashboardCardComponent implements ngOnInit{
  @Input() titulo!: string;
  @Input() monto!: number;
  @Input() tipo!: 'ingreso' | 'gasto' | 'saldo';
  @Input() icono!: string;



  getColor() {
    if (this.tipo === 'ingreso') return 'var(--ion-color-success)'; // Verde
    if (this.tipo === 'gasto') return 'var(--ion-color-danger)';   // Rojo
    return 'var(--ion-color-warning)';                            // Amarillo
  }

  ngOnInit() {
    this.transaccionService.transacciones$.subscribe(transacciones => {
      this.ingresos = this.analyticsService.calcularTotal(transacciones, 'Ingreso');
      this.gastos = this.analyticsService.calcularTotal(transacciones, 'Gasto');
      this.balance = this.ingresos - this.gastos;

      // Asumiendo que tu AnalyticsService devuelve { categoria, total, porcentaje, color }
      this.categoriasResumen = this.analyticsService.getResumenCategorias(transacciones);
    });
  }
}
