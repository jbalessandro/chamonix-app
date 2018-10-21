import { Component, OnInit } from '@angular/core';
import { RecebimentoService } from '../../../services/relatorio/recebimento.service';
import { Recebimento } from '../../../models/relatorio/recebimento';

@Component({
  selector: 'app-rel-recebimentos',
  templateUrl: './rel-recebimentos.component.html',
  providers: [RecebimentoService]
})
export class RelRecebimentosComponent implements OnInit {

  recebimentos = [] as Recebimento[];
  total = 0;
  valorOperadora = 0;
  liquido = 0;

  constructor(private service: RecebimentoService) { }

  ngOnInit() {
    this.getRecebimentos();
  }

  getRecebimentos() {
    this.service.getRecebimentos().subscribe(
      data => {
        this.recebimentos = data;
        if (data.length > 0) {
          this.total = data.map(x => x.valor).reduce((sum, current) => sum + current);
          this.valorOperadora = data.map(x => x.valorOperadora).reduce((sum, current) => sum + current);
          this.liquido = data.map(x => x.liquido).reduce((sum, current) => sum + current);
        }
      },
      error => alert('Erro ao listar recebimentos')
    );
  }

}
