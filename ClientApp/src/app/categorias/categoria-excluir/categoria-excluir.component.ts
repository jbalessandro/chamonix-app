import { Component, Input, EventEmitter, Output } from '@angular/core';

import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-categoria-excluir',
  templateUrl: './categoria-excluir.component.html',
  providers: [CategoriaService]
})
export class CategoriaExcluirComponent {

  @Input() categoria: Categoria;
  @Output() fecharModal = new EventEmitter<boolean>();

  constructor(private service: CategoriaService) { }

  excluir() {
    this.service.delete(this.categoria.categoriaId).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Não é possível excluir esta categoria')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
