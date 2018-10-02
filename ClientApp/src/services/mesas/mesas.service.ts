import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Mesa } from '../../models/mesa';

@Injectable()
export class MesasService {

  private readonly URL = '/api/Mesas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Mesa>> {
    return this.http.get<Array<Mesa>>(this.URL);
  }

  get(id: number): Observable<Mesa> {
    return this.http.get<Mesa>(`${this.URL}/${id}`);
  }

  post(usuario: Mesa): Observable<Mesa> {
    return this.http.post<Mesa>(this.URL, usuario);
  }

  put(usuario: Mesa): Observable<Mesa> {
    return this.http.put<Mesa>(this.URL, usuario);
  }

  delete(id: number): Observable<Mesa> {
    return this.http.delete<Mesa>(`${this.URL}/${id}`);
  }
}
