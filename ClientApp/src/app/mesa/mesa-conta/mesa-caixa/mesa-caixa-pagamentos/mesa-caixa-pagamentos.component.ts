import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PedidoPgtoService } from '../../../../../services/mesa/conta/pedido-pgto.service';
import { PedidoPgto } from '../../../../../models/mesa/pedido-pgto';

@Component({
  selector: 'app-mesa-caixa-pagamentos',
  templateUrl: './mesa-caixa-pagamentos.component.html',
  providers: [PedidoPgtoService]
})
export class MesaCaixaPagamentosComponent {

  @Input() pagamentos: PedidoPgto[];
  @Output() pgtoExcluir = new EventEmitter<PedidoPgto>();

  constructor(private service: PedidoPgtoService) { }

  excluir(pedidoPgto: PedidoPgto) {
    this.pgtoExcluir.emit(pedidoPgto);
  }

}
