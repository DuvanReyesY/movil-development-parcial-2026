import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTransaccionPagePageRoutingModule } from './detalle-transaccion-page-routing.module';

import { DetalleTransaccionPagePage } from './detalle-transaccion-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTransaccionPagePageRoutingModule
  ],
  declarations: [DetalleTransaccionPagePage]
})
export class DetalleTransaccionPagePageModule {}
