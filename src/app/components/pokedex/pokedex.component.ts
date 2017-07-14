import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../classes/classes';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: [ './pokedex.component.css' ]
})
export class PokedexComponent implements OnInit {
  pokedex: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private pokedexService: PokedexService, private router: Router) {}

  getPokedex(): void {
    this.pokedexService
      .getPokedex()
      .then(pokedex => this.pokedex = pokedex);
  }

  ngOnInit(): void {
    this.getPokedex();
  }

  onSelect(selectedPokemon: Pokemon): void {
    this.router.navigateByUrl(`/detail?url=${selectedPokemon.url}`);
  }
}
