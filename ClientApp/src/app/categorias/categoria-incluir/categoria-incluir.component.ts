import { Component, Output, EventEmitter } from '@angular/core';

import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-categoria-incluir',
  templateUrl: './categoria-incluir.component.html',
  providers: [CategoriaService]
})
export class CategoriaIncluirComponent {

  @Output() fecharModal = new EventEmitter<boolean>();
  categoria = {} as Categoria;

  constructor(private service: CategoriaService) { }

  gravar() {
    this.categoria.descricao = this.categoria.descricao.toUpperCase();
    this.service.post(this.categoria).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
