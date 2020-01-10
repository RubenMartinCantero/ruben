import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { PokedexService } from '../pokedex.service';

@Component({
    selector: 'app-pokedex-detail',
    templateUrl: './pokedex-detail.component.html',
    styleUrls: ['./pokedex-detail.component.scss'],
})
export class PokedexDetailComponent implements OnInit {
    public pokemonSelected: any;
    public englishDescription: any;
    public currentSelectPokemonImage: any;
    public currentImageIsShiny = false;

    constructor(
        private route: ActivatedRoute,
        private pokedexService: PokedexService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.pokedexService
                .getPokemonDetailsByName(params.get('id'))
                .then(response => {
                    this.pokemonSelected = response.pokemon;
                    console.log(this.pokemonSelected);
                    const languageArray = response.details.flavor_text_entries;
                    this.englishDescription = languageArray.find(
                        x => x.language.name === 'en'
                    );
                    this.currentSelectPokemonImage = this.pokemonSelected.sprites.front_default;
                });
        });
    }

    public switchShiny() {
        this.currentImageIsShiny = !this.currentImageIsShiny;
        if (this.currentImageIsShiny === false) {
            this.currentSelectPokemonImage = this.pokemonSelected.sprites.front_default;
        } else {
            this.currentSelectPokemonImage = this.pokemonSelected.sprites.front_shiny;
        }
    }
}
