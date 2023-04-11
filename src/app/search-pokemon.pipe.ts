import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon-card/pokemon-card.model';

@Pipe({
  name: 'searchPokemon'
})
export class SearchPokemonPipe implements PipeTransform {

  transform(products: Pokemon[], search: String){
    return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  }

}
