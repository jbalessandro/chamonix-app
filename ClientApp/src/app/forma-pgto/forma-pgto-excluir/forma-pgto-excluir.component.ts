import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormaPgtoService } from '../../../services/mesa/conta/forma-pgto.service';
import { FormaPgto } from '../../../models/forma-pgto';

@Component({
  selector: 'app-forma-pgto-excluir',
  templateUrl: './forma-pgto-excluir.component.html',
  providers: [FormaPgtoService]
})
export class FormaPgtoExcluirComponent {

  @Input() formaPgto: FormaPgto;
  @Output() fecharModal = new EventEmitter<boolean>();

  constructor(private service: FormaPgtoService) { }

  excluir() {
    this.service.delete(this.formaPgto.formaPgtoId).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Não é possível excluir esta forma de pagamento')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
