1º instale o ionic e o cordova
npm install -g ionic@3.16.0 cordova@7.0.1 --save-exact

2º Verifica se está instalado, versões 
ionic info  

versões
node -v 
npm -v

3º Se der erro na instalação, Desinstale qualquer coisa referente ao Ionic ou Cordova executando:
npm uninstall -g ionic cordova 

4º Para criar um projeto novo 
ionic start nome_do_projeto blank 

---------------------
5º Baixar o projeto aluracar e acessar a pasta do projeto

6º Para rodar o projeto
ionic serve --lab 

npm install 

7º Para gerar um provider --> provê serviços, ex: api 
ionic g provider carros.service

8º Gerar uma página
ionic g page nome_da_pagina

9º rodar a API
npm start

ionic cordova plugin add cordova-plugin-datepicker@0.9  --> instala plugin do datepicker
npm install --save @ionic-native/date-picker

ionic cordova plugin add cordova-plugin-camera@2.4.1 --> instala plugin da camera
npm install --save @ionic-native/camera



ionic cordova platform add android --> instala a plataforma android
ionic cordova platform add ios --> instala a plataforma ios 

ionic cordova build android  --> faz o build da aplicacao e gera o apk na pasta da plataforma
ionic cordova build ios  --> (somente faz o build se estiver no mac)faz o build da aplicacao e gera o apk na pasta da plataforma

ionic cordova run android --> faz o build e instala direto no dispositivo 
----------------
após criar uma página, ir no module, e criar um exports da mesma
http://localhost:8080/api/carro/listaTodos

http://localhost:8100/ionic-lab

10º subir projeto no github 
dar o comando git remote add ...
git push -u origin master

=================
# lucasCar
Projeto em Ionic 

