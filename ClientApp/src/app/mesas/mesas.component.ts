import { Component, OnInit } from '@angular/core';
import { MesasService } from '../../services/mesas/mesas.service';
import { Mesa } from '../../models/mesa';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  providers: [MesasService]
})
export class MesasComponent implements OnInit {

  mesas = [] as Mesa[];
  mesa = {} as Mesa;
  modalNovaMesa = false;
  modalAlterarMesa = false;
  modalExcluirMesa = false;

  constructor(private service: MesasService) { }

  ngOnInit() {
    this.getMesas();
  }

  getMesas() {
    this.service.getAll().subscribe(
      data => this.mesas = data,
      error => alert('Erro ao listar mesas')
    );
  }

  novaMesa() {
    this.modalNovaMesa = true;
  }

  fecharModalNovaMesa(atualizar: boolean) {
    this.modalNovaMesa = false;
    if (atualizar) {
      this.getMesas();
    }
  }

  editar(mesa: Mesa) {
    this.mesa = mesa;
    this.modalAlterarMesa = true;
  }

  fecharModalAlterarMesa(atualizar: boolean) {
    this.modalAlterarMesa = false;
    if (atualizar) {
      this.getMesas();
    }
  }

  excluir(mesa: Mesa) {
    this.mesa = mesa;
    this.modalExcluirMesa = true;
  }

  fecharModalExcluirMesa(atualizar: boolean) {
    this.modalExcluirMesa = false;
    if (atualizar) {
      this.getMesas();
    }
  }
}
