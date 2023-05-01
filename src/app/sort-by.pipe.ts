import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './Models/pokemon.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(pokemons: Pokemon[], order: string, searchTerm: string): Pokemon[] {
    if (!pokemons || pokemons.length === 0) {
      return [];
    }

    let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (order.includes('name')) {
      // On trie les produits par ordre alphabétique selon leur titre
      return filteredPokemons.sort((a, b) => {
        let titleA = a.name.toLowerCase();
        let titleB = b.name.toLowerCase();

        let i = 0;
        while (
          titleA.charAt(i) === titleB.charAt(i) &&
          i < titleA.length &&
          i < titleB.length
        ) {
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
    } else if(order.includes("id")) {
      // On trie les produits par ordre alphabétique selon leur id
      return filteredPokemons.sort((a, b) => {
        let titleA = a.id;
        let titleB = b.id;

        if (titleA < titleB) {
          return order === 'idDesc' ? 1 : -1;
        } else if (titleA > titleB) {
          return order === 'idDesc' ? -1 : 1;
        } else {
          return 0;
        }
      });
    } else {
      return filteredPokemons;
    }
  }

}
