import { Component, Output, EventEmitter } from '@angular/core';
import { Mesa } from '../../../models/mesa';
import { MesasService } from '../../../services/mesas/mesas.service';

@Component({
  selector: 'app-mesas-incluir',
  templateUrl: './mesas-incluir.component.html',
  providers: [MesasService]
})
export class MesasIncluirComponent {

  @Output() fecharModal = new EventEmitter<boolean>();
  mesa = {} as Mesa;

  constructor(private service: MesasService) { }

  gravar() {
    this.mesa.descricao = this.mesa.descricao.toUpperCase();
    this.service.post(this.mesa).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
