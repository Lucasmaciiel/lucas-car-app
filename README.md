1- instalação ionic e o cordova
npm install -g ionic@3.16.0 cordova@7.0.1 --save-exact

2- Verifica versões instaladas
ionic info 
versões
node -v 
npm -v

3- Se der erro na instalação, Desinstale qualquer coisa referente ao Ionic ou Cordova executando:
npm uninstall -g ionic cordova 

4- Cria um projeto novo
ionic start nome_do_projeto blank 

---------------------
5- Baixar o projeto aluracar e acessar a pasta do projeto

6- Para rodar o app no navegador
ionic serve --lab 

npm install 

7- Gerar um provider --> provê serviços, ex: api 
ionic g provider carros.service

8- Gerar uma página
ionic g page nome_da_pagina

9- Rodar a API
npm start

10- instala plugin do datepicker
ionic cordova plugin add cordova-plugin-datepicker@0.9 
npm install --save @ionic-native/date-picker

11- instala plugin da camera
ionic cordova plugin add cordova-plugin-camera@2.4.1 --> 
npm install --save @ionic-native/camera

ionic cordova platform add android --> instala a plataforma android
ionic cordova platform add ios --> instala a plataforma ios 

12- Build da aplicacao e gera o apk na pasta da plataforma
ionic cordova build android   
ionic cordova build ios  --> (somente builda se estiver no mac)

13- faz o build e instala direto no dispositivo 
ionic cordova run android --> 

14 - Roda direto no dispositivo  
ionic cordova run android --device 

após criar uma página, ir no module, e criar um exports da mesma


http://localhost:8080/api/carro/listaTodos
http://localhost:8100/ionic-lab

=================================================================
# lucasCar Projeto em Ionic 

