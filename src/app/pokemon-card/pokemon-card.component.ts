import { Component, Input } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Service/pokemon.service';
import { Router } from '@angular/router';
import { Pokeball } from '../Models/pokeball.model';
import { Cart } from '../Models/cart.model';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!:Pokemon;

  selectedPrice: number = 0;

  constructor(private pokemonService: PokemonService, private router: Router,private cartService: CartService) { }

  addPokemon(arg0: Pokemon) {
    throw new Error('Method not implemented.');
  }

  addToCart(pokemon: Pokemon, pokeball: Pokeball, quantity: number) {
    const item = new Cart(pokemon, pokeball, quantity);
    this.cartService.addToCart(item);
  }

  removeQuantity() {
    if(this.selectedPrice >0){
      this.selectedPrice--;
    }
  }
  addQuantity(){
    this.selectedPrice++;
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
