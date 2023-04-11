import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-card/product-card.model';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(products: Product[], order: String): Product[] {
    if (!products || products.length === 0) {
      return [];
    }

    // On trie les produits par ordre alphabétique selon leur titre
    return products.sort((a, b) => {
      let titleA = a.title.toLowerCase();
      let titleB = b.title.toLowerCase();

      let i = 0;
      while (titleA.charAt(i) === titleB.charAt(i) && i < titleA.length && i < titleB.length) {
        i++;
      }

      if (titleA.charAt(i) < titleB.charAt(i)) {
        return order === 'nameDesc' ? 1 : -1;
      } else if (titleA.charAt(i) > titleB.charAt(i)) {
        return order === 'nameDesc' ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
}
