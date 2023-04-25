import { Component, Input } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Service/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!:Pokemon;

  selectedPrice: number = 0;

  constructor(private pokemonService: PokemonService) { }


  addPokemon(pokemon: Pokemon) {
    this.selectedPrice++;
  }

  removePokemon(pokemon: Pokemon) {
    if(this.selectedPrice >0){
      this.selectedPrice--;
    }

  }

  Favorite(pokemon: Pokemon) {
    (pokemon.isLikes)? pokemon.isLikes = false : pokemon.isLikes = true;
    }

}
