import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Produto } from '../../../../models/produto';
import { PedidoItemService } from '../../../../services/mesa/pedido/pedidoItem.service';
import { PedidoItem } from '../../../../models/mesa/pedidoItem';

@Component({
  selector: 'app-mesa-pedido-produto',
  templateUrl: './mesa-pedido-produto.component.html',
  providers: [PedidoItemService]
})
export class MesaPedidoProdutoComponent implements OnInit {

  @Input() produto: Produto;
  @Input() pedidoId: number;
  @Output() pedidoItem = new EventEmitter<PedidoItem>();
  quantidade = 1;
  observacao: string;

  constructor(private service: PedidoItemService) { }

  ngOnInit() {
  }

  gravar() {
    const item = {} as PedidoItem;
    item.observacao = this.observacao;
    item.pedidoId = this.pedidoId;
    item.produtoId = this.produto.produtoId;
    item.preco = this.produto.valorVenda;
    item.quantidade = Number(this.quantidade);
    this.service.post(item).subscribe(
      data => this.pedidoItem.emit(item),
      error => alert('Erro ao gravar')
    );
  }

  plus() {
    this.quantidade = Number(this.quantidade) + 1;
  }

  minus() {
    if (Number(this.quantidade) > 1) {
      this.quantidade = Number(this.quantidade) - 1;
    }
  }
}
