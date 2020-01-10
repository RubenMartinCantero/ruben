import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
    public pokemonList: object[];
    public pokemonSelected: any;

    constructor(private pokedexService: PokedexService) {}

    ngOnInit() {
        this.pokedexService.getPokemonList().then(response => {
            this.pokemonList = response;
            this.pokemonSelected = response[0];
        });
    }

    public typeSelect(type) {
        this.pokedexService.getPokemonByType(type).then(response => {
            this.pokemonList = response;
            this.pokemonSelected = response[0];
        });
    }
    public pokemonSelect(pokemon) {
        this.pokedexService
            .getPokemonDetailsByName(pokemon.name)
            .then(response => {
                this.pokemonSelected = response;
            });
    }
}
