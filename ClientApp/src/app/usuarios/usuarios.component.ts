import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {

  usuarios = [] as Usuario[];
  usuario = {} as Usuario;
  modalNovoUsuario = false;
  modalAlterarUsuario = false;
  modalExcluirUsuario = false;

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.service.getAll().subscribe(
      data => this.usuarios = data,
      error => alert('Erro ao listar usuários')
    );
  }

  novoUsuario(): void {
    this.modalNovoUsuario = true;
  }

  fecharModalNovoUsuario(atualizar: boolean): void {
    this.modalNovoUsuario = false;
    if (atualizar) {
      this.getUsuarios();
    }
  }

  editar(usuario: Usuario): void {
    this.usuario = usuario;
    this.modalAlterarUsuario = true;
  }

  fecharModalAlterarUsuario(atualizar: boolean): void {
    this.modalAlterarUsuario = false;
    if (atualizar) {
      this.getUsuarios();
    }
  }

  excluir(usuario: Usuario): void {
    this.usuario = usuario;
    this.modalExcluirUsuario = true;
  }

  fecharModalExcluirUsuario(atualizar: boolean): void {
    this.modalExcluirUsuario = false;
    if (atualizar) {
      this.getUsuarios();
    }
  }
}
