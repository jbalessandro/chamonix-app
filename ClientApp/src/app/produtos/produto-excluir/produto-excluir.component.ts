import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-produto-excluir',
  templateUrl: './produto-excluir.component.html',
  providers: [ProdutoService]
})
export class ProdutoExcluirComponent {

  @Input() produto: Produto;
  @Output() fecharModal = new EventEmitter<boolean>();

  constructor(private service: ProdutoService) { }

  excluir() {
    this.service.delete(this.produto.produtoId).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Não é possível excluir este produto')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
