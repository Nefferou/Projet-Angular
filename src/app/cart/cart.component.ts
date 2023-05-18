import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Cart } from '../Models/cart.model';
import { Pokeball } from '../Models/pokeball.model';
import { Pokemon } from '../Models/pokemon.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  deleteAll(){
    this.cartService.deleteCart();
  }

  removeItem(pokemon : Pokemon,pokeball : Pokeball){
    this.cartService.removeItem(pokemon,pokeball);
  }

  deleteItem(pokemon : Pokemon,pokeball : Pokeball){
    this.cartService.deleteItem(pokemon,pokeball);
  }

  addItem(pokemon : Pokemon,pokeball : Pokeball){
    this.cartService.addToCart(pokemon,pokeball,1);
  }
}
