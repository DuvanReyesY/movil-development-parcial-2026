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

  getResumenCategorias(transacciones: Transaccion[]) {
  const categoriasMap: { [key: string]: number } = {};
  let totalGastos = 0;

  transacciones.forEach(t => {
    if (t.tipo === 'Gasto') {
      categoriasMap[t.categoria] = (categoriasMap[t.categoria] || 0) + t.monto;
      totalGastos += t.monto;
    }
  });

  return Object.keys(categoriasMap).map(cat => ({
    nombre: cat,
    monto: categoriasMap[cat],
    porcentaje: totalGastos > 0 ? categoriasMap[cat] / totalGastos : 0
  }));
}
}