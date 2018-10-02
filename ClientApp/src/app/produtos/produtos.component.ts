import { Component, OnInit } from '@angular/core';

import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  providers: [ProdutoService]
})
export class ProdutosComponent implements OnInit {

  produtos = [] as Produto[];
  produto = {} as Produto;
  modalNovoProduto = false;
  modalAlterarProduto = false;
  modalExcluirProduto = false;

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.service.getAll().subscribe(
      data => this.produtos = data,
      error => alert('Erro ao listar produtos')
    );
  }

  novoProduto() {
    this.modalNovoProduto = true;
  }

  fecharModalNovoProduto(atualizar: boolean) {
    this.modalNovoProduto = false;
    if (atualizar) {
      this.getProdutos();
    }
  }

  editar(produto: Produto) {
    this.produto = produto;
    this.modalAlterarProduto = true;
  }

  fecharModalAlterarProduto(atualizar: boolean) {
    this.modalAlterarProduto = false;
    if (atualizar) {
      this.getProdutos();
    }
  }

  excluir(produto: Produto) {
    this.produto = produto;
    this.modalExcluirProduto = true;
  }

  fecharModalExcluirProduto(atualizar: boolean) {
    this.modalExcluirProduto = false;
    if (atualizar) {
      this.getProdutos();
    }
  }

}
