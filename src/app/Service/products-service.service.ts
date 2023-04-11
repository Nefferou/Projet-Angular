import { Injectable } from '@angular/core';
import { Product } from '../product-card/product-card.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product("Hugo", "Peu utilisé mais peut se rendre utile", "/assets/Hugo.jpg", 10, false, 0, new Date('12/18/2002'), false, "1m85"),
    new Product("Yves", "私は中国人です お米が好きです", "/assets/Yves.jpg", 150, false, 1350, new Date('11/08/2002'), false, "1m78"),
    new Product("Ryan", "Ramasse du coton comme personne", "/assets/Ryan.jpg", 0, false, 12045, new Date('06/18/2002'), false, "1m82"),
    new Product("Fleming", "Date de l'époque des dinosaure", "/assets/Fleming.jpg", 5600, false, 35, new Date('06/16/1375'), false, "1m26")
  ]

  getAllProducts() {
    return this.products;
  }

  onAddLike(product: Product): void {
    if(product.isLikes){
      product.isLikes = false;
      product.likes--;
    }
    else{
      product.isLikes = true;
      product.likes++;
    }
  }

  onAddFav(product: Product): void {
    if(product.fav){
      product.fav = false;
    }
    else{
      product.fav = true;
    }
  }
}

