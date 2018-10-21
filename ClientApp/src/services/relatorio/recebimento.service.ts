import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Recebimento } from '../../models/relatorio/recebimento';

@Injectable()
export class RecebimentoService {

    private readonly URL = '/api/Recebimentos';

    constructor(private http: HttpClient) { }

    getRecebimentos(): Observable<Array<Recebimento>> {
        return this.http.get<Array<Recebimento>>(`${this.URL}/GetRecebimentos`);
    }
}
