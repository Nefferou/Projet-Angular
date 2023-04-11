import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-card/product-card.model';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], search: String){
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  }

}
