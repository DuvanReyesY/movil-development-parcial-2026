// transaction-details.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { Transaccion } from 'src/app/models/transaccion';
import { PhotoGalleryModalComponent } from '../../Photo/photo-gallery-modal/photo-gallery-modal.component';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
  standalone: false
})
export class TransactionDetailsComponent implements OnInit {

  @Input() transaccion!: Transaccion;

  constructor(
    private modalCtrl: ModalController,
    private transaccionService: TransaccionService,
    private actionSheetController: ActionSheetController
  ) { }

  async onEdit() {
    console.log('Editando transacción:', this.transaccion);

    const modal = await this.modalCtrl.create({
      component: TransactionFormComponent,
      componentProps: {
        transaccionAEditar: { ...this.transaccion }
      }
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log('Modal cerrado - role:', role, 'data:', data);

    if (role === 'confirm' && data) {
      try {
        await this.transaccionService.guardar(data);
        console.log('Transacción guardada exitosamente');
        this.modalCtrl.dismiss({
          actualizada: true,
          transaccion: data
        }, 'editado');
      } catch (error) {
        console.error('Error al guardar transacción:', error);
      }
    }
  }

  async confirmarEliminar() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Eliminar Transacción',
      subHeader: `¿Eliminar transacción ${this.transaccion.id}?`,
      cssClass: 'action-sheet-eliminar',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eliminarTransaccion();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async eliminarTransaccion() {
    try {
      await this.transaccionService.eliminar(this.transaccion.id);
      this.modalCtrl.dismiss({ eliminada: true }, 'delete');
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  }

  async onDelete() {
    console.log('Eliminando transacción:', this.transaccion);

    try {
      await this.transaccionService.eliminar(this.transaccion.id);
      console.log('Transacción eliminada');
      this.modalCtrl.dismiss({
        eliminada: true,
        id: this.transaccion.id
      }, 'delete');
    } catch (error) {
      console.error('Error al eliminar transacción:', error);
    }
  }

  cerrar() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {
    console.log('TransactionDetailsComponent - transacción recibida:', this.transaccion);
  }

  async abrirGaleria(fotos: string[], index: number = 0) {
    const modal = await this.modalCtrl.create({
      component: PhotoGalleryModalComponent,
      componentProps: {
        fotos: fotos,
        fotoInicial: index
      }
    });
    await modal.present();
  }

  getColorPorTipo(): string {
    return this.transaccion?.tipo?.toLowerCase() === 'gasto' ? 'danger' : 'success';
  }
}