import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

  private _url: string = 'http://localhost:8080/api';

  constructor(public http: Http) {
    
  }
  get url(){
    return this._url;
  }

}
