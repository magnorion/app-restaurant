import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-entretenimento',
  templateUrl: './entretenimento.page.html',
  styleUrls: ['./entretenimento.page.scss'],
})
export class EntretenimentoPage implements OnInit {
  public images: Array<string>;
  public pagina: string;

  constructor(
    public alertController: AlertController,
    private menuService: MenuServiceService,
    private router: Router
  ) { }

  ionViewDidEnter() {
    this.menuService.emitChange(true);
  }

  ngOnInit() {
    this.images = [
      '/assets/banner/banner1.jpg',
    ];
  }

  public fazerReserve(): void {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Reserva',
      message: 'A sua reserva foi feita com sucesso!',
      buttons: ['Obrigado']
    });

    await alert.present();
  }

  public vendas(event): void {
    event.preventDefault();
    this.router.navigate(['/venda']);
  }
}
