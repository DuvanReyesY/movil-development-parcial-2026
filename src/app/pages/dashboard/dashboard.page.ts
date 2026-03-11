// dashboard.page.ts - Versión simplificada
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit, OnDestroy {
  ingresos = 0;
  gastos = 0;
  balance = 0;
  categoriasResumen: any[] = [];
  
  private transaccionesSubscription: Subscription = new Subscription();

  constructor(private transaccionService: TransaccionService) {}

  ngOnInit() {
    this.transaccionesSubscription = this.transaccionService.transacciones$.subscribe({
      next: (transacciones) => {
        console.log('Transacciones:', transacciones);
        this.actualizarDashboard(transacciones);
      }
    });
  }
  
  actualizarDashboard(transacciones: any[]) {
    // Calcular ingresos
    this.ingresos = transacciones
      .filter(t => t.tipo === 'ingreso' || t.tipo === 'Ingreso')
      .reduce((sum, t) => sum + (Number(t.monto) || 0), 0);
    
    // Calcular gastos
    this.gastos = transacciones
      .filter(t => t.tipo === 'gasto' || t.tipo === 'Gasto')
      .reduce((sum, t) => sum + (Number(t.monto) || 0), 0);
    
    this.balance = this.ingresos - this.gastos;
    
    // Agrupar gastos por categoría
    const gastos = transacciones.filter(t => t.tipo === 'gasto' || t.tipo === 'Gasto');
    const categorias = new Map();
    
    gastos.forEach(g => {
      const cat = g.categoria || 'Otros';
      const monto = Number(g.monto) || 0;
      categorias.set(cat, (categorias.get(cat) || 0) + monto);
    });
    
    this.categoriasResumen = Array.from(categorias, ([categoria, total]) => ({
      categoria,
      total,
      porcentaje: this.gastos > 0 ? total / this.gastos : 0
    })).sort((a, b) => b.total - a.total);
  }

  ngOnDestroy() {
    this.transaccionesSubscription.unsubscribe();
  }
}