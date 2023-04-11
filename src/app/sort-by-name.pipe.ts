import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './Models/pokemon.model';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(products: Pokemon[], order: String): Pokemon[] {
    if (!products || products.length === 0) {
      return [];
    }

    // On trie les produits par ordre alphabétique selon leur titre
    return products.sort((a, b) => {
      let titleA = a.name.toLowerCase();
      let titleB = b.name.toLowerCase();

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
