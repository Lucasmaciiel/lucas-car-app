import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../pages/home/modelos/carro';

@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: HttpClient) {   
  }
  
  lista() {
    return this._http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos');
  }

}