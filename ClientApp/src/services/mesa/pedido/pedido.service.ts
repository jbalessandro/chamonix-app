import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Pedido } from '../../../models/mesa/pedido';

@Injectable()
export class PedidoService {

    private readonly URL = '/api/Pedido';

    constructor(private http: HttpClient) { }

    get(idPedido: number): Observable<Pedido> {
        return this.http.get<Pedido>(`${this.URL}/${idPedido}`);
    }

    getPedido(idMesa: number): Observable<Pedido> {
        return this.http.get<Pedido>(`${this.URL}/GetPedido/${idMesa}`);
    }

    post(pedido: Pedido): Observable<Pedido> {
        return this.http.post<Pedido>(this.URL, pedido);
    }

    put(pedido: Pedido): Observable<Pedido> {
        return this.http.put<Pedido>(this.URL, pedido);
    }

    cancelar(pedidoId: number): Observable<boolean> {
        return this.http.get<boolean>(`${this.URL}/CancelarPedido/${pedidoId}`);
    }
}
