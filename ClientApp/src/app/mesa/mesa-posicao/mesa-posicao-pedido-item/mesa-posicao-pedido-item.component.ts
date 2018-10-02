import { Component, OnInit, Input } from '@angular/core';
import { PedidoItemService } from '../../../../services/mesa/pedido/pedidoItem.service';
import { PedidoItem } from '../../../../models/mesa/pedidoItem';

@Component({
  selector: 'app-mesa-posicao-pedido-item',
  templateUrl: './mesa-posicao-pedido-item.component.html',
  providers: [PedidoItemService]
})
export class MesaPosicaoPedidoItemComponent implements OnInit {

  @Input() pedidoId: number;
  pedidoItens = [] as PedidoItem[];
  exibir = false;

  constructor(private service: PedidoItemService) { }

  ngOnInit() {
    this.getPedidoItens();
  }

  getPedidoItens() {
    this.service.getAll(this.pedidoId).subscribe(
      data => {
        this.pedidoItens = data.filter(x => x.ativo && !x.servido);
        this.exibir = this.pedidoItens.length > 0;
      }
    );
  }

  servido(pedidoItem: PedidoItem) {
    pedidoItem.servido = true;
    this.service.put(pedidoItem).subscribe(
      data => this.getPedidoItens()
    );
  }
}
