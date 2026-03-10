import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-transaccion-modal',
  templateUrl: './formulario-transaccion-modal.page.html',
  styleUrls: ['./formulario-transaccion-modal.page.scss'],
  standalone: false
})
export class FormularioTransaccionModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  confirmar(datos: any) {
    this.modalCtrl.dismiss(datos, 'confirm')
  }


  Cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {
  }

}
