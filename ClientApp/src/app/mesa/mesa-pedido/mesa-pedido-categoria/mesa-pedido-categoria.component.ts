import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../../../models/categoria';
import { CategoriaService } from '../../../../services/categoria/categoria.service';

@Component({
  selector: 'app-mesa-pedido-categoria',
  templateUrl: './mesa-pedido-categoria.component.html',
  providers: [CategoriaService]
})
export class MesaPedidoCategoriaComponent implements OnInit {

  @Output() categoria = new EventEmitter<Categoria>();
  categorias = [] as Categoria[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getAll().subscribe(
      data => this.categorias = data.filter(x => x.cardapio && x.ativo),
      error => alert('Erro ao listar categorias')
    );
  }

  selCategoria(categoria: Categoria) {
    this.categoria.emit(categoria);
  }
}
