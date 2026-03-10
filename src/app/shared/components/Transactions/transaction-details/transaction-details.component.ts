import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { Transaccion } from 'src/app/models/transaccion';
import { PhotoGalleryModal } from '../../Photo/photo-gallery-modal/photo-gallery-modal.component';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
  standalone: false
})
export class TransactionDetailsComponent implements OnInit {

  @Input() transaccion!: Transaccion;

  constructor(private modalCtrl: ModalController) { }

  // Al cerrar el modal, pasamos el rol (para saber si se editó o eliminó)
  async onEdit() {
    const modal = await this.modalCtrl.create({
      component: TransactionFormComponent,
      componentProps: { transaccionAEditar: this.transaccion } // Pasamos la data al form
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.modalCtrl.dismiss(data, 'editado'); // Avisamos que hubo cambios
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  onDelete() {
    this.modalCtrl.dismiss(this.transaccion, 'delete'); // Avisamos que queremos borrar
  }

  ngOnInit() { }

  async abrirGaleria(fotos: string[], index: number = 0) {
  const modal = await this.modalCtrl.create({
    component: PhotoGalleryModal,
    componentProps: {
      fotos: fotos,      // Array de URLs o Base64
      fotoInicial: index // Índice de la foto que quieres mostrar primero
    }
  });
  await modal.present();
}
}
