import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiServiceProvider {

  private _url: string = 'http://10.11.21.68:8080/api';

  constructor(public http: HttpClient) {
    
  }
  get url(){
    return this._url;
  }

}
