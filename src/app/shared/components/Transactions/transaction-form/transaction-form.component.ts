// transaction-form.component.ts - VERSIÓN SIMPLIFICADA
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaccion } from 'src/app/models/transaccion';
import { ModalController } from '@ionic/angular';
import { TransaccionService } from 'src/app/services/transaccion.service';

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

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private transaccionService: TransaccionService
  ) { }

  guardarFoto(foto: string) {
    this.foto = foto;
    this.transactionForm.patchValue({ comprobante: foto });
  }

  eliminarFoto() {
    this.foto = null;
    this.transactionForm.patchValue({ comprobante: null });
  }

  ngOnInit() {
    this.transactionForm = this.fb.group({
      id: [null],
      tipo: ['gasto', Validators.required], // Usamos minúsculas en el formulario
      categoria: ['', Validators.required],
      fecha: [new Date().toISOString(), Validators.required],
      monto: [null, [Validators.required, Validators.min(0.01)]],
      descripcion: [''],
      comprobante: [null]
    });

    if (this.transaccionAEditar) {
      console.log('Editando transacción:', this.transaccionAEditar);
      
      // SIMPLIFICADO: Pasamos la transacción directamente
      // TypeScript no protestará porque usamos 'as any'
      this.transactionForm.patchValue(this.transaccionAEditar as any);
      this.foto = this.transaccionAEditar.comprobante || null;
    }
  }

  async save() {
    if (this.transactionForm.valid) {
      const formValue = this.transactionForm.value;
      
      // SIMPLIFICADO: Construimos la transacción final
      const transaccionFinal: any = {
        id: this.transaccionAEditar?.id || Date.now().toString(),
        tipo: formValue.tipo,
        categoria: formValue.categoria,
        fecha: formValue.fecha,
        monto: Number(formValue.monto),
        descripcion: formValue.descripcion || '',
        comprobante: formValue.comprobante || null
      };
      
      console.log('Guardando transacción:', transaccionFinal);
      
      // Guardar
      await this.transaccionService.guardar(transaccionFinal);
      this.modalCtrl.dismiss(transaccionFinal, 'confirm');
    }
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}