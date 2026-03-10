import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared-module';
import { FormularioTransaccionModalPage } from './formulario-transaccion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioTransaccionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule],
})
export class FormularioTransaccionModalPageRoutingModule {}
