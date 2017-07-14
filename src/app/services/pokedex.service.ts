import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pokemon, PokemonDetail } from '../classes/classes';

import pokedexTestData from './test-data/pokedex';
import pokemonDetailTestData from './test-data/pokemonDetail';

@Injectable()
export class PokedexService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private pokedexUrl = '/api/pokedex';
  private pokemonDetailUrl = '/api/details';

  constructor(private http: Http) { }

  getPokedex(): Promise<Pokemon[]> {
    // return this.http.get(this.pokedexUrl)
    //   .toPromise()
    //   .then(response => response.json().data as Pokemon[])
    //   .catch(this.handleError);

    return Promise.resolve(pokedexTestData.data.results as Pokemon[]);
  }

  getPokemonDetail(selectedPokemonUrl: string): Promise<PokemonDetail> {
    // return this.http.get(`${this.pokemonDetailUrl}?url=${selectedPokemonUrl}`)
    //   .toPromise()
    //   .then(response => response.json().data as PokemonDetail)
    //   .catch(this.handleError);

    return Promise.resolve(pokemonDetailTestData.data as PokemonDetail);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

