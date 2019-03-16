import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public user: string;
  public pass: string;

  constructor(
    private router: Router,
    public alertController: AlertController
  ) {}

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
