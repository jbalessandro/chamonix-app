import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-categoria-alterar',
  templateUrl: './categoria-alterar.component.html',
  providers: [CategoriaService]
})
export class CategoriaAlterarComponent implements OnInit {

  @Input() categoria: Categoria;
  @Output() fecharModal = new EventEmitter<boolean>();
  categoriaLocal = {} as Categoria;

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.categoriaLocal = JSON.parse(JSON.stringify(this.categoria));
  }

  gravar() {
    this.categoriaLocal.descricao = this.categoriaLocal.descricao.toUpperCase().trim();
    this.service.put(this.categoriaLocal).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
