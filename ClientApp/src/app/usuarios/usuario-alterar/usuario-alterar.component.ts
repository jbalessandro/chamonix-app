import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Usuario } from '../../../models/usuario';
import { CargoService } from '../../../services/cargo/cargo.service';
import { Cargo } from '../../../models/cargo';

@Component({
  selector: 'app-usuario-alterar',
  templateUrl: './usuario-alterar.component.html',
  providers: [UsuariosService, CargoService]
})
export class UsuarioAlterarComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() fecharModal = new EventEmitter<boolean>();
  usuarioLocal = {} as Usuario;
  cargos = [] as Cargo[];

  constructor(private service: UsuariosService, private cargoService: CargoService) { }

  ngOnInit(): void {
    this.usuarioLocal = JSON.parse(JSON.stringify(this.usuario));
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getAll().subscribe(
      data => this.cargos = data,
      error => alert('Erro ao listar cargos')
    );
  }

  gravar() {
    this.usuarioLocal.nome = this.usuario.nome.toUpperCase();
    this.service.put(this.usuarioLocal).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
