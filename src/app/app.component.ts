import { Component, OnInit } from '@angular/core';
import { PokemonService } from './Service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = '';
  constructor(private pokemons: PokemonService) { }
}
