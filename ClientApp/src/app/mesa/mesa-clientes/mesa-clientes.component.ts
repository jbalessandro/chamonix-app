import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../../../models/mesa/pedido';
import { PedidoService } from '../../../services/mesa/pedido/pedido.service';

@Component({
  selector: 'app-mesa-clientes',
  templateUrl: './mesa-clientes.component.html',
  providers: [PedidoService]
})
export class MesaClientesComponent implements OnInit {

  @Input() pedidoId: number;
  @Input() mesaId: number;
  @Output() fechar = new EventEmitter<Pedido>();
  clientes: number;

  constructor(private service: PedidoService) { }

  ngOnInit() {
    if (this.pedidoId !== 0) {
      this.getClientes();
    } else {
      this.clientes = 2;
    }
  }

  gravar() {
    if (this.pedidoId === 0) {
      this.postPedido();
    } else {
      this.putPedido();
    }
  }

  getClientes() {
    this.service.get(this.pedidoId).subscribe(
      data => {
        if (data !== null) {
          this.clientes = data.clientes;
        } else {
          this.clientes = 2;
        }
      }
    );
  }

  postPedido() {
    const pedido = {} as Pedido;
    pedido.clientes = this.clientes;
    pedido.mesaId = this.mesaId;
    this.service.post(pedido).subscribe(
      data => this.fechar.emit(data),
      error => alert('Erro ao gravar clientes')
    );
  }

  putPedido() {
    this.service.get(this.pedidoId).subscribe(
      data => {
        data.clientes = this.clientes;
        this.service.put(data).subscribe(
          res => this.fechar.emit(res),
          error => alert('Erro ao gravar pedido')
        );
      },
      error => alert('Erro ao gravar pedido')
    );
  }

  plus() {
    this.clientes = Number(this.clientes) + 1;
  }

  minus() {
    if (Number(this.clientes) > 1) {
      this.clientes = Number(this.clientes) - 1;
    }
  }

}
