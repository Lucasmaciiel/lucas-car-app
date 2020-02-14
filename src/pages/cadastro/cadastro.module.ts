import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
    TranslateModule.forChild()
  ],
  exports: [
    CadastroPage // sempre que criar uma página, criar o exports da propria pagina, para que possa ser acessado
  ]
})
export class CadastroPageModule {}
