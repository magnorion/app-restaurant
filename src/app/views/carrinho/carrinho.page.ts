import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import Produto from 'src/app/Models/Produto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  public compras: Array<Produto> = [];

  constructor(
    private menuService: MenuServiceService,
    private produtoService: ProdutosService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.produtoService.changeEmitted$
      .subscribe(produto => this.compras.push(produto));
  }

  ionViewDidEnter() {
    this.menuService.emitChange(true);
    console.log(this.compras);
  }

  public valor(): Number {
    let num = 0;
    this.compras.forEach(compra => num += compra.valor);
    return num;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Compra',
      message: 'Compra feita com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  public finalizar(): void {
    this.presentAlert();
  }
}

