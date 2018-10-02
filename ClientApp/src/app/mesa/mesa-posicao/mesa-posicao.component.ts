import { Component, OnInit } from '@angular/core';

import { MesaPosicao } from '../../../models/mesa-posicao';
import { Router } from '@angular/router';
import { MesaService } from '../../../services/mesa/mesa.service';

@Component({
  selector: 'app-mesa-posicao',
  templateUrl: './mesa-posicao.component.html',
  providers: [MesaService]
})
export class MesaPosicaoComponent implements OnInit {

  mesas = [] as MesaPosicao[];

  constructor(private service: MesaService, private router: Router) { }

  ngOnInit() {
    this.getPosicaoMesas();
  }

  getPosicaoMesas() {
    this.service.getPosicaoMesas().subscribe(
      data => this.mesas = data,
      error => alert('Erro ao listar mesas')
    );
  }

  mesaVisao(mesa: MesaPosicao) {
    window.sessionStorage.setItem('mesaId', mesa.mesaId.toString());
    this.router.navigate(['/mesa']);
  }
}
