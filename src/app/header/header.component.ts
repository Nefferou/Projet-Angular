import { Component } from '@angular/core';
import { PokemonService } from '../Service/pokemon.service';
import { SortByPipe } from '../sort-by.pipe';

@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
[x: string]: any;
  value=0;

  user = {
    username: 'John',
    Cryptokemons: 10
  };

  constructor(private pokemonService: PokemonService, private sortByPipe: SortByPipe) {

  }

}
