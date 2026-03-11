// progress-bar-category.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-category',
  templateUrl: './progress-bar-category.component.html',
  styleUrls: ['./progress-bar-category.component.scss'],
  standalone: false
})
export class ProgressBarCategoryComponent implements OnInit {
  @Input() categoria: string = 'General';
  @Input() porcentaje: number = 0;
  @Input() color: string = 'medium';  // Color por defecto
  @Input() monto: number = 0;

  porcentajeFormateado: number = 0;

  ngOnInit() {
    // Aseguramos que el porcentaje sea un número válido entre 0 y 1
    this.porcentajeFormateado = Math.min(Math.max(this.porcentaje, 0), 1);
    
    // Si el color viene vacío, usamos el pipe para asignarlo (como fallback)
    if (!this.color) {
      console.warn('No se proporcionó color para la categoría:', this.categoria);
    }
  }
}