import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { Transaccion } from 'src/app/models/transaccion';

@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
 })
export class DashboardPage implements OnInit {
  transacciones: Transaccion[] = [];
  
  // Variables para los montos
  ingresos = 0;
  gastos = 0;
  balance = 0;

  constructor(
    private transaccionService: TransaccionService,
    private analyticsService: AnalyticsService
  ) {}

  async ngOnInit() {
    this.transacciones = await this.transaccionService.obtenerTodas();
    this.calcularTotales();
  }
  

  calcularTotales() {
    this.ingresos = this.analyticsService.calcularTotal(this.transacciones, 'Ingreso');
    this.gastos = this.analyticsService.calcularTotal(this.transacciones, 'Gasto');
    this.balance = this.analyticsService.getBalance(this.transacciones);
  }
}
