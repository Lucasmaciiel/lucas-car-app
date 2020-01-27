<<<<<<< HEAD
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

http://localhost:8080/api/carro/listaTodos

http://localhost:8100/ionic-lab

10º subir projeto no github 
dar o comando git remote add ...
git push -u origin master

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

=======
# lucar-car
Projeto em Ionic
>>>>>>> 421ebb03580a1fcae6ba53852e87bf430ce1f381
