import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-card/product-card.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], order: String) {
    let desc = true; 
    if(order === 'dateAsc') {
      desc = false;
    }
    let res = products.sort((a, b) => {
      if (desc) return b.naissance.getTime() - a.naissance.getTime()
      else return a.naissance.getTime() - b.naissance.getTime();
    });
    return res;
  }
}
