import { Component, Input } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Service/pokemon.service';
import { Router } from '@angular/router';
import { Pokeball } from '../Models/pokeball.model';
import { Cart } from '../Models/cart.model';
import { CartService } from '../Service/cart.service';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!:Pokemon;
  selectedQuantity: number = 0;
  selectedPokeball!: Pokeball;
  pokeballs!: Pokeball[];
  price!: number;

  constructor(private pokemonService: PokemonService, private router: Router,private cartService: CartService) {
      new CartService();
  }

  onPokeballChange(pokeball: Pokeball) {
    this.selectedPokeball = pokeball;
    this.updatePrice();
    }

  addToCart() {
    if(this.price > 0){
    this.cartService.addToCart(this.pokemon, this.selectedPokeball, this.selectedQuantity);
    console.log(JSON.parse(localStorage.getItem('cart')!));
    this.selectedQuantity=0;
    this.selectedPokeball = this.pokeballs[0]
    this.updatePrice();
    }
  }

  removeQuantity() {
    if(this.selectedQuantity >0){
      this.selectedQuantity--;
      this.updatePrice();
    }
  }

  addQuantity(){
    this.selectedQuantity++;
    this.updatePrice();
  }

  Favorite(pokemon: Pokemon) {
    if(pokemon.isFav){
      pokemon.isFav = false;
/*       const user = JSON.parse(localStorage.getItem("User"));
      let fav = JSON.parse(user.pokemonFav); */
    }else{
      pokemon.isFav = true;
    }
  }

    redirectToPokemonDetails(id: number) {
      this.router.navigate(['/pokemon/', id]);
    }

    ngOnInit(){
      const user = JSON.parse(localStorage.getItem('User')!)
      const pokemonFav = user.pokemonFav
/*       user.pokemonFav = JSON.parse(user.pokemonFav);
 */      console.log(user);
/*       this.pokemon.isFav = user.pokemonFav.includes(this.pokemon.id); */
      this.pokeballs = Pokeball.getPokeballs();
      this.selectedPokeball = this.pokeballs[0];
      if(this.pokemon.apiEvolutions.length > 0){
        if(this.pokemon.apiPreEvolution != "none"){
          this.pokemon.price = 7500
        }else{
          this.pokemon.price = 5000
        }
      }else{
        this.pokemon.price = 10000
      }
        this.updatePrice();
    }

    updatePrice(){
      this.price = (this.pokemon.price! + this.selectedPokeball.price ) * this.selectedQuantity;
    }
}
