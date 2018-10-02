import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Categoria } from '../../models/categoria';

@Injectable()
export class CategoriaService {

  private readonly URL = '/api/Categoria';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(this.URL);
  }

  get(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.URL}/${id}`);
  }

  post(usuario: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.URL, usuario);
  }

  put(usuario: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.URL, usuario);
  }

  delete(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.URL}/${id}`);
  }
}
