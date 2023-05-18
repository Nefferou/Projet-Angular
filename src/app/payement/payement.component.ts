import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {
  orderNumber: any;
  cartItems: any;
  loading = true;

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartService.getCartHistory().subscribe(
      response => {
        this.cartItems = JSON.parse(response).active_cart[0]['cart'][0];
        console.log(this.cartItems);
        this.loading = false;
      }
    );
    this.route.queryParamMap.subscribe((params) => {
        this.orderNumber = params.get('id');
    }
    );

  }
}
