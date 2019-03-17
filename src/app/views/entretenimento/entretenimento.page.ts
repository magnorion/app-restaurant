import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-entretenimento',
  templateUrl: './entretenimento.page.html',
  styleUrls: ['./entretenimento.page.scss'],
})
export class EntretenimentoPage implements OnInit {
  public images: Array<string>;
  public pagina: string;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private menuService: MenuServiceService
  ) {
    try {
      this.pagina = this.router.getCurrentNavigation().extras.state.opcao;
      console.log(this.pagina);
    } catch (err) {
      this.router.navigate(['/dashboard']);
    }
  }

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

}
