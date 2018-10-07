import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Parametro } from '../../models/parametro';

@Injectable()
export class ParametroService {

  private readonly URL = '/api/Parametro';

  constructor(private http: HttpClient) { }

  get(): Observable<Parametro> {
    return this.http.get<Parametro>(this.URL);
  }

  put(parametro: Parametro): Observable<Parametro> {
    return this.http.put<Parametro>(this.URL, parametro);
  }
}
