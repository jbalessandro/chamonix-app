import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Usuario } from '../../../models/usuario';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { CargoService } from '../../../services/cargo/cargo.service';
import { Cargo } from '../../../models/cargo';

@Component({
  selector: 'app-usuario-incluir',
  templateUrl: './usuario-incluir.component.html',
  providers: [UsuariosService, CargoService]
})
export class UsuarioIncluirComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<boolean>();
  usuario = {} as Usuario;
  cargos = [] as Cargo[];

  constructor(private service: UsuariosService, private cargoService: CargoService) { }

  ngOnInit() {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getAll().subscribe(
      data => this.cargos = data,
      error => alert('Erro ao listar cargos')
    );
  }

  gravar(): void {
    this.usuario.nome = this.usuario.nome.toUpperCase();
    this.service.post(this.usuario).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal(): void {
    this.fecharModal.emit(false);
  }
}
