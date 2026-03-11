import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTransaccionPagePage } from './detalle-transaccion-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTransaccionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTransaccionPagePageRoutingModule {}
