import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '', // <-- CAMBIA ESTO. Ya no debe ser 'tabs'
    component: TabsPage,
    children: [
      {
        path: 'dashboard', // Ahora la ruta completa será /tabs/dashboard
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'transacciones',
        loadChildren: () => import('../lista-transacciones-page/lista-transacciones-page.module').then(m => m.ListaTransaccionesPagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'formulario-transaccion-modal',
        loadChildren: () => import('../formulario-transaccion-modal/formulario-transaccion-modal.module').then(m => m.FormularioTransaccionModalPageModule)
      },
      {
        path: 'TransactionFormComponent',
        loadComponent: () => import('src/app/shared/components/Transactions/transaction-form/transaction-form.component').then(c => c.TransactionFormComponent)
      },
      {
        path: 'detalle-transaccion-page',
        loadChildren: () => import('../detalle-transaccion-page/detalle-transaccion-page.module').then(m => m.DetalleTransaccionPagePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }