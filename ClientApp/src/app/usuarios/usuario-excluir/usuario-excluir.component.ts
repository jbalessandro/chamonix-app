import { Component, Input, EventEmitter, Output } from '@angular/core';

import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-usuario-excluir',
  templateUrl: './usuario-excluir.component.html',
  providers: [UsuariosService]
})
export class UsuarioExcluirComponent {

  @Input() usuario: Usuario;
  @Output() fecharModal = new EventEmitter<boolean>();

  constructor(private service: UsuariosService) { }

  excluir(): void {
    this.service.delete(this.usuario.usuarioId).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Não é possível excluir este usuário')
    );
  }

  closeModal(): void {
    this.fecharModal.emit(false);
  }
}
