import { Component, Output, EventEmitter } from '@angular/core';
import { FormaPgtoService } from '../../../services/mesa/conta/forma-pgto.service';
import { FormaPgto } from '../../../models/forma-pgto';

@Component({
  selector: 'app-forma-pgto-incluir',
  templateUrl: './forma-pgto-incluir.component.html',
  providers: [FormaPgtoService]
})
export class FormaPgtoIncluirComponent {

  @Output() fecharModal = new EventEmitter<boolean>();
  formaPgto = {} as FormaPgto;

  constructor(private service: FormaPgtoService) { }

  gravar() {
    this.formaPgto.descricao = this.formaPgto.descricao.toUpperCase().trim();
    this.service.post(this.formaPgto).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
