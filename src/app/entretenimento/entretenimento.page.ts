import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import Opcoes from '../Models/Opcoes';

@Component({
  selector: 'app-entretenimento',
  templateUrl: './entretenimento.page.html',
  styleUrls: ['./entretenimento.page.scss'],
})
export class EntretenimentoPage implements OnInit {
  public images: Array<string>;
  public pagina: string;

  constructor(
    private menu: MenuController,
    private router: Router,
    public alertController: AlertController
  ) {
    try {
      this.pagina = this.router.getCurrentNavigation().extras.state.opcao;
      console.log(this.pagina);
    } catch (err) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.images = [
      '/assets/banner/banner1.jpg',
    ];
  }

  public abrirMenu() {
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
