import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  standalone: false
})
export class TransactionItemComponent  implements OnInit {

  @Input() transaccion!: Transaccion;

  @Output() itemClick = new EventEmitter<Transaccion>();

  onClick(){
    this.itemClick.emit(this.transaccion);
  }

  constructor() { }

  getColorPorTipo(): string {
    if (!this.transaccion) return 'medium';
    
    const tipo = this.transaccion.tipo?.toLowerCase();
    return tipo === 'ingreso' ? 'success' : 'danger';
  }
 
  ngOnInit() {}

}
