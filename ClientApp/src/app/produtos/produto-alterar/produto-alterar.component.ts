import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../models/produto';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-produto-alterar',
  templateUrl: './produto-alterar.component.html',
  providers: [ProdutoService, CategoriaService]
})
export class ProdutoAlterarComponent implements OnInit {

  @Input() produto: Produto;
  @Output() fecharModal = new EventEmitter<boolean>();
  model = {} as Produto;
  categorias = [] as Categoria[];

  constructor(private service: ProdutoService, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
    this.model = JSON.parse(JSON.stringify(this.produto));
  }

  getCategorias() {
    this.categoriaService.getAll().subscribe(
      data => this.categorias = data,
      error => alert('Erro ao listar categorias')
    );
  }

  gravar() {
    this.model.descricao = this.model.descricao.toUpperCase().trim();
    this.model.detalhe = this.model.detalhe;
    this.service.put(this.model).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }

}
