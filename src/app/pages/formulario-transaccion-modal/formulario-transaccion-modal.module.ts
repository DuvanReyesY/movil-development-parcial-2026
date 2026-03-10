import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared-module';
import { IonicModule } from '@ionic/angular';

import { FormularioTransaccionModalPageRoutingModule } from './formulario-transaccion-modal-routing.module';

import { FormularioTransaccionModalPage } from './formulario-transaccion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FormularioTransaccionModalPageRoutingModule,
  ],
  declarations: [FormularioTransaccionModalPage]
})
export class FormularioTransaccionModalPageModule {}
