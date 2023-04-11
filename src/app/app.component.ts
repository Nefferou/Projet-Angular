import { Component, OnInit } from '@angular/core';
import { Product } from './product-card/product-card.model';
import { ProductsService } from './Service/products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product!: Product[]
  search: String = '';
  order: String = '';
  title: String = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.search = '';
    this.title = 'PokemonShop';
    this.product = this.productsService.products;
  }

  // changeOrder() {
  //   if(this.order == 'desc'){
  //     this.order = 'asc';
  //   }
  //   else {
  //     this.order = 'desc';
  //   }
  //   console.log(this.order);
  // }

  changeOrder(e: any) {
    if (e.target.value === 'dateAsc') {
      this.order = 'dateAsc';
    } else if (e.target.value === 'dateDesc') {
      this.order = 'dateDesc';
    } else if (e.target.value === 'nameAsc') {
      this.order = 'nameAsc';
    } else if (e.target.value === 'nameDesc') {
      this.order = 'nameDesc';
    }
    console.log(this.order);
  }
}
