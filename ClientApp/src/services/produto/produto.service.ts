import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Produto } from '../../models/produto';

@Injectable()
export class ProdutoService {

  private readonly URL = '/api/Produto';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Produto>> {
    return this.http.get<Array<Produto>>(this.URL);
  }

  get(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.URL}/${id}`);
  }

  post(usuario: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.URL, usuario);
  }

  put(usuario: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.URL, usuario);
  }

  delete(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.URL}/${id}`);
  }
}
