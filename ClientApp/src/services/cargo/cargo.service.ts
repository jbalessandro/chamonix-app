import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Cargo } from '../../models/cargo';

@Injectable()
export class CargoService {

  private readonly URL = '/api/Cargo';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Cargo>> {
    return this.http.get<Array<Cargo>>(this.URL);
  }

  get(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.URL}/${id}`);
  }

  post(usuario: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.URL, usuario);
  }

  put(usuario: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(this.URL, usuario);
  }

  delete(id: number): Observable<Cargo> {
    return this.http.delete<Cargo>(`${this.URL}/${id}`);
  }
}
