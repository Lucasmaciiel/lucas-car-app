import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
  ],
  exports: [
    CadastroPage // sempre que criar uma página, criar o exports da propria pagina, para que possa ser acessado
  ]
})
export class CadastroPageModule {}
