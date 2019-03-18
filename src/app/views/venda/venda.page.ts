import { Component, OnInit } from '@angular/core';
import Produto from 'src/app/Models/Produto';
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.page.html',
  styleUrls: ['./venda.page.scss'],
})
export class VendaPage implements OnInit {
  public produtos: Array<Produto>;

  constructor(
    private menuService: MenuServiceService,
    private produtoService: ProdutosService
  ) { }

  ngOnInit() {
    this.produtos = [
      {titulo: 'Cafe' , image: '/assets/produtos/cafe.jpg', valor: 2.00},
      {titulo: 'Cerveja' , image: '/assets/produtos/cerveja.jpg', valor: 8.00},
      {titulo: 'Fritas' , image: '/assets/produtos/fritas.jpg', valor: 10.00},
      {titulo: 'Hamburger' , image: '/assets/produtos/hamburger.jpg', valor: 15.00}
    ];
  }

  ionViewDidEnter() {
    this.menuService.emitChange(true);
  }

  public carrinho(event, produto: Produto) {
    event.preventDefault();
    this.produtoService.emitChange(produto);
  }
}
