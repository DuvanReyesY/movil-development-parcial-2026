import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  standalone:false
})
export class EmptyStateComponent {
  @Input() mensaje: string = 'No hay datos disponibles';
  @Input() icono: string = 'information-circle-outline';
  @Input() accion: string = '';
  
  @Output() onAccion = new EventEmitter<void>();

  ejecutarAccion() {
    this.onAccion.emit();
  }
}