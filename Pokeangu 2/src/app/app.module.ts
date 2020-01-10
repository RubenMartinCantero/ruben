import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';
import { PokedexMapComponent } from './pokedex-map/pokedex-map.component';

import { FilterNamePipe } from './filter-name.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { NavComponent } from './nav/nav.component';

import { AppRoutingModule } from './Configuration/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        PokedexComponent,
        PokedexListComponent,
        PokedexDetailComponent,
        PokedexMapComponent,
        FilterNamePipe,
        NavComponent,
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
