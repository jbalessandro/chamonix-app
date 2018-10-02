import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conta } from '../../../../models/mesa/conta';
import { FormaPgtoService } from '../../../../services/mesa/conta/forma-pgto.service';
import { FormaPgto } from '../../../../models/forma-pgto';
import { PedidoPgtoService } from '../../../../services/mesa/conta/pedido-pgto.service';
import { PedidoPgto } from '../../../../models/mesa/pedido-pgto';
import { PedidoPagamento } from '../../../../models/mesa/pedido-pagamento';
import { MesaService } from '../../../../services/mesa/mesa.service';
import { Router } from '@angular/router';
import { isNumber } from 'util';

@Component({
  selector: 'app-mesa-caixa',
  templateUrl: './mesa-caixa.component.html',
  providers: [PedidoPgtoService, FormaPgtoService, MesaService]
})
export class MesaCaixaComponent implements OnInit {

  @Input() mesaId: number;
  @Output() fechar = new EventEmitter();
  conta = {} as Conta;
  formasPgtos = [] as FormaPgto[];
  formaPgto = {} as FormaPgto;
  contaPessoa: number;
  pagamentos = [] as PedidoPgto[];
  pedidoPgto = {} as PedidoPgto;
  exibirPagamentos = false;
  exibirConfExclusao = false;
  valor: number;
  saldo: number;

  constructor(private service: PedidoPgtoService,
    private formaService: FormaPgtoService,
    private mesaService: MesaService,
    private router: Router) { }

  ngOnInit() {
    this.getConta();
    this.getFormasPgtos();
    this.formaPgto = null;
  }

  getConta() {
    this.mesaService.getConta(this.mesaId).subscribe(
      data => {
        this.conta = data;
        this.saldo = (this.conta.pedido.total - this.conta.pedido.pago);
        this.valor = this.saldo;
        this.getContaPessoa();
        this.getPagamentos();
      },
      error => alert('Erro ao obter conta')
    );
  }

  getContaPessoa() {
    this.contaPessoa = (this.conta.pedido.total / this.conta.pedido.clientes);
  }

  getFormasPgtos() {
    this.formaService.getAll().subscribe(
      data => {
        this.formasPgtos = data.filter(x => x.ativo);
        const fp = {} as FormaPgto;
        fp.ativo = true;
        fp.cartao = false;
        fp.descricao = 'VOLTAR';
        fp.formaPgtoId = 0;
        this.formasPgtos.push(fp);
      },
      error => alert('Erro ao listar formas de pagamentos')
    );
  }

  selFormaPgto(forma: FormaPgto) {
    if (forma.formaPgtoId !== 0) {
      this.formaPgto = forma;
    } else {
      this.voltar();
    }
  }

  confirmarRecebimento() {
    const pagamento = {} as PedidoPagamento;
    pagamento.formaPgtoId = this.formaPgto.formaPgtoId;
    pagamento.pedidoId = this.conta.pedido.pedidoId;
    pagamento.servicoAceito = true; // TODO: servico
    pagamento.valor = Number(this.valor);
    this.service.post(pagamento).subscribe(
      data => {
        this.saldo = data;
        if (isNumber(this.saldo)) {
          this.valor = Number(this.saldo);
        }
        this.getPagamentos();
      },
      error => alert('Erro ao gravar')
    );
  }

  getPagamentos() {
    this.service.getAll(this.conta.pedido.pedidoId).subscribe(
      data => {
        this.pagamentos = data;
        this.exibirPagamentos = data.length > 0;
      },
      error => alert('Erro ao listar pagamentos')
    );
  }

  voltar() {
    this.fechar.emit();
  }

  excluirPagamento(pedidoPgto: PedidoPgto) {
    this.pedidoPgto = pedidoPgto;
    this.exibirPagamentos = false;
    this.exibirConfExclusao = true;
  }

  fecharExclusaoPagamento(saldo: number) {
    this.exibirPagamentos = true;
    this.exibirConfExclusao = false;
    this.saldo = saldo;
    this.getConta();
  }

  fecharMesa() {
    this.mesaService.fecharMesa(this.conta.pedido.mesaId).subscribe(
      data => this.router.navigate(['']),
      error => alert('Erro ao fechar mesa')
    );
  }
}
