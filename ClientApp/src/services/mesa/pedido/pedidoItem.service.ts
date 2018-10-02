import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PedidoItem } from '../../../models/mesa/pedidoItem';

@Injectable()
export class PedidoItemService {

  private readonly URL = '/api/PedidoItem';

  constructor(private http: HttpClient) { }

  get(pedidoItemId: number): Observable<PedidoItem> {
    return this.http.get<PedidoItem>(`${this.URL}/${pedidoItemId}`);
  }

  getAll(pedidoId: number): Observable<Array<PedidoItem>> {
    return this.http.get<Array<PedidoItem>>(`${this.URL}/GetItensPedido/${pedidoId}`);
  }

  post(pedidoItem: PedidoItem): Observable<PedidoItem> {
    return this.http.post<PedidoItem>(this.URL, pedidoItem);
  }

  put(pedidoItem: PedidoItem): Observable<PedidoItem> {
    return this.http.put<PedidoItem>(this.URL, pedidoItem);
  }

  delete(pedidoItemId: number): Observable<PedidoItem> {
    return this.http.delete<PedidoItem>(`${this.URL}/${pedidoItemId}`);
  }
}
