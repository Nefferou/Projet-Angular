import { Component, Input } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Service/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!:Pokemon;

  selectedPrice: number = 0;

  constructor(private pokemonService: PokemonService, private router: Router) { }


  addPokemon(pokemon: Pokemon) {
    this.selectedPrice++;
  }

  removePokemon(pokemon: Pokemon) {
    if(this.selectedPrice >0){
      this.selectedPrice--;
    }

  }

  Favorite(pokemon: Pokemon) {
    if(pokemon.isLikes){
      pokemon.isLikes = false;
/*       const user = JSON.parse(localStorage.getItem("User"));
      let fav = JSON.parse(user.pokemonFav); */
    }else{
      pokemon.isLikes = true;
    }
  }

    redirectToPokemonDetails(id: number) {
      this.router.navigate(['/pokemon/', id]);
    }
}
