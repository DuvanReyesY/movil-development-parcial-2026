import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar-component.component.html',
  styleUrls: ['./filter-bar-component.component.scss'],
  standalone: false
})
export class FilterBarComponent {

  @Input() tipoSeleccionado: string = '';
  @Input() categoriaSeleccionada: string = '';


  @Output() onTipoChange = new EventEmitter<string>();
  @Output() onCategoriaChange = new EventEmitter<string>();
  @Output() onBuscarChange = new EventEmitter<string>();

  onTipoChanged(event: any) {
    this.onTipoChange.emit(event.detail.value);
  }

  onCategoriaChanged(event: any) {
    this.onCategoriaChange.emit(event.detail.value);
  }

  onBuscarInput(event: any) {
    this.onBuscarChange.emit(event.detail.value);
  }
}