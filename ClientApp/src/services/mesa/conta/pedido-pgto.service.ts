import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PedidoPgto } from '../../../models/mesa/pedido-pgto';
import { PedidoPagamento } from '../../../models/mesa/pedido-pagamento';

@Injectable()
export class PedidoPgtoService {

  private readonly URL = '/api/PedidoPgto';

  constructor(private http: HttpClient) { }

  getAll(idPedido: number): Observable<Array<PedidoPgto>> {
    return this.http.get<Array<PedidoPgto>>(`${this.URL}/GetAll/${idPedido}`);
  }

  post(pedidoPagamento: PedidoPagamento): Observable<number> {
    return this.http.post<number>(this.URL, pedidoPagamento);
  }

  delete(pedidoPgtoId: number): Observable<number> {
    return this.http.delete<number>(`${this.URL}/${pedidoPgtoId}`);
  }

}
