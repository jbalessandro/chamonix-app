import { Component, Input, EventEmitter, Output } from '@angular/core';

import { CargoService } from '../../../services/cargo/cargo.service';
import { Cargo } from '../../../models/cargo';

@Component({
  selector: 'app-cargo-excluir',
  templateUrl: './cargo-excluir.component.html',
  providers: [CargoService]
})
export class CargoExcluirComponent {

  @Input() cargo: Cargo;
  @Output() fecharModal = new EventEmitter<boolean>();

  constructor(private service: CargoService) { }

  excluir() {
    this.service.delete(this.cargo.cargoId).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Não é possível excluir este cargo')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
