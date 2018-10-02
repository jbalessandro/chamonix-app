import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MesasService } from '../../../services/mesas/mesas.service';
import { Mesa } from '../../../models/mesa';

@Component({
  selector: 'app-mesas-excluir',
  templateUrl: './mesas-excluir.component.html',
  providers: [MesasService]
})
export class MesasExcluirComponent {

  @Input() mesa: Mesa;
  @Output() fecharModal = new EventEmitter<boolean>();

  constructor(private service: MesasService) { }

  excluir() {
    this.service.delete(this.mesa.mesaId).subscribe(
      data => this.fecharModal.emit(true),
      error => alert('Não é possível excluir esta mesa')
    );
  }

  closeModal() {
    this.fecharModal.emit(false);
  }

}
