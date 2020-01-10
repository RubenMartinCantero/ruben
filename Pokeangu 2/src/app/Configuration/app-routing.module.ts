import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from '../pokedex/pokedex.component';
import { PokedexDetailComponent } from '../pokedex-detail/pokedex-detail.component';
import { PokedexMapComponent } from '../pokedex-map/pokedex-map.component';

const appRoutes: Routes = [
    { path: 'list', component: PokedexComponent },
    { path: 'detail', component: PokedexComponent },
    { path: 'detail/:id', component: PokedexDetailComponent },
    { path: 'map', component: PokedexMapComponent },
    { path: 'map/:id', component: PokedexMapComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
