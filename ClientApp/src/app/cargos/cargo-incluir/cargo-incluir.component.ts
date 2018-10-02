import { Component, Output, EventEmitter } from '@angular/core';

import { CargoService } from '../../../services/cargo/cargo.service';
import { Cargo } from '../../../models/cargo';

@Component({
  selector: 'app-cargo-incluir',
  templateUrl: './cargo-incluir.component.html',
  providers: [CargoService]
})
export class CargoIncluirComponent {

  @Output() fecharModal = new EventEmitter<boolean>();
  cargo = {} as Cargo;

  constructor(private service: CargoService) { }

  gravar() {
    this.cargo.descricao = this.cargo.descricao.toUpperCase();
    this.service.post(this.cargo).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
