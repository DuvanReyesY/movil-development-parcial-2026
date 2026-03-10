import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioTransaccionModalPage } from './formulario-transaccion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioTransaccionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioTransaccionModalPageRoutingModule {}
