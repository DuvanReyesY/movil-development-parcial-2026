import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaccion } from 'src/app/models/transaccion';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],

  standalone: false
})
export class TransactionFormComponent implements OnInit {

  transactionForm!: FormGroup;
  foto: string | null = null;

  @Input() transaccionAEditar?: Transaccion;

  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  guardarFoto(foto: string) {
    this.foto = foto;
    this.transactionForm.patchValue({
      comprobante: foto
    });
  }

  eliminarFoto() {
    this.foto = null;
    this.transactionForm.patchValue({
      comprobante: null
    })
  }

  ngOnInit() {
    this.transactionForm = this.fb.group({
      tipo: ['gasto', Validators.required],
      categoria: ['', Validators.required],
      fecha: [new Date().toISOString(), Validators.required],
      monto: [null, [Validators.required, Validators.min(0.01)]],
      descripcion: [''],
      comprobante: [null]

    })

    if (this.transaccionAEditar) {
      this.transactionForm.patchValue(this.transaccionAEditar);
    }
  }

  save() {
    if (this.transactionForm.valid) {
      const nuevaTransaccion = {
        ...this.transactionForm.value,
        id: Date.now().toString(),
        titulo: this.transactionForm.value.categoria
      };
      this.onSave.emit(this.transactionForm.value);
    }
  }

}
