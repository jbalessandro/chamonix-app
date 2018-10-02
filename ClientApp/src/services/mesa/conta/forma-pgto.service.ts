import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { FormaPgto } from '../../../models/forma-pgto';

@Injectable()
export class FormaPgtoService {

  private readonly URL = '/api/FormaPgto';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<FormaPgto>> {
    return this.http.get<Array<FormaPgto>>(this.URL);
  }

  get(id: number): Observable<FormaPgto> {
    return this.http.get<FormaPgto>(`${this.URL}/${id}`);
  }

  post(formaPgto: FormaPgto): Observable<FormaPgto> {
    return this.http.post<FormaPgto>(this.URL, formaPgto);
  }

  put(formaPgto: FormaPgto): Observable<FormaPgto> {
    return this.http.put<FormaPgto>(this.URL, formaPgto);
  }

  delete(id: number): Observable<FormaPgto> {
    return this.http.delete<FormaPgto>(`${this.URL}/${id}`);
  }

}
