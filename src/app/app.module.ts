import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, PokedexComponent, PokemonDetailComponent } from './components/components';
import { LayoutService, PokedexService } from './services/services';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,

    // Material Design Modules
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdToolbarModule
  ],
  providers: [ LayoutService, PokedexService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
