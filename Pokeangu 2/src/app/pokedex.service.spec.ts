import { TestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';

describe('PokedexService', () => {
    let pokedexService: PokedexService;

    // beforeEach(() => TestBed.configureTestingModule({}));
    beforeEach(() => {
        pokedexService = new PokedexService(null);
    });

    // it('should be created', () => {
    //   const service: PokedexService = TestBed.get(PokedexService);
    //   expect(service).toBeTruthy();
    // });

    // it('getPokemonByType', (done: DoneFn) => {
    //     pokedexService.getPokemonByType('all').then(response => {
    //         expect(response[1].name).toBe('bulbasaur');
    //         done();
    //     });
    // });

    // it('should return "it works!"'), () => {
    //   expect(pokedexService.testFunc).toBe('it worksss!');
    // }

    // it('getPokemonByType', inject([PokedexService], async(pokedexService = new PokedexService(null)) => {
    //   const result = await pokedexService.getPokemonByType('all').toPromise();
    //   expect(result[1].name).toBe('bulbasaur');
    // }))
});
