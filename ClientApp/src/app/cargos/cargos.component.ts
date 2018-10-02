import { Component, OnInit } from '@angular/core';

import { CargoService } from '../../services/cargo/cargo.service';
import { Cargo } from '../../models/cargo';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  providers: [CargoService]
})
export class CargosComponent implements OnInit {

  cargos = [] as Cargo[];
  cargo = {} as Cargo;
  modalNovoCargo = false;
  modalAlterarCargo = false;
  modalExcluirCargo = false;

  constructor(private service: CargoService) { }

  ngOnInit() {
    this.getCargos();
  }

  getCargos() {
    this.service.getAll().subscribe(
      data => this.cargos = data,
      error => alert('Erro ao listar cargos')
    );
  }

  novoCargo() {
    this.modalNovoCargo = true;
  }

  fecharModalNovoCargo(atualizar: boolean) {
    this.modalNovoCargo = false;
    if (atualizar) {
      this.getCargos();
    }
  }

  editar(cargo: Cargo) {
    this.cargo = cargo;
    this.modalAlterarCargo = true;
  }

  fecharModalAlterarCargo(atualizar: boolean) {
    this.modalAlterarCargo = false;
    if (atualizar) {
      this.getCargos();
    }
  }

  excluir(cargo: Cargo) {
    this.cargo = cargo;
    this.modalExcluirCargo = true;
  }

  fecharModalExcluirCargo(atualizar: boolean) {
    this.modalExcluirCargo = false;
    if (atualizar) {
      this.getCargos();
    }
  }
}
