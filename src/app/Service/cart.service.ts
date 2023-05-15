import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Cart[] = [];

  constructor() {
    const savedItems = localStorage.getItem('cart');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }

  addToCart(item: Cart) {
    this.items.push(item);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getCartItems(): Cart[] {
    return this.items;
  }

  removeItem(item: Cart) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }
}
