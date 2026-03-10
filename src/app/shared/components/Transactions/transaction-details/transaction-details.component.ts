import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(private modalCtrl: ModalController,
    private transaccionService: TransaccionService
  ) { }


  // En transaction-details.component.ts
  async onEdit() {
    const modal = await this.modalCtrl.create({
      component: TransactionFormComponent,
      componentProps: { transaccionAEditar: this.transaccion }
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      this.modalCtrl.dismiss(data, 'editado');
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  onDelete() {
    this.modalCtrl.dismiss(this.transaccion, 'delete');
  }

  ngOnInit() { }

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
}
