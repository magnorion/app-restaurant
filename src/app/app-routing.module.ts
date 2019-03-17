import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './views/home/home.module#HomePageModule' },
  { path: 'dashboard', loadChildren: './views/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'entretenimento', loadChildren: './views/entretenimento/entretenimento.module#EntretenimentoPageModule' },
  { path: 'mapa', loadChildren: './views/mapa/mapa.module#MapaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
