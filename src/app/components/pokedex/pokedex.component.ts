import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../classes/classes';
import { PokedexService } from '../../services/services';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: [ './pokedex.component.css' ]
})
export class PokedexComponent implements OnInit {
  pokedex: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private pokedexService: PokedexService, private router: Router) {}

  ngOnInit(): void {
    this.getPokedex();
  }

  getPokedex(): void {
    this.pokedexService
      .getPokedex()
      .then(pokedex => this.pokedex = pokedex.sort((first, second) => {
        if (first.name > second.name) {
          return 1;
        } else if (first.name < second.name) {
          return -1;
        }

        return 0;
      }));
  }

  onSelect(selectedPokemon: Pokemon): void {
    this.router.navigateByUrl(`/detail?url=${selectedPokemon.url}`);
  }
}
