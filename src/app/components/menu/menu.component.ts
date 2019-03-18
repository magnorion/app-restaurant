import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() show: Boolean;

  constructor(
    private menu: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
    this.show = true;
  }

  public abrirMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  public logout(): void {
    this.router.navigate(['/home']);
    this.menu.close('first');
  }

  public home(): void {
    this.router.navigate(['/dashboard']);
    this.menu.close('first');
  }

  public mapa(): void {
    this.router.navigate(['/mapa']);
    this.menu.close('first');
  }

  public carrinho(): void {
    this.router.navigate(['/carrinho']);
    this.menu.close('first');
  }

}
