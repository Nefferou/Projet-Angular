import { Component, Input } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Service/pokemon.service';
import { Router } from '@angular/router';
import { Pokeball } from '../Models/pokeball.model';
import { Cart } from '../Models/cart.model';
import { CartService } from '../Service/cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;
  selectedQuantity: number = 0;
  selectedPokeball!: Pokeball;
  pokeballs!: Pokeball[];
  price!: number;

  constructor(
    private router: Router,
    private cartService: CartService,
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  onPokeballChange(pokeball: Pokeball) {
    this.selectedPokeball = pokeball;
    this.updatePrice();
  }

  addToCart() {
    if (this.price > 0) {
      this.cartService.addToCart(this.pokemon, this.selectedPokeball, this.selectedQuantity);
      console.log(JSON.parse(localStorage.getItem('cart')!));
      this.selectedQuantity = 0;
      this.selectedPokeball = this.pokeballs[0];
      this.updatePrice();
    }
  }

  removeQuantity() {
    if (this.selectedQuantity > 0) {
      this.selectedQuantity--;
      this.updatePrice();
    }
  }

  addQuantity() {
    this.selectedQuantity++;
    this.updatePrice();
  }

  async Favorite(pokemon: Pokemon) {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token provided');
      return;
    }

    try {
      const userToken = await this.userService.getUser(token);
      const user = userToken[0];
      const fav = JSON.parse(user.pokemonFav);
      const index = fav.indexOf(pokemon.id);

      if (index > -1) {
        // Remove from favorites
        fav.splice(index, 1);
        pokemon.isFav = false;
      } else {
        // Add to favorites
        fav.push(pokemon.id);
        pokemon.isFav = true;
      }

      user.pokemonFav = JSON.stringify(fav);
      localStorage.setItem('User', JSON.stringify(user));

      const url = 'https://gachemon.osc-fr1.scalingo.io/api/update/user/pokemonFav';
      const headers = new HttpHeaders().set('Authorization', token);
      const body = { pokemonFav: fav };

      await this.http.put(url, body, { headers }).toPromise();

      this.userService.setUser(user);
    } catch (error) {
      console.error('Failed to update PokemonFav:', error);
    }
  }

  redirectToPokemonDetails(id: number) {
    this.router.navigate(['/pokemon/', id]);
  }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('token')!).then(
      (userToken) => {
        const user = userToken[0];
        const pokemonFav = user.pokemonFav;
        this.pokemon.isFav = pokemonFav.includes(this.pokemon.id);
      }
    );
    this.pokeballs = Pokeball.getPokeballs();
    this.selectedPokeball = this.pokeballs[0];
    if (this.pokemon.apiEvolutions.length > 0) {
      if (this.pokemon.apiPreEvolution !== 'none') {
        this.pokemon.price = 7500;
      } else {
        this.pokemon.price = 5000;
      }
    } else {
      this.pokemon.price = 10000;
    }
    this.updatePrice();
  }

  updatePrice() {
    this.price = (this.pokemon.price! + this.selectedPokeball.price) * this.selectedQuantity;
  }
}
