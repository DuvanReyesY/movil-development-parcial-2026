// analytics.service.ts
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  
  calcularTotal(transacciones: Transaccion[], tipo: 'Ingreso' | 'Gasto'): number {
    return transacciones
      .filter(t => t.tipo === tipo)
      .reduce((acc, curr) => acc + curr.monto, 0);
  }

  getBalance(transacciones: Transaccion[]): number {
    const ingresos = this.calcularTotal(transacciones, 'Ingreso');
    const gastos = this.calcularTotal(transacciones, 'Gasto');
    return ingresos - gastos;
  }
}