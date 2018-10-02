import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MesaService } from '../../../services/mesa/mesa.service';
import { Conta } from '../../../models/mesa/conta';

@Component({
  selector: 'app-mesa-conta',
  templateUrl: './mesa-conta.component.html',
  providers: [MesaService]
})
export class MesaContaComponent implements OnInit {

  @Input() mesaId: number;
  @Output() fechar = new EventEmitter<Conta>();
  conta = {} as Conta;
  contaPessoa: number;
  caixa = false;

  constructor(private service: MesaService) { }

  ngOnInit() {
    this.getConta();
  }

  getConta() {
    this.service.getConta(this.mesaId).subscribe(
      data => {
        this.conta = data;
        this.contaPessoa = (this.conta.pedido.total / this.conta.pedido.clientes);
      },
      error => alert('Erro ao obter conta')
    );
  }

  imprimir() {
    const printContent = document.getElementById('print-section');
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

  pagamento() {
    this.caixa = true;
  }

  fecharModalCaixa() {
    this.caixa = false;
  }
}
