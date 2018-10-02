import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaService } from '../../services/mesa/mesa.service';
import { Pedido } from '../../models/mesa/pedido';
import { PedidoService } from '../../services/mesa/pedido/pedido.service';
import { MesasService } from '../../services/mesas/mesas.service';
import { Mesa } from '../../models/mesa';
import { PedidoItem } from '../../models/mesa/pedidoItem';
import { Conta } from '../../models/mesa/conta';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  providers: [MesaService, MesasService, PedidoService]
})
export class MesaComponent implements OnInit {

  mesaId = 0;
  pedidoId = 0;
  pedido = {} as Pedido;
  mesa = {} as Mesa;
  modalClientes = false;
  modalPedidos = false;
  modalTrocar = false;
  modalCancelar = false;
  modalConta = false;

  constructor(private service: MesaService,
    private mesasService: MesasService,
    private pedidoService: PedidoService,
    private router: Router) { }

  ngOnInit() {
    const id = window.sessionStorage.getItem('mesaId');
    if (id !== undefined) {
      this.setMesa(Number(id));
    }
  }

  setMesa(mesaId: number) {
    this.mesaId = mesaId;
    this.getMesa();
    this.getInfoMesa();
  }

  getMesa() {
    this.mesasService.get(this.mesaId).subscribe(
      data => this.mesa = data,
      error => alert('Erro ao obter mesa')
    );
  }

  getInfoMesa() {
    this.pedidoService.getPedido(this.mesaId).subscribe(
      data => {
        if (data !== null) {
          this.pedido = data;
          this.mesaId = this.pedido.mesaId;
          this.pedidoId = this.pedido.pedidoId;
        } else {
          this.pedidoId = 0;
          this.clientes();
        }
      }
    );
  }

  clientes() {
    this.fecharModais();
    this.modalClientes = true;
  }

  fecharClientes(pedido: Pedido) {
    this.modalClientes = false;
    this.getInfoMesa();
  }

  pedidos() {
    this.fecharModais();
    this.modalPedidos = true;
  }

  fecharModais() {
    this.modalClientes = false;
    this.modalPedidos = false;
    this.modalTrocar = false;
    this.modalCancelar = false;
    this.modalConta = false;
  }

  inicio() {
    this.fecharModais();
  }

  selPedidoItem(pedidoItem: PedidoItem) {
    this.modalPedidos = false;
    this.getInfoMesa();
  }

  trocarMesa() {
    this.fecharModais();
    this.modalTrocar = true;
  }

  selNovaMesa(mesaId: number) {
    this.modalTrocar = false;
    if (mesaId !== this.mesaId) {
      this.setMesa(mesaId);
    }
  }

  cancelar() {
    this.fecharModais();
    this.modalCancelar = true;
  }

  selCancelar(cancelada: boolean) {
    if (cancelada) {
      this.voltar();
    } else {
      this.modalCancelar = false;
    }
  }

  fecharCancelar() {
    this.modalCancelar = false;
  }

  voltar() {
    this.router.navigate(['']);
  }

  conta() {
    this.fecharModais();
    this.modalConta = true;
  }

  fecharConta(conta: Conta) {
    this.modalConta = false;
    if (this.conta) {
      // TODO: confirmar pagamento da conta
    }
  }
}
