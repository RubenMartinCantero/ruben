import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

// Cada path debe tener añadido el import desde donde se encuentra
// Añadimos dos rutas donde navegar. y una vacia donde redirigir, empezar de cero.
// Se añade una ruta hijo donde se incluyen las rutas para cada Recipe
// Se añade una nueva ruta para generar un nuevo Recipe,
// enlazado con recipeeEditComponent y su respectivo import y en appmodule se añade tb. Todos necesarios!!
// El nuevo y el edit es el mismo, uno rellenado y el otro vacio.
// Se pone primero el path new para que angular sepa que no tiene que recibir un id en ese momento

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  {path: 'shopping-list', component: ShoppingListComponent },
];

// Importante importar routemodule. El export es para poder usar este router module dentro de app.module

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
