import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../../services/parametro/parametro-service';
import { Parametro } from '../../models/parametro';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  providers: [ParametroService]
})
export class ParametroComponent implements OnInit {

  parametro = {} as Parametro;
  dtOperacao: any;
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  // tslint:disable-next-line:max-line-length
  // dtOperacao: any = { date: { year: this.dataInicial.getFullYear(), month: this.dataInicial.getMonth() + 1, day: this.dataInicial.getDate() } };

  constructor(private service: ParametroService) { }

  ngOnInit() {
    this.getParametro();
  }

  getParametro() {
    this.service.get().subscribe(
      data => {
        this.parametro = data;
        this.dtOperacao = {
          date: {
            year: new Date(this.parametro.dataOperacao).getFullYear(),
            month: new Date(this.parametro.dataOperacao).getMonth() + 1,
            day: new Date(this.parametro.dataOperacao).getDate()
          }
        };
      },
      error => alert('Erro ao obter parâmetro')
    );
  }

  gravar() {
    this.service.put(this.parametro).subscribe(
      data => {
        this.parametro = data;
        alert('Parâmetro gravado');
      },
      error => alert('Erro ao gravar')
    );
  }

  onDateChanged(event: IMyDateModel) {
    this.parametro.dataOperacao = new Date(event.date.year, event.date.month - 1, event.date.day);
  }

}
