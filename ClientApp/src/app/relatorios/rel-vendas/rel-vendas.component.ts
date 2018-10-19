import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { Parametro } from '../../../models/parametro';
import { ParametroService } from '../../../services/parametro/parametro-service';
import { PedidoService } from '../../../services/mesa/pedido/pedido.service';
import { Pedido } from '../../../models/mesa/pedido';

@Component({
  selector: 'app-rel-vendas',
  templateUrl: './rel-vendas.component.html',
  providers: [ParametroService, PedidoService]
})
export class RelVendasComponent implements OnInit {

  pedidos = [] as Pedido[];
  parametro = {} as Parametro;
  consumo: number;
  servico: number;
  total: number;
  pago: number;
  dtOperacao: any;
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private service: PedidoService, private parametroService: ParametroService) { }

  ngOnInit() {
    this.getParametro();
  }

  getParametro() {
    this.parametroService.get().subscribe(
      data => {
        this.parametro = data;
        this.dtOperacao = {
          date: {
            year: new Date(this.parametro.dataOperacao).getFullYear(),
            month: new Date(this.parametro.dataOperacao).getMonth() + 1,
            day: new Date(this.parametro.dataOperacao).getDate()
          }
        };
        this.getPedidos();
      },
      error => alert('Erro ao obter parâmetro')
    );
  }

  getPedidos() {
    this.service.getPedidos(this.parametro.dataOperacao).subscribe(
      data => {
        this.pedidos = data;
        if (data.length > 0) {
          this.consumo = data.map(x => x.consumo).reduce((sum, current) => sum + current);
          this.servico = data.map(x => x.servico).reduce((sum, current) => sum + current);
          this.total = data.map(x => x.total).reduce((sum, current) => sum + current);
          this.pago = data.map(x => x.pago).reduce((sum, current) => sum + current);
        } else {
          this.consumo = 0;
          this.servico = 0;
          this.total = 0;
          this.pago = 0;
        }
      },
      error => alert('Erro ao listar pedidos')
    );
  }

  onDateChanged(event: IMyDateModel) {
    this.parametro.dataOperacao = new Date(event.date.year, event.date.month - 1, event.date.day);
    this.getPedidos();
  }
}
