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
    console.log(pokemon.name+" ADDED")
  }

  removePokemon(pokemon: Pokemon) {
    console.log(pokemon.name+" REMOVED")

  }

  Favorite(pokemon: Pokemon) {
    (pokemon.isLikes)? pokemon.isLikes = false : pokemon.isLikes = true;
    }

}
/**
 *       <button class="add" (click)="addPokemon(pokemon)">+</button>
      <button class="remove" (click)="removePokemon(pokemon)">-</button>
    </div>
    <div class="favorites">
      <button class="favorite" (click)="addFavorite(pokemon)">♥</button>
      <button class="unfavorite" (click)="removeFavorite(pokemon)">♡</button>
 */
