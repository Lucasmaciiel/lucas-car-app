import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from './modelos/carro';
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavLifeCycle } from './utils/ionic/nav/nav-lifecycles';
import { EscolhaPage } from '../escolha/escolha';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifeCycle {

  public carros: Carro[];

  constructor(public navCtrl: NavController, 
    private _loadingCtrl: LoadingController, // carregamento 
    private _alertContrl: AlertController, 
    private _carrosService: CarrosServiceProvider) { //alerta do loading se não carregado       
  }

  ionViewDidLoad(){
    let loading = this._loadingCtrl.create({
      content: 'Carregamento carros...'
    });
    loading.present();

    this._carrosService.lista()
              .subscribe (
                (carros) => {
                    this.carros = carros;
                    loading.dismiss();
                },
                (err: HttpErrorResponse) => {
                    console.log(err);

                    loading.dismiss(); // some o loading 

                    this._alertContrl.create({
                      title: 'Falha na conexão',
                      subTitle: 'Não foi possível carregar a lista de carros. Tente novamente mais tarde.',
                      buttons: [
                        {text: 'Ok'}
                      ]
                    }).present();
                }
              );          
  }

  selecionaCarro(carro: Carro){
    this.navCtrl.push(EscolhaPage.name, {
      carroSelecionado: carro
    });
  }

}
