import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './views/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './views/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'entretenimento', loadChildren: './views/entretenimento/entretenimento.module#EntretenimentoPageModule' },
  { path: 'mapa', loadChildren: './views/mapa/mapa.module#MapaPageModule' },
  { path: 'venda', loadChildren: './views/venda/venda.module#VendaPageModule' },
  { path: 'carrinho', loadChildren: './views/carrinho/carrinho.module#CarrinhoPageModule' },
  { path: '*', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
