import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, PokedexComponent, PokemonDetailComponent } from './components/components';
import { PokedexService } from './services/services';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ PokedexService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
