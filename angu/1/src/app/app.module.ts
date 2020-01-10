import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

import { HttpClientModule } from '@angular/common/http'; /* Para utilizar HttpClient */

import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './AddForm/addform.component';

import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'list', component: FilmsComponent },
  { path: 'list/:id', component: FilmsComponent },
  { path: 'add', component: AddformComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmListComponent,
    AddformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // // import HttpClientModule after BrowserModule.
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // Muestra información de las rutas en consola, uso para debug
      ),
      ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




/* appcomponent es el padre

creamos un componente films, hicimos toda la logica aqui, lo hemos cambiado, para no tener un solo componente

creamos subcomponentes para qrealizar cosas mas especificas

se crean lista, y details....... film-list y film detail.

en el padre, films, tenemos dos ariables f (films) y sf (selectedfilms)

tenemos hecho: selected film se lo pasamos a film-detail, le pasamos la variable sf, a partir de @input
le pasamos la variable a traves de la input

hay que pasar la lista de films, a film-list mediante una input.


film-service, conecta a una web, a una API con un fichero .json donde esta la lista de peliculas, mediante una http
pide la informacion y la pilla. Esta conectado con films para conectarse y obtener la lista de pelicuals.
*/


/*
Empaquetar proyecto
ng build --prod


alternativaente, podemos hacer un build para otros entornos
ng build --configuration=staging

angular.io/guide/build
*/




/*

editar
archivar (eliminar)

Al hacer click aparece la denuncia
hacer un formulario al denunciar

si le das a editar aparece la denuncia con los campos rellenados
si le das a hacer denuncia, aparece el formulario vacio.


html con denuncia.list

crear servicio, array con 3 denuncias de prueba

al hacer click muestre la denuncia.

al click en registtrar que aparezca un formulario.


AppComponent, el padre de todas las aplicaciones

          hijo1: list-denuncias

          hijo2: from-denuncias

          hijo3: defaultForm-denuncias

    Tenemos un service, que guarda el array con las denuncias, los hijos (componentes) se conectan al servicio
    para getdenuncia (hijo1), o createdenuncia(hijo2)


*/
