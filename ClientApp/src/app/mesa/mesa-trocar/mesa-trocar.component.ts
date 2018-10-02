import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MesaService } from '../../../services/mesa/mesa.service';
import { Mesa } from '../../../models/mesa';
import { MesasService } from '../../../services/mesas/mesas.service';

@Component({
  selector: 'app-mesa-trocar',
  templateUrl: './mesa-trocar.component.html',
  providers: [MesaService, MesasService]
})
export class MesaTrocarComponent implements OnInit {

  @Input() mesa: Mesa;
  @Output() mesaId = new EventEmitter<number>();
  mesas = [] as Mesa[];
  id = 0;

  constructor(private service: MesaService, private mesasService: MesasService) { }

  ngOnInit() {
    this.mesasService.getAll().subscribe(
      data => {
        const disponiveis = data.filter(x => x.disponivel);
        if (disponiveis === null || disponiveis.length === 0) {
          alert('Nenhuma mesa disponível');
        } else {
          this.mesas = disponiveis;
        }
      },
      error => alert('Erro ao listar mesas disponíveis')
    );
  }

  trocar() {
    if (this.id === 0) {
      alert('Selecione a nova mesa');
    } else {
      this.service.trocarMesa(this.mesa.mesaId, this.id).subscribe(
        data => {
          if (data === this.mesa.mesaId) {
            alert('Não é possível trocar por esta mesa');
          } else {
            this.mesaId.emit(data);
          }
        }
      );
    }
  }
}
