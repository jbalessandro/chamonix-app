import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../../models/mesa/pedido';
import { PedidoItemService } from '../../../services/mesa/pedido/pedidoItem.service';
import { PedidoItem } from '../../../models/mesa/pedidoItem';

@Component({
  selector: 'app-mesa-resumo',
  templateUrl: './mesa-resumo.component.html',
  providers: [PedidoItemService]
})
export class MesaResumoComponent implements OnInit {

  @Input() pedido: Pedido;
  pedidoItens = [] as PedidoItem[];
  consumo = 0;

  constructor(private service: PedidoItemService) { }

  ngOnInit() {
    this.getPedidoItem();
  }

  getPedidoItem() {
    this.service.getAll(this.pedido.pedidoId).subscribe(
      data => {
        this.pedidoItens = data.filter(x => x.ativo);
        this.getConsumo();
      },
      error => alert('Erro ao listar itens do pedido')
    );
  }

  getConsumo() {
    this.consumo = 0;
    this.pedidoItens.forEach(item => {
      this.consumo += item.preco * item.quantidade;
    });
  }

  excluir(pedidoItem: PedidoItem) {
    pedidoItem.ativo = false;
    this.service.put(pedidoItem).subscribe(
      data => this.getPedidoItem(),
      error => {
        if (error && error.error && error.error.Message){
          alert(error.error.Message[0]);  
        } else {
          alert('Erro ao excluir');
        }
      }
    );
  }

  voltou(pedidoItem: PedidoItem) {
    pedidoItem.servido = false;
    this.service.put(pedidoItem).subscribe(
      data => this.getPedidoItem()
    );
  }
}
