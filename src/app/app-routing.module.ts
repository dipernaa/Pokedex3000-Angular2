import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexComponent, PokemonDetailComponent } from './components/components';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokedex',  component: PokedexComponent },
  { path: 'detail',  component: PokemonDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
