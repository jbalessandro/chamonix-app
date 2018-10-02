import { Component, OnInit } from '@angular/core';
import { FormaPgtoService } from '../../services/mesa/conta/forma-pgto.service';
import { FormaPgto } from '../../models/forma-pgto';

@Component({
  selector: 'app-forma-pgto',
  templateUrl: './forma-pgto.component.html',
  providers: [FormaPgtoService]
})
export class FormaPgtoComponent implements OnInit {

  formasPgtos = [] as FormaPgto[];
  formaPgto = {} as FormaPgto;
  modalNovaFormaPgto = false;
  modalAlterarFormaPgto = false;
  modalExcluirFormaPgto = false;

  constructor(private service: FormaPgtoService) { }

  ngOnInit() {
    this.getFormasPgtos();
  }

  getFormasPgtos() {
    this.service.getAll().subscribe(
      data => this.formasPgtos = data,
      error => alert('Erro ao listar formas de pagamentos')
    );
  }

  novaFormaPgto() {
    this.modalNovaFormaPgto = true;
  }

  fecharModalNovaFormaPgto(atualizar: boolean) {
    this.modalNovaFormaPgto = false;
    if (atualizar) {
      this.getFormasPgtos();
    }
  }

  editar(formaPgto: FormaPgto) {
    this.formaPgto = formaPgto;
    this.modalAlterarFormaPgto = true;
  }

  fecharModalAlterarFormaPgto(atualizar: boolean) {
    this.modalAlterarFormaPgto = false;
    if (atualizar) {
      this.getFormasPgtos();
    }
  }

  excluir(formaPgto: FormaPgto) {
    this.formaPgto = formaPgto;
    this.modalExcluirFormaPgto = true;
  }

  fecharModalExcluirFormaPgto(atualizar: boolean) {
    this.modalExcluirFormaPgto = false;
    if (atualizar) {
      this.getFormasPgtos();
    }
  }

}
