import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonDetail } from '../../classes/classes';
import { PokedexService } from '../../services/services';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: [ './pokemon-detail.component.css' ]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDetail;

  constructor(private pokedexService: PokedexService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPokemonDetail();
  }

  getPokemonDetail(): void {
    this.pokedexService.getPokemonDetail(this.route.queryParams['value'].url)
      .then(pokemon => this.pokemon = pokemon);
  }
}
