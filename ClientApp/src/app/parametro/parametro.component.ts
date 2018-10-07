import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../../services/parametro/parametro-service';
import { Parametro } from '../../models/parametro';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  providers: [ParametroService]
})
export class ParametroComponent implements OnInit {

  parametro = {} as Parametro;

  constructor(private service: ParametroService) { }

  ngOnInit() {
    this.getParametro();
  }

  getParametro() {
    this.service.get().subscribe(
      data => this.parametro = data,
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

}
