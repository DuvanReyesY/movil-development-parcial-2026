// analytics.service.ts
import { Injectable } from '@angular/core';
import { TransaccionService } from './transaccion.service';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  calcularTotal(transacciones: Transaccion[], tipo: 'Ingreso' | 'Gasto'): number {
    return transacciones
      .filter(t => t.tipo === tipo)
      .reduce((total, transaccion) => total + transaccion.monto, 0);
  }

  getResumenCategorias(transacciones: Transaccion[]): any[] {
    // Filtramos solo gastos
    const gastos = transacciones.filter(t => t.tipo === 'Gasto');
    
    if (gastos.length === 0) return [];
    
    const totalGastos = this.calcularTotal(transacciones, 'Gasto');
    
    // Agrupamos por categoría
    const categoriasMap = new Map();
    
    gastos.forEach(gasto => {
      const categoria = gasto.categoria || 'Otros';
      const monto = gasto.monto;
      
      if (categoriasMap.has(categoria)) {
        categoriasMap.set(categoria, categoriasMap.get(categoria) + monto);
      } else {
        categoriasMap.set(categoria, monto);
      }
    });
    
    // Convertimos a array y calculamos porcentajes
    const categoriasArray = Array.from(categoriasMap, ([categoria, total]) => ({
      categoria,
      total,
      porcentaje: totalGastos > 0 ? total / totalGastos : 0
    }));
    
    // Ordenamos de mayor a menor monto
    return categoriasArray.sort((a, b) => b.total - a.total);
  }
}