import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../pages/home/modelos/usuario';
import { ApiServiceProvider } from '../api-service/api-service';

const CHAVE = 'avatar-usuario';

@Injectable()

export class UsuariosServiceProvider {
   _url: string;
  private _usuarioLogado: Usuario;

  constructor(private http: HttpClient,
    private _api: ApiServiceProvider) {
      this._url = this._api.url
  }

  efetuaLogin(email, senha) {
      return this.http.post<Usuario>(this._url+'/login', {email, senha})
       .do((usuario: Usuario) => this._usuarioLogado = usuario);  
  }

   obtemUsuarioLogado(){
    return this._usuarioLogado;
  }

  salvaAvatar(avatar){
    localStorage.setItem(CHAVE, avatar);
  }

  obtemAvatar(){
    return localStorage.getItem(CHAVE)
     ? localStorage.getItem(CHAVE) 
     : 'assets/img/avatar-padrao.jpg';
  }
}
