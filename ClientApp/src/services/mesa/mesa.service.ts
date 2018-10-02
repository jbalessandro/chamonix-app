import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { MesaPosicao } from '../../models/mesa-posicao';
import { Pedido } from '../../models/mesa/pedido';
import { Conta } from '../../models/mesa/conta';

@Injectable()
export class MesaService {

  private readonly URL = '/api/Mesa';

  constructor(private http: HttpClient) { }

  getPosicaoMesas(): Observable<Array<MesaPosicao>> {
    return this.http.get<Array<MesaPosicao>>(`${this.URL}/GetPosicaoMesas`);
  }

  trocarMesa(mesaId: number, novaMesaId: number): Observable<number> {
    return this.http.get<number>(`${this.URL}/TrocarMesa/${mesaId}/${novaMesaId}`);
  }

  getConta(mesaId: number): Observable<Conta> {
    return this.http.get<Conta>(`${this.URL}/GetConta/${mesaId}`);
  }

  fecharMesa(mesaId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.URL}/FecharMesa/${mesaId}`);
  }

}
