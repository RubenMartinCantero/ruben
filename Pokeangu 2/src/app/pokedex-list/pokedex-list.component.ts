import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges,
} from '@angular/core';

@Component({
    selector: 'app-pokedex-list',
    templateUrl: './pokedex-list.component.html',
    styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit, OnChanges {
    @Input() pokemonList: object[];
    @Input() pokemonSelected;

    @Output() choosePokemonEvent = new EventEmitter<object>();
    @Output() chooseTypeEvent = new EventEmitter<object>();

    selectedOption = '';
    pokemonSearchInput = '';
    private pokemonSelect: any = undefined;
    private currentListIndex = 0;
    private currentSelectPokemonImage: any = undefined;
    private currentImageIsShiny = false;
    private storagePokemonKey = 'pokemonSelect';
    private pokemonTypes = [
        'all',
        'normal',
        'fighting',
        'flying',
        'poison',
        'ground',
        'rock',
        'bug',
        'steel',
        'fire',
        'water',
        'grass',
        'electric',
        'psychic',
        'ice',
        'dark',
        'fairy',
    ];

    constructor() {}

    ngOnInit() {}

    ngOnChanges() {
        this.checkPokemonSelected();
    }

    private checkPokemonSelected() {
        if (window.sessionStorage[this.storagePokemonKey] === undefined) {
            this.pokemonSelect = this.pokemonList[0];
            this.choosePokemon(this.pokemonList[0]);
            window.sessionStorage[this.storagePokemonKey] = JSON.stringify(
                this.pokemonSelect
            );
        } else {
            this.pokemonSelect = JSON.parse(
                window.sessionStorage[this.storagePokemonKey]
            );
            this.choosePokemon(this.pokemonSelect);
        }
    }

    private updateStorage() {
        window.sessionStorage[this.storagePokemonKey] = JSON.stringify(
            this.pokemonSelect
        );
    }

    public choosePokemon(pokemon) {
        this.pokemonSelect = pokemon;
        this.updateStorage();
        if (this.pokemonList !== undefined) {
            this.currentListIndex = this.pokemonList.findIndex(
                (x: any) => x.id === this.pokemonSelect.id
            );
        }
        if (this.currentImageIsShiny === false) {
            this.currentSelectPokemonImage = pokemon.image;
        } else {
            this.currentSelectPokemonImage = this.pokemonSelected.pokemon.sprites.front_shiny;
        }
        this.choosePokemonEvent.emit(pokemon);
    }

    public chooseType(type) {
        this.currentListIndex = 0;
        this.chooseTypeEvent.emit(type);
    }

    public onChange(type) {
        this.updateStorage();
        this.chooseType(type);
    }

    public leftArrow() {
        if (this.currentListIndex > 0) {
            this.choosePokemon(this.pokemonList[this.currentListIndex - 1]);
        }
    }

    public rightArrow() {
        if (this.currentListIndex < this.pokemonList.length - 1) {
            this.choosePokemon(this.pokemonList[this.currentListIndex + 1]);
        }
    }

    public switchShiny() {
        this.currentImageIsShiny = !this.currentImageIsShiny;
    }
}
