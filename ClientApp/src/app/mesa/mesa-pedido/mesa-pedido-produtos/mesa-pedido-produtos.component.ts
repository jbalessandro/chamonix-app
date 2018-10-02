import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { Produto } from '../../../../models/produto';

@Component({
  selector: 'app-mesa-pedido-produtos',
  templateUrl: './mesa-pedido-produtos.component.html',
  providers: [ProdutoService]
})
export class MesaPedidoProdutosComponent implements OnInit {

  @Input() categoriaId: number;
  @Output() produto = new EventEmitter<Produto>();
  produtos = [] as Produto[];

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.service.getAll().subscribe(
      data => this.produtos = data.filter(x => x.ativo && x.categoriaId === this.categoriaId),
      error => alert('Erro ao listar produtos')
    );
  }

  selProduto(produto: Produto) {
    this.produto.emit(produto);
  }

  voltar() {
    this.produto.emit(null);
  }

}
