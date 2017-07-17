import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexComponent, PokemonDetailComponent } from './components/components';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokedex',  component: PokedexComponent, data: { title: 'Pokedex' } },
  { path: 'detail',  component: PokemonDetailComponent, data: { showBackButton: true, title: 'Detail' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
