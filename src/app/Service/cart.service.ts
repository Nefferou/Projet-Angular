import { Injectable } from '@angular/core';
import { Pokeball } from '../Models/pokeball.model';
import { Pokemon } from '../Models/pokemon.model';
import { Cart } from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Cart[] = [];

  constructor() { }

  addToCart(pokemon: Pokemon, pokeball: Pokeball, quantity: number) {
    this.cartItems = this.getCartItems();
    const existingItem = this.cartItems.find(item =>
      item.pokemon.id === pokemon.id && item.pokeball.id === pokeball.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new Cart(
        pokemon,
        pokeball,
        quantity
      );
      this.cartItems.push(newItem);
    }

    this.saveCartItems();
  }

  deleteCart(){
    this.cartItems = [];
    this.saveCartItems();
  }

  getCartItems() {
    return this.cartItems;
  }

  saveCartItems() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  loadCartItems() {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      this.cartItems = JSON.parse(cartItems);
    }
  }
  removeItem(pokemon: Pokemon,pokeball: Pokeball){
    const existingItem = this.cartItems.find(item =>
      item.pokemon.id === pokemon.id && item.pokeball === pokeball
    );
    if (existingItem) {
      existingItem.quantity--;
      if(existingItem.quantity == 0){
        this.cartItems.splice(this.cartItems.indexOf(existingItem),1);
      }
    }
    this.saveCartItems();
  }
  deleteItem(pokemon : Pokemon,pokeball : Pokeball){
    const existingItem = this.cartItems.find(item =>
      item.pokemon.id === pokemon.id && item.pokeball === pokeball
    );
    if (existingItem) {
      this.cartItems.splice(this.cartItems.indexOf(existingItem),1);
    }
    this.saveCartItems();
  }
}
