import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../models/produto';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-produto-incluir',
  templateUrl: './produto-incluir.component.html',
  providers: [ProdutoService, CategoriaService]
})
export class ProdutoIncluirComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<boolean>();
  produto = {} as Produto;
  categorias = [] as Categoria[];

  constructor(private service: ProdutoService, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getAll().subscribe(
      data => this.categorias = data,
      error => alert('Erro ao listar categorias')
    );
  }

  gravar() {
    this.produto.descricao = this.produto.descricao.toUpperCase();
    this.produto.detalhe = this.produto.detalhe;
    this.service.post(this.produto).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
