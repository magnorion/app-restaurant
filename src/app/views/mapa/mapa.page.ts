import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  public pagina: string;

  constructor(
    private router: Router,
    private menuService: MenuServiceService
  ) {
    try {
      this.pagina = this.router.getCurrentNavigation().extras.state.opcao;
    } catch (err) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.menuService.emitChange(true);
  }

  public acessarPagina(): void {
    this.router.navigate(['/entretenimento']);
  }
}
