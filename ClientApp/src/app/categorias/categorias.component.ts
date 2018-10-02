import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../services/categoria/categoria.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  providers: [CategoriaService]
})
export class CategoriasComponent implements OnInit {

  categorias = [] as Categoria[];
  categoria = {} as Categoria;
  modalNovaCategoria = false;
  modalAlterarCategoria = false;
  modalExcluirCategoria = false;

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.service.getAll().subscribe(
      data => this.categorias = data,
      error => alert('Erro ao listar categorias')
    );
  }

  novaCategoria() {
    this.modalNovaCategoria = true;
  }

  fecharModalNovaCategoria(atualizar: boolean) {
    this.modalNovaCategoria = false;
    if (atualizar) {
      this.getCategorias();
    }
  }

  editar(categoria: Categoria) {
    this.categoria = categoria;
    this.modalAlterarCategoria = true;
  }

  fecharModalAlterarCategoria(atualizar: boolean) {
    this.modalAlterarCategoria = false;
    if (atualizar) {
      this.getCategorias();
    }
  }

  excluir(categoria: Categoria) {
    this.categoria = categoria;
    this.modalExcluirCategoria = true;
  }

  fecharModalExcluirCategoria(atualizar: boolean) {
    this.modalExcluirCategoria = false;
    if (atualizar) {
      this.getCategorias();
    }
  }
}
