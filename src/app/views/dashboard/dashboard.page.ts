import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Opcoes from '../../Models/Opcoes';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private router: Router,
    private menuService: MenuServiceService
  ) { }

  public images: Array<string>;
  public opcoes: Array<Opcoes>;

  ngOnInit() {
    this.images = [
      '/assets/banner/banner1.jpg',
      '/assets/banner/banner2.jpg',
      '/assets/banner/banner3.jpg'
    ];

    this.opcoes = [
      { icone: 'restaurant', name: 'Restaurante' },
      { icone: 'videocam', name: 'Cinema' },
      { icone: 'cafe', name: 'Cafeterias' },
      { icone: 'beer', name: 'Bares' },
      { icone: 'musical-note', name: 'Discotecas' },
      { icone: 'partly-sunny', name: 'Parques' }
    ];
  }

  ionViewDidEnter() {
    this.menuService.emitChange(true);
  }

  public selecionarOpcao(opt: string): void {
    this.router.navigate(['/mapa'], {state: {opcao: opt}});
  }
}
