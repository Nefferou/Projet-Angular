import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Cart } from '../Models/cart.model';
import { Pokeball } from '../Models/pokeball.model';
import { Pokemon } from '../Models/pokemon.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderNumber: number | undefined;
  checkoutForm: FormGroup;
  cartItems: any;
  loading = true;

  constructor(private cartService: CartService, private router: Router, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cartService.getCartHistory().subscribe(
      response => {
        this.cartItems = JSON.parse(response).active_cart[0]['cart'][0];
        this.orderNumber = this.cartItems['id'];
        this.loading = false
      },
      error => {
        console.log("Erreur lors de la récupération de l'historique du panier :", error);
        this.loading = false
      }
    );
  }

  deleteAll() {
    this.cartService.deleteCart();
  }

  removeItem(pokemon: Pokemon, pokeball: Pokeball) {
    this.cartService.removeItem(pokemon, pokeball);
  }

  deleteItem(pokemon: Pokemon, pokeball: Pokeball) {
    this.cartService.deleteItem(pokemon, pokeball);
  }

  addItem(pokemon: Pokemon, pokeball: Pokeball) {
    this.cartService.addToCart(pokemon, pokeball, 1);
  }

  calculateTotal() {
    this.cartService.calculateTotalPrice();
  }

  redirectToPaiement(){
    this.router.navigate(['/payement'], { queryParams: { id: this.orderNumber } });
  }

  onSubmit(customerData: any) {
    console.warn('We will call you soon, please verify this data => ', customerData);
    this.checkoutForm.reset();
  }
}
