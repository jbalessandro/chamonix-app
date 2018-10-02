import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormaPgtoService } from '../../../services/mesa/conta/forma-pgto.service';
import { FormaPgto } from '../../../models/forma-pgto';

@Component({
  selector: 'app-forma-pgto-alterar',
  templateUrl: './forma-pgto-alterar.component.html',
  providers: [FormaPgtoService]
})
export class FormaPgtoAlterarComponent implements OnInit {

  @Input() formaPgto: FormaPgto;
  @Output() fecharModal = new EventEmitter<boolean>();
  model = {} as FormaPgto;

  constructor(private service: FormaPgtoService) { }

  ngOnInit() {
    this.model = JSON.parse(JSON.stringify(this.formaPgto));
  }

  gravar() {
    this.model.descricao = this.model.descricao.toUpperCase().trim();
    this.service.put(this.model).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
