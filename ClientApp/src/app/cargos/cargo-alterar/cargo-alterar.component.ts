import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CargoService } from '../../../services/cargo/cargo.service';
import { Cargo } from '../../../models/cargo';

@Component({
  selector: 'app-cargo-alterar',
  templateUrl: './cargo-alterar.component.html',
  providers: [CargoService]
})
export class CargoAlterarComponent implements OnInit {

  @Input() cargo: Cargo;
  @Output() fecharModal = new EventEmitter<boolean>();
  cargoLocal = {} as Cargo;

  constructor(private service: CargoService) { }

  ngOnInit() {
    this.cargoLocal = JSON.parse(JSON.stringify(this.cargo));
  }

  gravar() {
    this.cargoLocal.descricao = this.cargoLocal.descricao.toUpperCase().trim();
    this.service.put(this.cargoLocal).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Erro ao gravar')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }
}
