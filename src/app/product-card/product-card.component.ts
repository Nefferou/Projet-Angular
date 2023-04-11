import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product-card.model';
import { ProductsService } from '../Service/products-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
  @Input() myProduct!: Product;
  
  selectedPrice: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.selectedPrice = this.myProduct.price;
  }

  onAddLike() { 
    this.productsService.onAddLike(this.myProduct) 
  }

  onAddFav() { 
    this.productsService.onAddFav(this.myProduct) 
  }

  onAddItems(e: any){
    this.selectedPrice = this.myProduct.price + Number(e.target.value);
  }
}
