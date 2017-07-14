import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonDetail } from '../../classes/classes';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: [ './pokemon-detail.component.css' ]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDetail;

  constructor(private pokedexService: PokedexService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    console.log('hi');
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        console.log(params);
        return this.pokedexService.getPokemonDetail(params.get('url'))
      })
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }
}
