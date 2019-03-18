import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Produto from 'src/app/Models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private emitChangeSource = new Subject<Produto>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: Produto) {
    this.emitChangeSource.next(change);
  }

  /*
  emitRemove(produto: Produto) {
    this.changeEmitted$.subscribe(res => {
      const arr = res.filter(array => array !== produto);
      this.emitChangeSource.next(arr);
    });
  }
  */
}
