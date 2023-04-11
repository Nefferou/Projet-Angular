import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon-card/pokemon-card.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [
    new Pokemon(1, "Bulbizarre", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", {"HP": 45,
    "Att": 49,
    "Def": 49,
    "AttSpe": 65,
    "DefSpe": 65,
    "Vit": 45}, {"first" : "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png", "second" : "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"}, 0),
  ];

  getAllProducts() {
    //Pour Hugo
  }

  getOne() {
    return this.pokemons[0];
  }

  onAddLike(pokemon: Pokemon): void {
    if(pokemon.isLikes){
      pokemon.isLikes = false;
      pokemon.likes--;
    }
    else{
      pokemon.isLikes = true;
      pokemon.likes++;
    }
  }

  onAddFav(pokemon: Pokemon): void {
    if(pokemon.fav){
      pokemon.fav = false;
    }
    else{
      pokemon.fav = true;
    }
  }
}
