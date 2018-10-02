import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PedidoPgtoService } from '../../../../../services/mesa/conta/pedido-pgto.service';
import { PedidoPgto } from '../../../../../models/mesa/pedido-pgto';

@Component({
  selector: 'app-mesa-caixa-pagamento-excluir',
  templateUrl: './mesa-caixa-pagamento-excluir.component.html',
  providers: [PedidoPgtoService]
})
export class MesaCaixaPagamentoExcluirComponent {

  @Input() pagamento: PedidoPgto;
  @Output() fechar = new EventEmitter<number>();

  constructor(private service: PedidoPgtoService) { }

  excluir() {
    this.service.delete(this.pagamento.pedidoPgtoId).subscribe(
      data => this.fechar.emit(data),
      error => alert('Erro ao estornar pagamento')
    );
  }

  voltar() {
    this.fechar.emit(0);
  }
}
