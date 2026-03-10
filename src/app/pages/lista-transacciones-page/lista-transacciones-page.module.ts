import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared-module';
import { IonicModule } from '@ionic/angular';

import { ListaTransaccionesPagePageRoutingModule } from './lista-transacciones-page-routing.module';

import { ListaTransaccionesPagePage } from './lista-transacciones-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ListaTransaccionesPagePageRoutingModule
  ],
  declarations: [ListaTransaccionesPagePage]
})
export class ListaTransaccionesPagePageModule {}
