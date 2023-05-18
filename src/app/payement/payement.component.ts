import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CartService } from '../Service/cart.service';
import { Cart } from '../Models/cart.model';

@Component({
  selector: 'app-payement',
  templateUrl: 'payement.component.html',
  styleUrls: ['payement.component.scss']
})
export class PayementComponent {
  user : any = JSON.parse(localStorage.getItem('User')!);
  cartItems: Cart[] = [];
  total!: number;

  /**
   * Constructor.
   * @param cartService The cart service to retrieve cart items.
   * @param http The HttpClient for sending HTTP requests.
   */
  constructor(private cartService: CartService, private http: HttpClient) {
    this.cartItems = this.cartService.getCartItems();
    this.getTotalCart();
  }

  getTotalCart() : void{
    let total = 0;
    this.cartItems.forEach(cart => {
      total += (cart.pokemon.price + cart.pokeball.price )*cart.quantity;
    });
    this.total = total;
  }

  /**
   * Process the payment and perform necessary actions.
   */
  processPayment(): void {
    // Send confirmation email
    const emailData = {
      to: this.user.email, // Replace with recipient email address
      subject: 'Order Confirmation',
      body: `Thank you for your purchase! Your order details:\n\n${JSON.stringify(this.cartItems)}`
    };

/*     this.http.post('https://api.sendmail.com/send', emailData).subscribe(
      response => {
        console.log('Email sent successfully');
      },
      error => {
        console.error('Error sending email');
      }
    ); */
  }

  buyCart() {
    if(this.user.cryptokemons < this.total){
      return false;
    }else{
      this.user.cryptokemons -= this.total;
      const data ={
        cryptokemons: this.user.cryptokemons
      }
      this.http.put('https://gachemon.osc-fr1.scalingo.io/api/update/cryptokemons',JSON.stringify(data),
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': this.user.token
      }
    }).subscribe(
      response => {
        console.log('cryptokemons updated');
      },
      error => {
        console.error('Error updating cryptokemons :'+error);
      }
      );
      let pc = JSON.parse(this.user.pc)
      this.cartItems.forEach(cart => {
        pc.push(cart.pokemon.id);
        this.user.pc = JSON.stringify(pc);
      }
      );
      this.http.put('https://gachemon.osc-fr1.scalingo.io/api/update/pc',JSON.stringify(this.user.pc),
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': this.user.token
      }
    }).subscribe(
      response => {
        console.log('cryptokemons updated');
      },
      error => {
        console.error('Error updating pc :'+error);
      }
      );
      localStorage.setItem('User',JSON.stringify(this.user));

      return true;
    }
    }
}
