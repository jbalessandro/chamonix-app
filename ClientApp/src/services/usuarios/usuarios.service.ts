import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuariosService {

  private readonly URL = '/api/Usuario';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(this.URL);
  }

  get(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.URL}/${id}`);
  }

  post(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.URL, usuario);
  }

  put(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.URL, usuario);
  }

  delete(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.URL}/${id}`);
  }
}
