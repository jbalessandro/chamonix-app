import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mesa } from '../../../models/mesa';
import { MesasService } from '../../../services/mesas/mesas.service';

@Component({
  selector: 'app-mesas-alterar',
  templateUrl: './mesas-alterar.component.html',
  providers: [MesasService]
})
export class MesasAlterarComponent implements OnInit {

  @Input() mesa: Mesa;
  @Output() fecharModal = new EventEmitter<boolean>();
  model = {} as Mesa;

  constructor(private service: MesasService) { }

  ngOnInit() {
    this.model = JSON.parse(JSON.stringify(this.mesa));
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
