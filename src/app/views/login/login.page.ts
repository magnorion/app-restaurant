import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  public user: string ;
  public pass: string;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private menuService: MenuServiceService
  ) {
    this.user = '';
    this.pass = '';
  }

  ionViewDidEnter() {
    this.menuService.emitChange(false);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Dados incorretos',
      message: 'Por favor, informe usuário e senha.',
      buttons: ['OK']
    });

    await alert.present();
  }

  public login() {
    if (this.user === '' || this.pass === '') {
      this.presentAlert();
    } else {
      this.proximaPagina();
    }
  }

  public proximaPagina(): void {
    this.router.navigate(['/dashboard']);
  }
}
