import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../../services/parametro/parametro-service';
import { Parametro } from '../../models/parametro';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { MesasService } from '../../services/mesas/mesas.service';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  providers: [ParametroService, MesasService]
})
export class ParametroComponent implements OnInit {

  parametro = {} as Parametro;
  mesasAbertas = 0;
  dtOperacao: any;
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private service: ParametroService,
    private mesasService: MesasService) { }

  ngOnInit() {
    this.getParametro();
    this.getMesasAbertas();
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

  getMesasAbertas() {
    this.mesasService.getMesasAbertas().subscribe(
      data => this.mesasAbertas = data,
      error => this.mesasAbertas = 1
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
