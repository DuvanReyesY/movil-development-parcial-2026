import { Component, OnInit } from '@angular/core';
import { FormularioTransaccionModalPage } from '../formulario-transaccion-modal/formulario-transaccion-modal.page';
import { ModalController } from '@ionic/angular';
import { Transaccion } from 'src/app/models/transaccion';
import { StorageService } from 'src/app/services/storage.service';
import { TransactionDetailsComponent } from 'src/app/shared/components/Transactions/transaction-details/transaction-details.component';

@Component({
  selector: 'app-lista-transacciones-page',
  templateUrl: './lista-transacciones-page.page.html',
  styleUrls: ['./lista-transacciones-page.page.scss'],
  standalone: false
})
export class ListaTransaccionesPagePage implements OnInit {
  message = 'This modal example uses the modalController to present and dismiss modals.';

  transacciones: Transaccion[] = [];
  tipoFiltro: string = '';
  categoriaFiltro: string = '';
  textoFiltro: string = '';

  constructor(private modalCtrl: ModalController,
    private storageService: StorageService
  ) { }

  async verDetalle(transaccion: Transaccion) {
    const modal = await this.modalCtrl.create({
      component: TransactionDetailsComponent,
      componentProps: { transaccion: transaccion } // PASAMOS LA TRANSACCIÓN
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'delete') {
      // Lógica para eliminar del array y del Storage
      this.transacciones = this.transacciones.filter(t => t.id !== data.id);
      await this.storageService.guardarTransacciones(this.transacciones);
    } else if (role === 'editado') {
      // Lógica para actualizar el array
      const index = this.transacciones.findIndex(t => t.id === data.id);
      this.transacciones[index] = data;
      await this.storageService.guardarTransacciones(this.transacciones);
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: FormularioTransaccionModalPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      this.transacciones = [...this.transacciones, data];
      console.log('Lista actualizada:', this.transacciones);
      await this.storageService.guardarTransacciones(this.transacciones);
    }
  }

  Guardar(datosTransaccion: any) {
    this.modalCtrl.dismiss(datosTransaccion, 'confirm');
  }

  async ngOnInit() {
    this.transacciones = await this.storageService.obtenerTransacciones();
  }

}
