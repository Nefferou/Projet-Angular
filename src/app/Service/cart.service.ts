import { Injectable } from '@angular/core';
import { Pokeball } from '../Models/pokeball.model';
import { Pokemon } from '../Models/pokemon.model';
import { Cart } from '../Models/cart.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Cart[] = [];
  private apiUrl = 'https://gachemon.osc-fr1.scalingo.io';
  private paying = 0;
  private totalPrice =0;

  constructor(private http: HttpClient) { }

  updateCart(cart: Cart[]): Observable<any> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/api/update/cart`;
    const headers = { 'Authorization': `${token}` };
    const body = {
      "cart" : cart,
      "totalPrice" : this.calculateTotalPrice(),
      "isActive" : !this.paying
    }
    return this.http.put(url, body, { headers }).pipe(
      catchError(error => {
          console.error('Error:', error);
          return throwError(error);
      })
    );
    ;
  }

  calculateTotalPrice(): number {
    this.cartItems.forEach((cart) =>
      this.totalPrice += cart.quantity * (cart.pokemon.price + cart.pokeball.price)
    )
    return this.totalPrice;
  }


  getCartHistory(): Observable<any> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/api/get/cartHistory`;
    const headers = { 'Authorization': `${token}` };
    return this.http.get(url, { headers }).pipe(
      catchError(error => {
          console.error('Error:', error);
          return throwError(error);
      })
    );
    ;
  }

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
    this.updateCart(this.cartItems).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log("Erreur lors de la récupération de l'historique du panier :", error);
      }
    );;
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
