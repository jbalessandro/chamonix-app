import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PedidoService } from '../../../services/mesa/pedido/pedido.service';
import { Pedido } from '../../../models/mesa/pedido';

@Component({
  selector: 'app-mesa-cancelar',
  templateUrl: './mesa-cancelar.component.html',
  providers: [PedidoService]
})
export class MesaCancelarComponent {

  @Input() pedido: Pedido;
  @Output() cancelada = new EventEmitter<boolean>();
  @Output() fechar = new EventEmitter();

  constructor(private service: PedidoService) { }

  cancelar() {
    this.service.cancelar(this.pedido.pedidoId).subscribe(
      data => {
        if (data === null || data === false) {
          alert('Não é possível cancelar este pedido');
        } else {
          this.cancelada.emit(data);
        }
      }
    );
  }

  voltar() {
    this.fechar.emit();
  }
}
