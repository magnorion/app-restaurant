import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import Opcoes from '../Models/Opcoes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router
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

  public abrirMenu () {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  public logout(): void {
    console.log('teste');
    this.router.navigate(['/home']);
  }

  public proximaPagina(): void {
    this.router.navigate(['/dashboard']);
  }

  public selecionarOpcao(opt: string): void {
    this.router.navigate(['/entretenimento'], {state: {opcao: opt}});
  }
}
